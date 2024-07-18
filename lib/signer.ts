import { ISigner } from "./@types/signer";
import { SignedXml } from "xml-crypto";
import { readFileSync } from "node:fs";
import { Cert } from "./@types/cert";
import { promisified as PEM } from "pem";

export class Signer implements ISigner {
    private cert: Cert;

    constructor(cert: Cert) {
        this.cert = cert;
    }

    async signXML(envelope: string, tagRef: string): Promise<string> {
        const pfx = readFileSync(this.cert.cert);
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
        const pfx = readFileSync(this.cert.cert);
        const __cert = await PEM.readPkcs12(pfx, { p12Password: this.cert.pass });

        const sig = new SignedXml({
            privateKey: __cert.key,
            canonicalizationAlgorithm: "http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
            signatureAlgorithm: "http://www.w3.org/2000/09/xmldsig#rsa-sha1",
            getKeyInfoContent: () => {
                const isCertLimit = new RegExp(/(-----BEGIN CERTIFICATE-----|-----END CERTIFICATE-----)/);

                return (
                    "<X509Data>" +
                    "<X509Certificate>" +
                    __cert.cert
                        .toString()
                        .split("\n")
                        .filter((line) => !isCertLimit.test(line))
                        .join("") +
                    "</X509Certificate>" +
                    "</X509Data>"
                );
            },
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
