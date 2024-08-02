import { IBGE_DistrictTable } from "../../general";

export enum CancellationCode {
    ISSUING_ERROR = "1",
    SERVICE_NOT_PROVIDED = "2",
    SIGNATURE_ERROR = "3",
    DUPLICATE_INVOICE = "4",
    PROCESSING_ERROR = "5",
}

export enum RPS_Type {
    RPS = "1",
    RPS_COMBINED_INVOICE_MIXED = "2",
    COUPON = "3",
}

export enum RPS_Status {
    NORMAL = "1",
    CANCELED = "2",
}

export enum SpecialTaxationRegime {
    MUNICIPAL_MICROENTERPRISE = "1",
    ESTIMATE = "2",
    PROFESSIONAL_SOCIETY = "3",
    COOPERATIVE = "4",
    INDIVIDUAL_MICROENTREPRENEUR = "5",
    MICROENTERPRISE_OR_SMALL_BUSINESS = "6",
}

export enum Choice {
    YES = "1",
    NO = "2",
}

export enum DeductionType {}

type Document__Type1 = {
    Cpf: string;
};

type Document__Type2 = {
    Cnpj: string;
};

export type Document = Document__Type1 | Document__Type2;

export type IdentificationPeopleCompany = {
    CpfCnpj: Document;
    InscricaoMunicipal?: string;
};

export type ResponseMessage = {
    Codigo: string;
    Mensagem: string;
    Correcao?: string;
};

export type CompNFSe = {
    Nfse: {
        InfNfse: unknown; // TODO
    };
    NfseCancelamento?: {
        Confirmacao: {
            $: { Id: string };
            Pedido: string;
            DataHora: string;
        };
    };
    NfseSubstituicao?: {
        $: { versao: string };
        SubstituicaoNfse: {
            $: { Id: string };
            NfseSubstituidora: string;
        };
    };
};

export type RPS_Identification = {
    Numero: string;
    Serie: string;
    /** Tipo do RPS:
     * 1 | RPS
     * 2 | RPS Nota Fiscal Conjugada (Mista)
     * 3 | Cupom
     */
    Tipo: RPS_Type;
};

export type CancellationRequestInfos = {
    IdentificacaoNfse: {
        Numero: string;
        CpfCnpj: Document;
        InscricaoMunicipal?: string;
        CodigoMunicipio: IBGE_DistrictTable;
    };
    /** Codigo do Cancelamento da NFS-e:
     * 1 | Erro na emissao
     * 2 | Servico nao prestado
     * 3 | Erro de assinatura
     * 4 | Duplicidade da nota
     * 5 | Erro de processamento
     */
    CodigoCancelamento: CancellationCode;
};

type Contact__Type1 = {
    Telefone: string;
    Email?: string;
};

type Contact__Type2 = {
    Email: string;
};

type Contact = Contact__Type1 | Contact__Type2;

type __Taker = {
    IdentificacaoTomador?: IdentificationPeopleCompany;
    NifTomador?: string;
    RazaoSocial: string;
};

type Taker__Type1 = __Taker & {
    Endereco: {
        Endereco: string;
        Numero: string;
        Complemento?: string;
        Bairro: string;
        CodigoMunicipio: IBGE_DistrictTable;
        Uf: UFIssuer;
        Cep: string;
    };
    Contato: Contact;
};

type Taker__Type2 = __Taker & {
    EnderecoExterior: {
        CodigoPais: string; // FIXME(@@@): length = 4
        EnderecoCompletoExterior: string;
    };
    Contato: Contact;
};

type Taker = Taker__Type1 | Taker__Type2;

type Construction__Type1 = {
    CodigoObra: string;
    Art?: string;
};

type Construction__Type2 = {
    Art: string;
};

type Construction = Construction__Type1 | Construction__Type2;

type Event__Type1 = {
    IdentificacaoEvento: string;
    DescricaoEvento?: string;
};

type Event__Type2 = {
    DescricaoEvento: string;
};

type Event = Event__Type1 | Event__Type2;

type DeductionDocumentIdentification__Type1 = {
    IdentificacaoNfse: {
        CodigoMunicipioGerador: IBGE_DistrictTable;
        NumeroNfse: string;
        CodigoVerificacao?: string;
    };
};

type DeductionDocumentIdentification__Type2 = {
    IdentificacaoNfe: {
        NumeroNfe: string;
        UfNfe: UFIssuer;
        ChaveAcessoNfe: string;
    };
};

type DeductionDocumentIdentification__Type3 = {
    OutroDocumento: {
        IdentificacaoDocumento: string;
    };
};

type DeductionDocumentIdentification =
    | DeductionDocumentIdentification__Type1
    | DeductionDocumentIdentification__Type2
    | DeductionDocumentIdentification__Type3;

export type RPS = {
        InfDeclaracaoPrestacaoServico: {
            $: { Id: string };
            Rps?: {
                IdentificacaoRps?: RPS_Identification;
                DataEmissao: string;
                /** Situacao do RPS:
                 * 1 | Normal
                 * 2 | Cancelado
                 */
                Status: RPS_Status;
                RpsSubstituido?: RPS_Identification;
            };
            Competencia: string;
            Servico: null;
            Prestador: IdentificationPeopleCompany;
            TomadorServico?: Taker;
            Intermediario?: {
                IdentificacaoIntermediario: IdentificationPeopleCompany;
                RazaoSocial: string;
                CodigoMunicipio: IBGE_DistrictTable;
            };
            ConstrucaoCivil?: Construction;
            /** Exigibilidade do ISS da NFS-e:
             * 1 | Microempresa Municipal
             * 2 | Estimativa
             * 3 | Sociedade de Profissionais
             * 4 | Cooperativa
             * 5 | Microempresario Individual (MEI)
             * 6 | Microempresa ou Empresa de Pequeno Porte (ME EPP))
             */
            RegimeEspecialTributacao?: SpecialTaxationRegime;
            /** Sim ou Nao:
             * 1 | Sim
             * 2 | Nao
             */
            OptanteSimplesNacional: Choice;
            /** Sim ou Nao:
             * 1 | Sim
             * 2 | Nao
             */
            IncentivoFiscal: Choice;
            Evento?: Event;
            InformacoesComplementares?: string;
            Deducao?: {
                /** Codigo de identificação do tipo da deducao:
                 * 1 | Materiais
                 * 2 | Subempreitada de mão de obra
                 * 3 | Serviços
                 * 4 | Produção externa
                 * 5 | Alimentação e bebidas/frigobar
                 * 6 | Reembolso de despesas
                 * 7 | Repasse consorciado
                 * 8 | Repasse plano de saúde
                 * 99 | Outras deduções
                 */
                TipoDeducao: DeductionType;
                DescricaoDeducao?: string;
                IdentificacaoDocumentoDeducao: DeductionDocumentIdentification;
                DadosFornecedor: {
                    IdentificacaoFornecedor: Document;
                    FornecedorExterior: {
                        NifFornecedor?: string;
                        CodigoPais: string;
                    };
                };
                DataEmissao: string;
                ValorDedutivel: string;
                ValorUtilizadoDeducao: string;
            };
        };
    }
