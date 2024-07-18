export interface ISigner {
    signXML(envelope: string, tagRef: string): Promise<string>;

    signXML_X509(envelope: string, tagRef: string): Promise<string>;
}
