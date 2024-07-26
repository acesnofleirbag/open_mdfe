import { ISigner } from "./@types/signer";
import { SignedXml } from "xml-crypto";
import { readFileSync } from "node:fs";
import { Cert } from "./@types/cert";
import { promisified as PEM } from "pem";
import { ExpiredCertificateError } from "./errors/expiredCertificateError";

export class Signer implements ISigner {
    private cert: Cert;

    constructor(cert: Cert) {
        this.cert = cert;
    }

    async checkExpirationTime() {
        const pfx = readFileSync(this.cert.pfx);
        const __cert = await PEM.readPkcs12(pfx, { p12Password: this.cert.pass });
        const infos: any = await PEM.readCertificateInfo(__cert.cert);

        if (infos.validity.end < new Date().getTime()) {
            throw new ExpiredCertificateError();
        }
    }

    async signXML(envelope: string, tagRef: string): Promise<string> {
        const pfx = readFileSync(this.cert.pfx);
        const __cert = await PEM.readPkcs12(pfx, { p12Password: this.cert.pass });

        const sig = new SignedXml({
            privateKey: __cert.key,
            canonicalizationAlgorithm: "http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
            signatureAlgorithm: "http://www.w3.org/2000/09/xmldsig#rsa-sha1",
        });

        sig.addReference({
            xpath: `//*[local-name(.)='${tagRef}']`,
            digestAlgorithm: "http://www.w3.org/2000/09/xmldsig#sha1",
            isEmptyUri: true,
            transforms: [
                "http://www.w3.org/2000/09/xmldsig#enveloped-signature",
                "http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
            ],
        });

        sig.computeSignature(envelope, {
            location: { reference: `//*[local-name(.)='${tagRef}']`, action: "after" },
        });

        return sig.getSignedXml();
    }

    async signXML_X509(envelope: string, tagRef: string): Promise<string> {
        const pfx = readFileSync(this.cert.pfx);
        const __cert = await PEM.readPkcs12(pfx, { p12Password: this.cert.pass });

        const sig = new SignedXml({
            publicCert: __cert.cert,
            getCertFromKeyInfo: () => null,
            privateKey: __cert.key,
            canonicalizationAlgorithm: "http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
            signatureAlgorithm: "http://www.w3.org/2000/09/xmldsig#rsa-sha1",
        });

        sig.addReference({
            xpath: `//*[local-name(.)='${tagRef}']`,
            digestAlgorithm: "http://www.w3.org/2000/09/xmldsig#sha1",
            transforms: [
                "http://www.w3.org/2000/09/xmldsig#enveloped-signature",
                "http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
            ],
        });

        sig.computeSignature(envelope, {
            location: { reference: `//*[local-name(.)='${tagRef}']`, action: "after" },
        });

        return sig.getSignedXml();
    }
}
