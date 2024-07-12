import { z } from "zod";
import {
    AdremReductionReason,
    BuyerPresenceOnEstablishmentAtTransactionIndicator,
    CST__Type1,
    CST__Type2,
    CST__Type3,
    CodeCityIBGE,
    ConcessionAct,
    DENATRANColorCode,
    DanfePrintFormat,
    DeterminationMethod__Type1,
    DeterminationMethod__Type2,
    EnvironmentIdentifier,
    ExemptionReason__Type1,
    ExemptionReason__Type2,
    ExemptionReason__Type3,
    ExibilidadeISS,
    FireGunType,
    FuelType,
    ICMSInterstateTaxRate,
    IPITaxStatusCode,
    ImportIndicator,
    ImportMethod,
    IntegrationTypeInPaymentProcess,
    IntermediaryIndicator,
    IssuanceMode,
    IssuingProcess,
    ItemValueDeduction,
    MerchandiseOrigin,
    NFEGoal,
    NFEModel,
    OperationDestinationLocationIdentifier,
    OperationType,
    OperationWithEndConsumer,
    PaymentMode,
    ProcessOrigin,
    ProducerReferencedNFMode,
    ProductComposeTotal,
    RecipientStateSubscriptionIndicator,
    Restriction,
    ShippingMethod,
    SpecialTaxRegimeCode,
    TaxCouponGroup,
    TaxDocumentModel,
    TaxDocumentType,
    TaxIncentiveIndicator,
    TaxRegimeCode,
    TransportRoute,
    UFCodeIBGE,
    UFIssuer,
    VehicleCondition,
    Vin,
} from "../@types/layouts/nfe";
import { RegexSEFAZ } from "./regex";
import { ParserUtility } from "../utils/parser";

const Address = z.object({
    xLgr: z
        .string()
        .min(2)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str)),
    nro: z
        .string()
        .min(1)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str)),
    xCpl: z
        .string()
        .min(1)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    xBairro: z
        .string()
        .min(2)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str)),
    cMun: z.nativeEnum(CodeCityIBGE),
    xMun: z
        .string()
        .min(2)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str)),
    UF: z.nativeEnum(UFIssuer),
    CEP: z
        .string()
        .regex(new RegExp("[0-9]{8}"))
        .transform((str) => str && ParserUtility.scape(str)),
    cPais: z.literal("1058").optional(),
    xPais: z.literal("Brasil").or(z.literal("BRASIL")).optional(),
    fone: z
        .string()
        .regex(new RegExp("[0-9]{6,14}"))
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
});

const Issuer = z.object({
    xNome: z
        .string()
        .min(2)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str)),
    xFant: z
        .string()
        .min(1)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    enderEmit: Address,
    IE: z
        .string()
        .regex(RegexSEFAZ.IE)
        .max(14)
        .transform((str) => str && ParserUtility.scape(str)),
    IEST: z
        .string()
        .regex(RegexSEFAZ.IEWithoutISENTO)
        .max(14)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    IM: z
        .string()
        .min(1)
        .max(15)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    CNAE: z
        .string()
        .regex(new RegExp("[0-9]{7}"))
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    CRT: z.nativeEnum(TaxRegimeCode),
});

const Recipient = z.object({
    xNome: z
        .string()
        .min(2)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    enderDest: Address.optional(),
    indIEDest: z.nativeEnum(RecipientStateSubscriptionIndicator),
    IE: z
        .string()
        .regex(RegexSEFAZ.IEWithoutISENTO)
        .max(14)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    ISUF: z
        .string()
        .regex(new RegExp("[0-9]{8,9}"))
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    IM: z
        .string()
        .min(1)
        .max(15)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    email: z
        .string()
        .min(1)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
});

const Local = z
    .object({
        email: z
            .string()
            .min(1)
            .max(60)
            .transform((str) => str && ParserUtility.scape(str))
            .optional(),
        IE: z
            .string()
            .regex(RegexSEFAZ.IE)
            .transform((str) => str && ParserUtility.scape(str))
            .optional(),
    })
    .merge(Address);

const ImportDocument = z.object({
    nDI: z
        .string()
        .min(1)
        .max(15)
        .transform((str) => str && ParserUtility.scape(str)),
    dDI: z
        .string()
        .regex(RegexSEFAZ.Date)
        .transform((str) => str && ParserUtility.scape(str)),
    xLocDesemb: z
        .string()
        .min(1)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str)),
    UFDesemb: z.nativeEnum(UFIssuer),
    dDesemb: z
        .string()
        .regex(RegexSEFAZ.Date)
        .transform((str) => str && ParserUtility.scape(str)),
    tpViaTransp: z.nativeEnum(TransportRoute),
    vAFRMM: z
        .string()
        .regex(RegexSEFAZ.Decimal13_02)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    tpIntermedio: z.nativeEnum(ImportMethod),
    UFTerceiro: z.nativeEnum(UFIssuer).optional(),
    cExportador: z
        .string()
        .min(1)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str)),
    adi: z
        .array(
            z.object({
                nAdicao: z
                    .string()
                    .regex(new RegExp("[1-9]{1}[0-9]{0,2}"))
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                nSeqAdic: z
                    .string()
                    .regex(new RegExp("[1-9]{1}[0-9]{0,4}"))
                    .transform((str) => str && ParserUtility.scape(str)),
                cFabricante: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str)),
                vDescDI: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02_Optional)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                nDraw: z
                    .string()
                    .min(1)
                    .max(20)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
            }),
        )
        .max(999),
});

const __Product = z.object({
    cProd: z
        .string()
        .min(1)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str)),
    cEAN: z
        .string()
        .regex(new RegExp("SEM GTIN|[0-9]{0}|[0-9]{8}|[0-9]{12,14}"))
        .transform((str) => str && ParserUtility.scape(str)),
    cBarra: z
        .string()
        .min(3)
        .max(30)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    xProd: z
        .string()
        .min(1)
        .max(20)
        .transform((str) => str && ParserUtility.scape(str)),
    NCM: z
        .string()
        .regex(new RegExp("[0-9]{2}|[0-9]{8}"))
        .transform((str) => str && ParserUtility.scape(str)),
    NVE: z
        .array(
            z
                .string()
                .regex(new RegExp("[A-Z]{2}[0-9]{4}"))
                .transform((str) => str && ParserUtility.scape(str)),
        )
        .max(8)
        .optional(),
    CEST: z
        .string()
        .regex(new RegExp("[0-9]{7}"))
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    indEscala: z.literal("S").or(z.literal("N")).optional(),
    CNPJFab: z
        .string()
        .regex(RegexSEFAZ.CNPJ)
        .max(14)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    cBenef: z
        .string()
        .regex(new RegExp("([!-ÿ]{8}|[!-ÿ]{10}|SEM CBENEF)?"))
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    cCredPresumido: z
        .string()
        .regex(new RegExp("[!-ÿ]{8}|[!-ÿ]{10}"))
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    pCredPresumido: z
        .string()
        .regex(RegexSEFAZ.Decimal3_02a04)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    vCredPresumido: z
        .string()
        .regex(RegexSEFAZ.Decimal13_02)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    EXTIPI: z
        .string()
        .regex(new RegExp("[0-9]{2,3}"))
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    CFOP: z
        .string()
        .regex(new RegExp("[1,2,3,5,6,7]{1}[0-9]{3}"))
        .transform((str) => str && ParserUtility.scape(str)),
    uCom: z
        .string()
        .min(1)
        .max(6)
        .transform((str) => str && ParserUtility.scape(str)),
    qCom: z
        .string()
        .regex(RegexSEFAZ.Decimal11_01a04)
        .transform((str) => str && ParserUtility.scape(str)),
    vUnCom: z
        .string()
        .regex(RegexSEFAZ.Decimal11_01a10)
        .transform((str) => str && ParserUtility.scape(str)),
    vProd: z
        .string()
        .regex(RegexSEFAZ.Decimal13_02)
        .transform((str) => str && ParserUtility.scape(str)),
    cEANTrib: z
        .string()
        .regex(new RegExp("SEM GTIN|[0-9]{0}|[0-9]{8}|[0-9]{12,14}"))
        .transform((str) => str && ParserUtility.scape(str)),
    cBarraTrib: z
        .string()
        .min(3)
        .max(30)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    uTrib: z
        .string()
        .min(1)
        .max(6)
        .transform((str) => str && ParserUtility.scape(str)),
    qTrib: z
        .string()
        .regex(RegexSEFAZ.Decimal11_01a04)
        .transform((str) => str && ParserUtility.scape(str)),
    vUnTrib: z
        .string()
        .regex(RegexSEFAZ.Decimal11_01a10)
        .transform((str) => str && ParserUtility.scape(str)),
    vFrete: z
        .string()
        .regex(RegexSEFAZ.Decimal13_02_Optional)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    vSeg: z
        .string()
        .regex(RegexSEFAZ.Decimal13_02_Optional)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    vDesc: z
        .string()
        .regex(RegexSEFAZ.Decimal13_02_Optional)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    vOutro: z
        .string()
        .regex(RegexSEFAZ.Decimal13_02_Optional)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    indTot: z.nativeEnum(ProductComposeTotal),
    DI: z
        .array(
            ImportDocument.extend({
                CPF: z
                    .string()
                    .regex(RegexSEFAZ.CPF)
                    .max(11)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
            }).or(
                ImportDocument.extend({
                    CNPJ: z
                        .string()
                        .regex(RegexSEFAZ.CNPJ)
                        .max(14)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                }),
            ),
        )
        .max(100)
        .optional(),
    detExport: z
        .array(
            z.object({
                nDraw: z
                    .string()
                    .min(1)
                    .max(20)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                exportInd: z
                    .object({
                        nRE: z
                            .string()
                            .regex(new RegExp("[0-9]{0,12}"))
                            .transform((str) => str && ParserUtility.scape(str)),
                        chNFe: z
                            .string()
                            .regex(RegexSEFAZ.AccessKey)
                            .max(44)
                            .transform((str) => str && ParserUtility.scape(str)),
                        qExport: z
                            .string()
                            .regex(RegexSEFAZ.Decimal11_01a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                    })
                    .optional(),
            }),
        )
        .max(500)
        .optional(),
    xPed: z
        .string()
        .min(1)
        .max(15)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    nItemPed: z
        .string()
        .regex(new RegExp("[0-9]{1,6}"))
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    nFCI: z
        .string()
        .regex(RegexSEFAZ.GUID)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    rastro: z
        .array(
            z.object({
                nLote: z
                    .string()
                    .min(1)
                    .max(20)
                    .transform((str) => str && ParserUtility.scape(str)),
                qLote: z
                    .string()
                    .regex(RegexSEFAZ.Decimal08_01a03)
                    .transform((str) => str && ParserUtility.scape(str)),
                dFab: z
                    .string()
                    .regex(RegexSEFAZ.Date)
                    .transform((str) => str && ParserUtility.scape(str)),
                dVal: z
                    .string()
                    .regex(RegexSEFAZ.Date)
                    .transform((str) => str && ParserUtility.scape(str)),
                cAgreg: z
                    .string()
                    .min(1)
                    .max(20)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
            }),
        )
        .max(500)
        .optional(),
    infProdNFF: z
        .object({
            cProdFisco: z
                .string()
                .min(14)
                .max(14)
                .transform((str) => str && ParserUtility.scape(str)),
            cOperNFF: z
                .string()
                .regex(new RegExp("[0-9]{1,5}"))
                .transform((str) => str && ParserUtility.scape(str)),
        })
        .optional(),
    infProdEmb: z
        .object({
            xEmb: z
                .string()
                .min(1)
                .max(8)
                .transform((str) => str && ParserUtility.scape(str)),
            qVolEmb: z
                .string()
                .regex(RegexSEFAZ.Decimal08_01a03)
                .transform((str) => str && ParserUtility.scape(str)),
            uEmb: z
                .string()
                .min(1)
                .max(8)
                .transform((str) => str && ParserUtility.scape(str)),
        })
        .optional(),
});

const Product__Type1 = z
    .object({
        veicProd: z
            .object({
                tpOp: z.nativeEnum(OperationType),
                chassi: z
                    .string()
                    .regex(new RegExp("[A-Z0-9]+"))
                    .min(17)
                    .max(17)
                    .transform((str) => str && ParserUtility.scape(str)),
                cCor: z
                    .string()
                    .min(1)
                    .max(4)
                    .transform((str) => str && ParserUtility.scape(str)),
                xCor: z
                    .string()
                    .min(1)
                    .max(40)
                    .transform((str) => str && ParserUtility.scape(str)),
                pot: z
                    .string()
                    .min(1)
                    .max(4)
                    .transform((str) => str && ParserUtility.scape(str)),
                cilin: z
                    .string()
                    .min(1)
                    .max(4)
                    .transform((str) => str && ParserUtility.scape(str)),
                pesoL: z
                    .string()
                    .min(1)
                    .max(9)
                    .transform((str) => str && ParserUtility.scape(str)),
                pesoB: z
                    .string()
                    .min(1)
                    .max(9)
                    .transform((str) => str && ParserUtility.scape(str)),
                nSerie: z
                    .string()
                    .min(1)
                    .max(9)
                    .transform((str) => str && ParserUtility.scape(str)),
                tpComb: z.nativeEnum(FuelType),
                nMotor: z
                    .string()
                    .min(1)
                    .max(21)
                    .transform((str) => str && ParserUtility.scape(str)),
                CMT: z
                    .string()
                    .min(1)
                    .max(9)
                    .transform((str) => str && ParserUtility.scape(str)),
                dist: z
                    .string()
                    .min(1)
                    .max(4)
                    .transform((str) => str && ParserUtility.scape(str)),
                anoMod: z
                    .string()
                    .regex(new RegExp("[0-9]{4}"))
                    .transform((str) => str && ParserUtility.scape(str)),
                anoFab: z
                    .string()
                    .regex(new RegExp("[0-9]{4}"))
                    .transform((str) => str && ParserUtility.scape(str)),
                tpPint: z
                    .string()
                    .min(1)
                    .max(1)
                    .transform((str) => str && ParserUtility.scape(str)),
                tpVeic: z
                    .string()
                    .regex(new RegExp("[0-9]{1,2}"))
                    .transform((str) => str && ParserUtility.scape(str)),
                espVeic: z
                    .string()
                    .regex(new RegExp("[0-9]{1}"))
                    .transform((str) => str && ParserUtility.scape(str)),
                VIN: z.nativeEnum(Vin),
                condVeic: z.nativeEnum(VehicleCondition),
                cMod: z
                    .string()
                    .regex(new RegExp("[0-9]{1,6}"))
                    .transform((str) => str && ParserUtility.scape(str)),
                cCorDENATRAN: z.nativeEnum(DENATRANColorCode),
                lota: z
                    .string()
                    .regex(new RegExp("[0-9]{1,3}"))
                    .min(1)
                    .max(3)
                    .transform((str) => str && ParserUtility.scape(str)),
                tpRest: z.nativeEnum(Restriction),
            })
            .optional(),
    })
    .merge(__Product);

const Product__Type2 = z
    .object({
        med: z
            .object({
                cProdANVISA: z
                    .string()
                    .regex(new RegExp("[0-9]{11}|[0-9]{13}|ISENTO"))
                    .transform((str) => str && ParserUtility.scape(str)),
                xMotivoIsencao: z
                    .string()
                    .min(1)
                    .max(255)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                vPMC: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
            })
            .optional(),
    })
    .merge(__Product);

const Product__Type3 = z
    .object({
        arma: z
            .array(
                z.object({
                    tpArma: z.nativeEnum(FireGunType),
                    nSerie: z
                        .string()
                        .min(1)
                        .max(15)
                        .transform((str) => str && ParserUtility.scape(str)),
                    nCano: z
                        .string()
                        .min(1)
                        .max(15)
                        .transform((str) => str && ParserUtility.scape(str)),
                    descr: z
                        .string()
                        .min(1)
                        .max(256)
                        .transform((str) => str && ParserUtility.scape(str)),
                }),
            )
            .max(500)
            .optional(),
    })
    .merge(__Product);

const Product__Type4 = z
    .object({
        comb: z
            .object({
                cProdANP: z
                    .string()
                    .regex(new RegExp("[0-9]{9}"))
                    .transform((str) => str && ParserUtility.scape(str)),
                descANP: z
                    .string()
                    .min(2)
                    .max(95)
                    .transform((str) => str && ParserUtility.scape(str)),
                pGLP: z
                    .string()
                    .regex(RegexSEFAZ.Decimal03_02a04max100)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                pGNn: z
                    .string()
                    .regex(RegexSEFAZ.Decimal03_02a04max100)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                pGNi: z
                    .string()
                    .regex(RegexSEFAZ.Decimal03_02a04max100)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                vPart: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                CODIF: z
                    .string()
                    .regex(new RegExp("[0-9]{1,21}"))
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                qTemp: z
                    .string()
                    .regex(RegexSEFAZ.Decimal12_01a04_Temperature)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                UFCons: z.nativeEnum(UFIssuer).and(z.literal("EX")),
                CIDE: z
                    .object({
                        qBCProd: z
                            .string()
                            .regex(RegexSEFAZ.Decimal12_01a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vAliqProd: z
                            .string()
                            .regex(RegexSEFAZ.Decimal11_01a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vCIDE: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                    })
                    .optional(),
                encerrante: z
                    .object({
                        nBico: z
                            .string()
                            .regex(new RegExp("[0-9]{1,3}"))
                            .transform((str) => str && ParserUtility.scape(str)),
                        nBomba: z
                            .string()
                            .regex(new RegExp("[0-9]{1,3}"))
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        nTanque: z
                            .string()
                            .regex(new RegExp("[0-9]{1,3}"))
                            .transform((str) => str && ParserUtility.scape(str)),
                        vEncIni: z
                            .string()
                            .regex(RegexSEFAZ.Decimal12_03)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vEncFin: z
                            .string()
                            .regex(RegexSEFAZ.Decimal12_03)
                            .transform((str) => str && ParserUtility.scape(str)),
                    })
                    .optional(),
                pBio: z
                    .string()
                    .regex(RegexSEFAZ.Decimal03_04max100_Optional)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                origComb: z
                    .array(
                        z.object({
                            indImport: z.nativeEnum(ImportIndicator),
                            cUFOrig: z.nativeEnum(UFCodeIBGE),
                            pOrig: z
                                .string()
                                .regex(RegexSEFAZ.Decimal03_04max100_Optional)
                                .transform((str) => str && ParserUtility.scape(str)),
                        }),
                    )
                    .max(30)
                    .optional(),
            })
            .optional(),
    })
    .merge(__Product);

const Product__Type5 = z
    .object({
        nRECOPI: z
            .string()
            .regex(new RegExp("[0-9]{20}"))
            .max(20)
            .transform((str) => str && ParserUtility.scape(str)),
    })
    .merge(__Product);

const Product = Product__Type1.or(Product__Type2).or(Product__Type3).or(Product__Type4).or(Product__Type5);

const PISST = z.object({
    vPIS: z
        .string()
        .regex(RegexSEFAZ.Decimal13_02)
        .transform((str) => str && ParserUtility.scape(str)),
    indSomaPISST: z.nativeEnum(ProductComposeTotal).optional(),
});

const COFINSST = z.object({
    vCOFINS: z
        .string()
        .regex(RegexSEFAZ.Decimal13_02)
        .transform((str) => str && ParserUtility.scape(str)),
    indSomaCOFINSST: z.nativeEnum(ProductComposeTotal).optional(),
});

const COFINS__Type1 = z.object({
    COFINSAliq: z.object({
        CST: z.nativeEnum(CST__Type1),
        vBC: z
            .string()
            .regex(RegexSEFAZ.Decimal13_02)
            .transform((str) => str && ParserUtility.scape(str)),
        pCOFINS: z
            .string()
            .regex(RegexSEFAZ.Decimal3_02a04)
            .transform((str) => str && ParserUtility.scape(str)),
        vCOFINS: z
            .string()
            .regex(RegexSEFAZ.Decimal13_02)
            .transform((str) => str && ParserUtility.scape(str)),
    }),
});
const COFINS__Type2 = z.object({
    COFINSQtde: z.object({
        CST: z.literal("03"),
        qBCProd: z
            .string()
            .regex(RegexSEFAZ.Decimal12_01a04)
            .transform((str) => str && ParserUtility.scape(str)),
        vAliqProd: z
            .string()
            .regex(RegexSEFAZ.Decimal11_01a04)
            .transform((str) => str && ParserUtility.scape(str)),
        vCOFINS: z
            .string()
            .regex(RegexSEFAZ.Decimal13_02)
            .transform((str) => str && ParserUtility.scape(str)),
    }),
});
const COFINS__Type3 = z.object({
    COFINSNT: z.object({
        CST: z.nativeEnum(CST__Type2),
    }),
});
const COFINS__Type4 = z.object({
    COFINSOutr: z
        .object({
            CST: z.nativeEnum(CST__Type3),
            vCOFINS: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            vBC: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            pCOFINS: z
                .string()
                .regex(RegexSEFAZ.Decimal3_02a04)
                .transform((str) => str && ParserUtility.scape(str)),
        })
        .or(
            z.object({
                CST: z.nativeEnum(CST__Type3),
                vCOFINS: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                qBCProd: z
                    .string()
                    .regex(RegexSEFAZ.Decimal12_01a04)
                    .transform((str) => str && ParserUtility.scape(str)),
                vAliqProd: z
                    .string()
                    .regex(RegexSEFAZ.Decimal11_01a04)
                    .transform((str) => str && ParserUtility.scape(str)),
            }),
        ),
});

const COFINS = COFINS__Type1.or(COFINS__Type2).or(COFINS__Type3).or(COFINS__Type4);

const Transporter = z.object({
    xNome: z
        .string()
        .min(2)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    IE: z
        .string()
        .regex(RegexSEFAZ.IE)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    xEnder: z
        .string()
        .min(1)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    xMun: z
        .string()
        .min(1)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    UF: z.nativeEnum(UFIssuer).optional(),
});

const PIS__Type1 = z.object({
    PISAliq: z.object({
        CST: z.nativeEnum(CST__Type1),
        vBC: z
            .string()
            .regex(RegexSEFAZ.Decimal13_02)
            .transform((str) => str && ParserUtility.scape(str)),
        pPIS: z
            .string()
            .regex(RegexSEFAZ.Decimal3_02a04)
            .transform((str) => str && ParserUtility.scape(str)),
        vPIS: z
            .string()
            .regex(RegexSEFAZ.Decimal13_02)
            .transform((str) => str && ParserUtility.scape(str)),
    }),
});
const PIS__Type2 = z.object({
    PISQtde: z.object({
        CST: z.literal("03"),
        qBCProd: z
            .string()
            .regex(RegexSEFAZ.Decimal12_01a04)
            .transform((str) => str && ParserUtility.scape(str)),
        vAliqProd: z
            .string()
            .regex(RegexSEFAZ.Decimal11_01a04)
            .transform((str) => str && ParserUtility.scape(str)),
        vPIS: z
            .string()
            .regex(RegexSEFAZ.Decimal13_02)
            .transform((str) => str && ParserUtility.scape(str)),
    }),
});
const PIS__Type3 = z.object({
    PISNT: z.object({
        CST: z.nativeEnum(CST__Type2),
    }),
});
const PIS__Type4 = z.object({
    PISOutr: z
        .object({
            CST: z.nativeEnum(CST__Type3),
            vPIS: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            vBC: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            pPIS: z
                .string()
                .regex(RegexSEFAZ.Decimal3_02a04)
                .transform((str) => str && ParserUtility.scape(str)),
        })
        .or(
            z.object({
                CST: z.nativeEnum(CST__Type3),
                vPIS: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                qBCProd: z
                    .string()
                    .regex(RegexSEFAZ.Decimal12_01a04)
                    .transform((str) => str && ParserUtility.scape(str)),
                vAliqProd: z
                    .string()
                    .regex(RegexSEFAZ.Decimal11_01a04)
                    .transform((str) => str && ParserUtility.scape(str)),
            }),
        ),
});

const PIS = PIS__Type1.or(PIS__Type2).or(PIS__Type3).or(PIS__Type4);

const __Tax = z.object({
    vTotTrib: z
        .string()
        .regex(RegexSEFAZ.Decimal13_02)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    PIS: PIS.optional(),
    PISST: PISST.extend({
        vBC: z
            .string()
            .regex(RegexSEFAZ.Decimal13_02_Optional)
            .transform((str) => str && ParserUtility.scape(str)),
        pPIS: z
            .string()
            .regex(RegexSEFAZ.Decimal3_02a04)
            .transform((str) => str && ParserUtility.scape(str)),
    })
        .or(
            PISST.extend({
                qBCProd: z
                    .string()
                    .regex(RegexSEFAZ.Decimal12_01a04)
                    .transform((str) => str && ParserUtility.scape(str)),
                vAliqProd: z
                    .string()
                    .regex(RegexSEFAZ.Decimal11_01a04)
                    .transform((str) => str && ParserUtility.scape(str)),
            }),
        )
        .optional(),
    COFINS: COFINS.optional(),
    COFINSST: COFINSST.extend({
        vBC: z
            .string()
            .regex(RegexSEFAZ.Decimal13_02)
            .transform((str) => str && ParserUtility.scape(str)),
        pCOFINS: z
            .string()
            .regex(RegexSEFAZ.Decimal3_02a04)
            .transform((str) => str && ParserUtility.scape(str)),
    })
        .or(
            COFINSST.extend({
                qBCProd: z
                    .string()
                    .regex(RegexSEFAZ.Decimal12_01a04)
                    .transform((str) => str && ParserUtility.scape(str)),
                vAliqProd: z
                    .string()
                    .regex(RegexSEFAZ.Decimal11_01a04)
                    .transform((str) => str && ParserUtility.scape(str)),
            }),
        )
        .optional(),
    ICMSUFDest: z
        .object({
            vBCUFDest: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            vBCFCPUFDest: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            pFCPUFDest: z
                .string()
                .regex(RegexSEFAZ.Decimal3_02a04)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            pICMSUFDest: z
                .string()
                .regex(RegexSEFAZ.Decimal3_02a04)
                .transform((str) => str && ParserUtility.scape(str)),
            pICMSInter: z.nativeEnum(ICMSInterstateTaxRate),
            pICMSInterPart: z
                .string()
                .regex(RegexSEFAZ.Decimal3_02a04)
                .transform((str) => str && ParserUtility.scape(str)),
            vFCPUFDest: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            vICMSUFDest: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            vICMSUFRemet: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
        })
        .optional(),
});

const __IPI = z.object({
    CNPJProd: z
        .string()
        .regex(RegexSEFAZ.CNPJ)
        .max(14)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    cSelo: z
        .string()
        .min(1)
        .max(60)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    qSelo: z
        .string()
        .regex(new RegExp("[0-9]{1,12}"))
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
    cEnq: z
        .string()
        .min(1)
        .max(3)
        .transform((str) => str && ParserUtility.scape(str)),
});

const IPI__Type1 = __IPI.merge(
    z.object({
        IPITrib: z
            .object({
                CST: z
                    .literal(IPITaxStatusCode.ENTRY_WITH_CREDIT_RECOVERY)
                    .or(z.literal(IPITaxStatusCode.OTHER_ENTRIES))
                    .or(z.literal(IPITaxStatusCode.TAXED_EXIT))
                    .or(z.literal(IPITaxStatusCode.OTHER_OUTPUTS)),
                vIPI: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
            })
            .extend({
                vBC: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                pIPI: z
                    .string()
                    .regex(RegexSEFAZ.Decimal3_02a04)
                    .transform((str) => str && ParserUtility.scape(str)),
            })
            .or(
                z
                    .object({
                        CST: z
                            .literal(IPITaxStatusCode.ENTRY_WITH_CREDIT_RECOVERY)
                            .or(z.literal(IPITaxStatusCode.OTHER_ENTRIES))
                            .or(z.literal(IPITaxStatusCode.TAXED_EXIT))
                            .or(z.literal(IPITaxStatusCode.OTHER_OUTPUTS)),
                        vIPI: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                    })
                    .extend({
                        qUnid: z
                            .string()
                            .regex(RegexSEFAZ.Decimal12_01a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vUnid: z
                            .string()
                            .regex(RegexSEFAZ.Decimal11_01a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                    }),
            ),
    }),
);

const IPI__Type2 = __IPI.merge(
    z.object({
        IPINT: z.object({
            CST: z
                .literal(IPITaxStatusCode.INPUT_TAXED_AT_ZERO_RATE)
                .or(z.literal(IPITaxStatusCode.EXEMPT_ENTRY))
                .or(z.literal(IPITaxStatusCode.NON_TAXED_ENTRY))
                .or(z.literal(IPITaxStatusCode.IMMUNE_ENTRY))
                .or(z.literal(IPITaxStatusCode.ENTRY_WITH_SUSPENSION))
                .or(z.literal(IPITaxStatusCode.OUTPUT_TAXED_AT_ZERO_RATE))
                .or(z.literal(IPITaxStatusCode.EXEMPT_EXIT))
                .or(z.literal(IPITaxStatusCode.UNTAXED_EXIT))
                .or(z.literal(IPITaxStatusCode.IMMUNE_EXIT))
                .or(z.literal(IPITaxStatusCode.EXIT_WITH_SUSPENSION)),
        }),
    }),
);

const IPI = IPI__Type1.or(IPI__Type2);

const Tax__Type1 = __Tax.merge(
    z.object({
        ICMS: z
            .object({
                ICMS00: z.object({
                    orig: z.nativeEnum(MerchandiseOrigin),
                    CST: z.literal("00"),
                    modBC: z.nativeEnum(DeterminationMethod__Type1),
                    vBC: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02)
                        .transform((str) => str && ParserUtility.scape(str)),
                    pICMS: z
                        .string()
                        .regex(RegexSEFAZ.Decimal3_02a04)
                        .transform((str) => str && ParserUtility.scape(str)),
                    vICMS: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02)
                        .transform((str) => str && ParserUtility.scape(str)),
                    pFCP: z
                        .string()
                        .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vFCP: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                }),
            })
            .or(
                z.object({
                    ICMS02: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("02"),
                        qBCMono: z
                            .string()
                            .regex(RegexSEFAZ.Decimal11_01a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        adRemICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSMono: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS10: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("10"),
                        modBC: z.nativeEnum(DeterminationMethod__Type1),
                        vBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pRedBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSSTDeson: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        motDesICMSST: z.nativeEnum(ExemptionReason__Type1).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS15: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("15"),
                        qBCMono: z
                            .string()
                            .regex(RegexSEFAZ.Decimal11_01a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        adRemICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSMono: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        qBCMonoReten: z
                            .string()
                            .regex(RegexSEFAZ.Decimal11_01a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        adRemICMSReten: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSMonoReten: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pRedAdRem: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02max100)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        motRedAdRem: z.nativeEnum(AdremReductionReason).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS20: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("20"),
                        modBC: z.nativeEnum(DeterminationMethod__Type1),
                        pRedBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSDeson: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        motDesICMS: z.nativeEnum(ExemptionReason__Type1).optional(),
                        indDeduzDeson: z.nativeEnum(ItemValueDeduction).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS30: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("30"),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pRedBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSDeson: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        motDesICMS: z.nativeEnum(ExemptionReason__Type2).optional(),
                        indDeduzDeson: z.nativeEnum(ItemValueDeduction).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS40: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("40").or(z.literal("41")).or(z.literal("50")),
                        vICMSDeson: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        motDesICMS: z.nativeEnum(ExemptionReason__Type3).optional(),
                        indDeduzDeson: z.nativeEnum(ItemValueDeduction).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS51: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("51"),
                        modBC: z.nativeEnum(DeterminationMethod__Type1).optional(),
                        pRedBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        cBenefRBC: z
                            .string()
                            .regex(new RegExp("[!-ÿ]{8}|[!-ÿ]{10}"))
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSOp: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pDif: z
                            .string()
                            .regex(RegexSEFAZ.Decimal03_02a04max100)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSDif: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPDif: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPDif: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS53: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("53"),
                        qBCMono: z
                            .string()
                            .regex(RegexSEFAZ.Decimal11_01a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        adRemICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSMonoOp: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pDif: z
                            .string()
                            .regex(RegexSEFAZ.Decimal03_02a04max100)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSMonoDif: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSMono: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        qBCMonoDif: z
                            .string()
                            .regex(RegexSEFAZ.Decimal11_01a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        adRemICMSDif: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS60: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("60"),
                        vBCSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSSubstituto: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCFCPSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pRedBCEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pICMSEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS61: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("61"),
                        qBCMonoRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal11_01a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        adRemICMSRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSMonoRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS70: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("70"),
                        modBC: z.nativeEnum(DeterminationMethod__Type1),
                        pRedBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pRedBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSDeson: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        motdesicms: z.nativeEnum(ExemptionReason__Type1).optional(),
                        indDeduzDeson: z.nativeEnum(ItemValueDeduction).optional(),
                        vICMSSTDeson: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        motDesICMSST: z.nativeEnum(ExemptionReason__Type1).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS90: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("90"),
                        modBC: z.nativeEnum(DeterminationMethod__Type1).optional(),
                        vBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pRedBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCP: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2).optional(),
                        pMVAST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pRedBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSDeson: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        motDesICMS: z.nativeEnum(ExemptionReason__Type1).optional(),
                        indDeduzDeson: z.nativeEnum(ItemValueDeduction).optional(),
                        vICMSSTDeson: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        motDesICMSST: z.nativeEnum(ExemptionReason__Type1).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSPart: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("10").or(z.literal("90")),
                        modBC: z.nativeEnum(DeterminationMethod__Type1),
                        vBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pRedBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pRedBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pBCOp: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str)),
                        UFST: z.nativeEnum(UFIssuer),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSST: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal("41").or(z.literal("60")),
                        vBCSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSSubstituto: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCPSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCSTDest: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSSTDest: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pRedBCEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pICMSEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN101: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z.literal("101"),
                        pCredSN: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vCredICMSSN: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN102: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z.literal("102").or(z.literal("103")).or(z.literal("300")).or(z.literal("400")),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN201: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z.literal("201"),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pRedBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pCredSN: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vCredICMSSN: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN202: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z.literal("202").or(z.literal("203")),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pRedBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN500: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z.literal("500"),
                        vBCSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSSubstituto: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCFCPSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPSTRet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pRedBCEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pICMSEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMSEfet: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN900: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z.literal("900"),
                        modBC: z.nativeEnum(DeterminationMethod__Type1),
                        vBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pRedBC: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vICMS: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pRedBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vBCST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        pICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vICMSST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        vBCFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04_Optional)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vFCPST: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        pCredSN: z
                            .string()
                            .regex(RegexSEFAZ.Decimal3_02a04)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vCredICMSSN: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                    }),
                }),
            ),
        IPI: IPI.optional(),
        II: z
            .object({
                vBC: z.string().transform((str) => str && ParserUtility.scape(str)),
                vDespAdu: z.string().transform((str) => str && ParserUtility.scape(str)),
                vII: z.string().transform((str) => str && ParserUtility.scape(str)),
                vIOF: z.string().transform((str) => str && ParserUtility.scape(str)),
            })
            .optional(),
    }),
);

const Tax__Type2 = __Tax.merge(
    z.object({
        IPI: IPI,
        ISSQN: z.object({
            vBC: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            vAliq: z
                .string()
                .regex(RegexSEFAZ.Decimal3_02a04)
                .transform((str) => str && ParserUtility.scape(str)),
            vISSQN: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            cMunFG: z.nativeEnum(CodeCityIBGE),
            cListServ: z
                .string()
                .regex(new RegExp("[0-9]{2}.[0-9]{2}"))
                .transform((str) => str && ParserUtility.scape(str)),
            vDeducao: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02_Optional)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            vOutro: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02_Optional)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            vDescIncond: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02_Optional)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            vDescCond: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02_Optional)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            vISSRet: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02_Optional)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            indISS: z.nativeEnum(ExibilidadeISS),
            cServico: z
                .string()
                .min(1)
                .max(20)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            cMun: z.nativeEnum(CodeCityIBGE).optional(),
            cPais: z
                .string()
                .regex(new RegExp("[0-9]{1,4}"))
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            nProcesso: z
                .string()
                .min(1)
                .max(30)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            indIncentivo: z.nativeEnum(TaxIncentiveIndicator),
        }),
    }),
);

const Tax = Tax__Type1.or(Tax__Type2);

const __Transport = z.object({
    modFrete: z.nativeEnum(ShippingMethod),
    transporta: Transporter.extend({
        CNPJ: z
            .string()
            .regex(RegexSEFAZ.CNPJ)
            .max(14)
            .transform((str) => str && ParserUtility.scape(str))
            .optional(),
    })
        .or(
            Transporter.extend({
                CPF: z
                    .string()
                    .regex(RegexSEFAZ.CPF)
                    .max(11)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
            }),
        )
        .optional(),
    retTransp: z
        .object({
            vServ: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            vBCRet: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            pICMSRet: z
                .string()
                .regex(RegexSEFAZ.Decimal3_02a04)
                .transform((str) => str && ParserUtility.scape(str)),
            vICMSRet: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str)),
            CFOP: z
                .string()
                .regex(new RegExp("[1,2,3,5,6,7]{1}[0-9]{3}"))
                .transform((str) => str && ParserUtility.scape(str)),
            cMunFG: z.nativeEnum(CodeCityIBGE),
        })
        .optional(),
    vol: z
        .array(
            z.object({
                qVol: z
                    .string()
                    .regex(new RegExp("[0-9]{1,15}"))
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                esp: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                marca: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                nVol: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                pesoL: z
                    .string()
                    .regex(RegexSEFAZ.Decimal12_03)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                pesoB: z
                    .string()
                    .regex(RegexSEFAZ.Decimal12_03)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                lacres: z
                    .array(
                        z.object({
                            nLacre: z
                                .string()
                                .min(1)
                                .max(60)
                                .transform((str) => str && ParserUtility.scape(str)),
                        }),
                    )
                    .max(5000)
                    .optional(),
            }),
        )
        .max(5000)
        .optional(),
});

const Vehicle = z.object({
    placa: z
        .string()
        .regex(new RegExp("[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}"))
        .transform((str) => str && ParserUtility.scape(str)),
    UF: z.nativeEnum(UFIssuer).or(z.literal("EX")).optional(),
    RNTC: z
        .string()
        .min(1)
        .max(20)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
});

const Transport__Type1 = __Transport.merge(
    z.object({
        veicTransp: Vehicle.optional(),
        reboque: z.array(Vehicle).max(5).optional(),
    }),
);

const Transport__Type2 = __Transport.extend({
    vagao: z
        .string()
        .min(1)
        .max(20)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
});

const Transport__Type3 = __Transport.extend({
    balsa: z
        .string()
        .min(1)
        .max(20)
        .transform((str) => str && ParserUtility.scape(str))
        .optional(),
});

const Transport = Transport__Type1.or(Transport__Type2).or(Transport__Type3);

export const NFEValidator = z.object({
    infNFE: z.object({
        $: z.object({
            versao: z.string().transform((str) => str && ParserUtility.scape(str)),
            Id: z.string().transform((str) => str && ParserUtility.scape(str)),
        }),
        ide: z.object({
            cUF: z.nativeEnum(UFCodeIBGE),
            cNF: z
                .string()
                .regex(new RegExp("[0-9]{8}"))
                .transform((str) => str && ParserUtility.scape(str)),
            natOp: z
                .string()
                .min(1)
                .max(60)
                .transform((str) => str && ParserUtility.scape(str)),
            mod: z.nativeEnum(TaxDocumentModel),
            serie: z
                .string()
                .regex(RegexSEFAZ.Serie)
                .transform((str) => str && ParserUtility.scape(str)),
            nNF: z
                .string()
                .regex(RegexSEFAZ.NFENumber)
                .transform((str) => str && ParserUtility.scape(str)),
            dhEmi: z
                .string()
                .regex(RegexSEFAZ.DateTimeUTC)
                .transform((str) => str && ParserUtility.scape(str)),
            dhSaiEnt: z
                .string()
                .regex(RegexSEFAZ.DateTimeUTC)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            tpNF: z.nativeEnum(TaxDocumentType),
            idDest: z.nativeEnum(OperationDestinationLocationIdentifier),
            cMunFG: z.nativeEnum(CodeCityIBGE),
            tpImp: z.nativeEnum(DanfePrintFormat),
            tpEmis: z.nativeEnum(IssuanceMode),
            cDV: z
                .string()
                .regex(new RegExp("[0-9]{1}"))
                .transform((str) => str && ParserUtility.scape(str)),
            tpAmb: z.nativeEnum(EnvironmentIdentifier),
            finNFe: z.nativeEnum(NFEGoal),
            indFinal: z.nativeEnum(OperationWithEndConsumer),
            indPres: z.nativeEnum(BuyerPresenceOnEstablishmentAtTransactionIndicator),
            indIntermed: z.nativeEnum(IntermediaryIndicator).optional(),
            procEmi: z.nativeEnum(IssuingProcess),
            verProc: z
                .string()
                .min(1)
                .max(20)
                .transform((str) => str && ParserUtility.scape(str)),
            dhCont: z
                .string()
                .regex(RegexSEFAZ.DateTimeUTC)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            xJust: z
                .string()
                .min(15)
                .max(256)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
            NFref: z
                .array(
                    z
                        .object({
                            refNFe: z
                                .string()
                                .regex(RegexSEFAZ.AccessKey)
                                .max(44)
                                .transform((str) => str && ParserUtility.scape(str)),
                        })
                        .or(
                            z.object({
                                refNFeSig: z
                                    .string()
                                    .regex(RegexSEFAZ.AccessKey)
                                    .max(44)
                                    .transform((str) => str && ParserUtility.scape(str)),
                            }),
                        )
                        .or(
                            z.object({
                                refNF: z.object({
                                    cUF: z.nativeEnum(UFCodeIBGE),
                                    AAMM: z
                                        .string()
                                        .regex(new RegExp("[0-9]{2}[0]{1}[1-9]{1}|[0-9]{2}[1]{1}[0-2]{1}"))
                                        .transform((str) => str && ParserUtility.scape(str)),
                                    CNPJ: z
                                        .string()
                                        .regex(RegexSEFAZ.CNPJ)
                                        .max(14)
                                        .transform((str) => str && ParserUtility.scape(str)),
                                    mod: z.nativeEnum(NFEModel),
                                    serie: z
                                        .string()
                                        .regex(RegexSEFAZ.Serie)
                                        .transform((str) => str && ParserUtility.scape(str)),
                                    nNF: z
                                        .string()
                                        .regex(RegexSEFAZ.NFENumber)
                                        .transform((str) => str && ParserUtility.scape(str)),
                                }),
                            }),
                        )
                        .or(
                            z.object({
                                refNFP: z
                                    .object({
                                        cUF: z.nativeEnum(UFCodeIBGE),
                                        AAMM: z
                                            .string()
                                            .regex(new RegExp("[0-9]{2}[0]{1}[1-9]{1}|[0-9]{2}[1]{1}[0-2]{1}")),
                                        IE: z
                                            .string()
                                            .regex(RegexSEFAZ.IEWithoutISENTO)
                                            .max(14)
                                            .transform((str) => str && ParserUtility.scape(str)),
                                        mod: z.nativeEnum(ProducerReferencedNFMode),
                                        serie: z
                                            .string()
                                            .regex(RegexSEFAZ.Serie)
                                            .transform((str) => str && ParserUtility.scape(str)),
                                        nNF: z
                                            .string()
                                            .regex(RegexSEFAZ.NFENumber)
                                            .transform((str) => str && ParserUtility.scape(str)),
                                        CNPJ: z
                                            .string()
                                            .regex(RegexSEFAZ.CNPJ)
                                            .max(14)
                                            .transform((str) => str && ParserUtility.scape(str)),
                                    })
                                    .or(
                                        z.object({
                                            cUF: z.nativeEnum(UFCodeIBGE),
                                            AAMM: z
                                                .string()
                                                .regex(new RegExp("[0-9]{2}[0]{1}[1-9]{1}|[0-9]{2}[1]{1}[0-2]{1}")),
                                            IE: z
                                                .string()
                                                .regex(RegexSEFAZ.IEWithoutISENTO)
                                                .max(14)
                                                .transform((str) => str && ParserUtility.scape(str)),
                                            mod: z.nativeEnum(ProducerReferencedNFMode),
                                            serie: z
                                                .string()
                                                .regex(RegexSEFAZ.Serie)
                                                .transform((str) => str && ParserUtility.scape(str)),
                                            nNF: z
                                                .string()
                                                .regex(RegexSEFAZ.NFENumber)
                                                .transform((str) => str && ParserUtility.scape(str)),
                                            CPF: z
                                                .string()
                                                .regex(RegexSEFAZ.CPF)
                                                .max(11)
                                                .transform((str) => str && ParserUtility.scape(str)),
                                        }),
                                    ),
                            }),
                        )
                        .or(
                            z.object({
                                refECF: z.object({
                                    mod: z.nativeEnum(TaxCouponGroup),
                                    nECF: z
                                        .string()
                                        .regex(new RegExp("[0-9]{1,3}"))
                                        .transform((str) => str && ParserUtility.scape(str)),
                                    nCOO: z
                                        .string()
                                        .regex(new RegExp("[0-9]{1,6}"))
                                        .transform((str) => str && ParserUtility.scape(str)),
                                }),
                            }),
                        ),
                )
                .max(999)
                .optional(),
        }),
        emit: Issuer.extend({
            CNPJ: z
                .string()
                .regex(RegexSEFAZ.CNPJ)
                .max(14)
                .transform((str) => str && ParserUtility.scape(str)),
        }).or(
            Issuer.extend({
                CPF: z
                    .string()
                    .regex(RegexSEFAZ.CPF)
                    .max(11)
                    .transform((str) => str && ParserUtility.scape(str)),
            }),
        ),
        avulsa: z
            .object({
                CNPJ: z
                    .string()
                    .regex(RegexSEFAZ.CNPJ)
                    .max(14)
                    .transform((str) => str && ParserUtility.scape(str)),
                xOrgao: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str)),
                matr: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str)),
                xAgente: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str)),
                fone: z
                    .string()
                    .regex(new RegExp("[0-9]{6,14}"))
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                UF: z.nativeEnum(UFIssuer),
                nDAR: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                dEmi: z
                    .string()
                    .regex(RegexSEFAZ.Date)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                vDAR: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                repEmi: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str)),
                dPag: z
                    .string()
                    .regex(RegexSEFAZ.Date)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
            })
            .optional(),
        dest: Recipient.extend({
            CNPJ: z
                .string()
                .regex(RegexSEFAZ.CNPJ)
                .max(14)
                .transform((str) => str && ParserUtility.scape(str)),
        })
            .or(
                Recipient.extend({
                    CPF: z
                        .string()
                        .regex(RegexSEFAZ.CPF)
                        .max(11)
                        .transform((str) => str && ParserUtility.scape(str)),
                }),
            )
            .or(
                Recipient.extend({
                    idEstrangeiro: z
                        .string()
                        .regex(new RegExp("([!-ÿ]{0}|[!-ÿ]{5,20})?"))
                        .transform((str) => str && ParserUtility.scape(str)),
                }),
            )
            .optional(),
        retirada: Local.extend({
            CNPJ: z
                .string()
                .regex(RegexSEFAZ.CNPJ)
                .max(14)
                .transform((str) => str && ParserUtility.scape(str)),
        })
            .or(
                Local.extend({
                    CPF: z
                        .string()
                        .regex(RegexSEFAZ.CPF)
                        .max(11)
                        .transform((str) => str && ParserUtility.scape(str)),
                }),
            )
            .optional(),
        entrega: Local.extend({
            CNPJ: z
                .string()
                .regex(RegexSEFAZ.CNPJ)
                .max(14)
                .transform((str) => str && ParserUtility.scape(str)),
        })
            .or(
                Local.extend({
                    CPF: z
                        .string()
                        .regex(RegexSEFAZ.CPF)
                        .max(11)
                        .transform((str) => str && ParserUtility.scape(str)),
                }),
            )
            .optional(),
        autXML: z
            .array(
                z
                    .object({
                        CPF: z
                            .string()
                            .regex(RegexSEFAZ.CPF)
                            .max(11)
                            .transform((str) => str && ParserUtility.scape(str)),
                    })
                    .or(
                        z.object({
                            CNPJ: z
                                .string()
                                .regex(RegexSEFAZ.CNPJ)
                                .max(14)
                                .transform((str) => str && ParserUtility.scape(str)),
                        }),
                    ),
            )
            .max(10)
            .optional(),
        det: z
            .array(
                z.object({
                    $: z.object({
                        nItem: z
                            .string()
                            .regex(
                                new RegExp(
                                    "[1-9]{1}[0-9]{0,1}|[1-8]{1}[0-9]{2}|[9]{1}[0-8]{1}[0-9]{1}|[9]{1}[9]{1}[0]{1}",
                                ),
                            ),
                    }),
                    prod: Product,
                    imposto: Tax,
                    impostoDevol: z
                        .object({
                            pDevol: z
                                .string()
                                .regex(RegexSEFAZ.Decimal03_02a04max100)
                                .transform((str) => str && ParserUtility.scape(str)),
                            IPI: z.object({
                                vIPIDevol: z
                                    .string()
                                    .regex(RegexSEFAZ.Decimal13_02)
                                    .transform((str) => str && ParserUtility.scape(str)),
                            }),
                        })
                        .optional(),
                    infAdProd: z
                        .string()
                        .min(1)
                        .max(500)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    obsItem: z
                        .object({
                            obsCont: z
                                .object({
                                    xTexto: z
                                        .string()
                                        .min(1)
                                        .max(60)
                                        .transform((str) => str && ParserUtility.scape(str)),
                                    xCampo: z
                                        .string()
                                        .min(1)
                                        .max(20)
                                        .transform((str) => str && ParserUtility.scape(str)),
                                })
                                .optional(),
                            obsFisco: z.object({
                                xTexto: z
                                    .string()
                                    .min(1)
                                    .max(60)
                                    .transform((str) => str && ParserUtility.scape(str)),
                                xCampo: z
                                    .string()
                                    .min(1)
                                    .max(20)
                                    .transform((str) => str && ParserUtility.scape(str)),
                            }),
                        })
                        .optional(),
                }),
            )
            .max(990),
        total: z.object({
            ICMSTot: z.object({
                vBC: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vICMS: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vICMSDeson: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vFCPUFDest: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                vICMSUFDest: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                vICMSUFRemet: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                vFCP: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vBCST: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vST: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vFCPST: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vFCPSTRet: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                qBCMono: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                vICMSMono: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                qBCMonoReten: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                vICMSMonoReten: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                qBCMonoRet: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                vICMSMonoRet: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                vProd: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vFrete: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vSeg: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vDesc: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vII: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vIPI: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vIPIDevol: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vPIS: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vCOFINS: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vOutro: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vNF: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vTotTrib: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
            }),
            ISSQNtot: z
                .object({
                    vServ: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vBC: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vISS: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vPIS: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vCOFINS: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    dCompet: z
                        .string()
                        .regex(RegexSEFAZ.Date)
                        .transform((str) => str && ParserUtility.scape(str)),
                    vDeducao: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vOutro: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vDescIncond: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vDescCond: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vISSRet: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    cRegTrib: z.nativeEnum(SpecialTaxRegimeCode).optional(),
                })
                .optional(),
            retTrib: z
                .object({
                    vRetPIS: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vRetCOFINS: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vRetCSLL: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vBCIRRF: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vIRRF: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vBCRetPrev: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                    vRetPrev: z
                        .string()
                        .regex(RegexSEFAZ.Decimal13_02_Optional)
                        .transform((str) => str && ParserUtility.scape(str))
                        .optional(),
                })
                .optional(),
        }),
        transp: Transport,
        cobr: z
            .object({
                fat: z
                    .object({
                        nFat: z
                            .string()
                            .min(1)
                            .max(60)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vOrig: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vDesc: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vLiq: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                    })
                    .optional(),
                dup: z
                    .array(
                        z.object({
                            nDup: z
                                .string()
                                .min(1)
                                .max(60)
                                .transform((str) => str && ParserUtility.scape(str))
                                .optional(),
                            dVenc: z
                                .string()
                                .regex(RegexSEFAZ.Date)
                                .transform((str) => str && ParserUtility.scape(str))
                                .optional(),
                            vDup: z
                                .string()
                                .regex(RegexSEFAZ.Decimal13_02_Optional)
                                .transform((str) => str && ParserUtility.scape(str)),
                        }),
                    )
                    .max(120)
                    .optional(),
            })
            .optional(),
        pag: z.object({
            detPag: z
                .array(
                    z.object({
                        indPag: z.nativeEnum(PaymentMode).optional(),
                        tPag: z
                            .string()
                            .regex(new RegExp("[0-9]{2}"))
                            .transform((str) => str && ParserUtility.scape(str)),
                        xPag: z
                            .string()
                            .min(2)
                            .max(60)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        vPag: z
                            .string()
                            .regex(RegexSEFAZ.Decimal13_02)
                            .transform((str) => str && ParserUtility.scape(str)),
                        dPag: z
                            .string()
                            .regex(RegexSEFAZ.Date)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        CNPJPag: z
                            .string()
                            .regex(RegexSEFAZ.CNPJ)
                            .max(14)
                            .transform((str) => str && ParserUtility.scape(str))
                            .optional(),
                        UFPag: z.nativeEnum(UFIssuer).optional(),
                        card: z
                            .object({
                                tpIntegra: z.nativeEnum(IntegrationTypeInPaymentProcess),
                                CNPJ: z
                                    .string()
                                    .regex(RegexSEFAZ.CNPJ)
                                    .max(14)
                                    .transform((str) => str && ParserUtility.scape(str))
                                    .optional(),
                                tBand: z
                                    .string()
                                    .regex(new RegExp("[0-9]{2}"))
                                    .transform((str) => str && ParserUtility.scape(str))
                                    .optional(),
                                cAut: z
                                    .string()
                                    .min(1)
                                    .max(128)
                                    .transform((str) => str && ParserUtility.scape(str))
                                    .optional(),
                                CNPJReceb: z
                                    .string()
                                    .regex(RegexSEFAZ.CNPJ)
                                    .max(14)
                                    .transform((str) => str && ParserUtility.scape(str))
                                    .optional(),
                                idTermPag: z
                                    .string()
                                    .min(1)
                                    .max(40)
                                    .transform((str) => str && ParserUtility.scape(str))
                                    .optional(),
                            })
                            .optional(),
                    }),
                )
                .max(100),
            vTroco: z
                .string()
                .regex(RegexSEFAZ.Decimal13_02)
                .transform((str) => str && ParserUtility.scape(str))
                .optional(),
        }),
        infIntermed: z
            .object({
                CNPJ: z
                    .string()
                    .regex(RegexSEFAZ.CNPJ)
                    .max(14)
                    .transform((str) => str && ParserUtility.scape(str)),
                idCadIntTran: z
                    .string()
                    .min(2)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str)),
            })
            .optional(),
        infAdic: z
            .object({
                infAdFisco: z
                    .string()
                    .min(1)
                    .max(2000)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                infCpl: z
                    .string()
                    .min(1)
                    .max(5000)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                obsCont: z
                    .array(
                        z.object({
                            $: z.object({
                                xCampo: z
                                    .string()
                                    .min(1)
                                    .max(20)
                                    .transform((str) => str && ParserUtility.scape(str)),
                            }),
                            xTexto: z
                                .string()
                                .min(1)
                                .max(60)
                                .transform((str) => str && ParserUtility.scape(str)),
                        }),
                    )
                    .max(10)
                    .optional(),
                obsFisco: z
                    .array(
                        z.object({
                            $: z.object({
                                xCampo: z
                                    .string()
                                    .min(1)
                                    .max(20)
                                    .transform((str) => str && ParserUtility.scape(str)),
                            }),
                            xTexto: z
                                .string()
                                .min(1)
                                .max(60)
                                .transform((str) => str && ParserUtility.scape(str)),
                        }),
                    )
                    .max(10)
                    .optional(),
                procRef: z
                    .array(
                        z.object({
                            nProc: z
                                .string()
                                .min(1)
                                .max(60)
                                .transform((str) => str && ParserUtility.scape(str)),
                            indProc: z.nativeEnum(ProcessOrigin),
                            tpAto: z.nativeEnum(ConcessionAct).optional(),
                        }),
                    )
                    .max(100)
                    .optional(),
            })
            .optional(),
        exporta: z
            .object({
                UFSaidaPais: z.nativeEnum(UFIssuer),
                xLocExporta: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str)),
                xLocDespacho: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
            })
            .optional(),
        compra: z
            .object({
                xNEmp: z
                    .string()
                    .min(1)
                    .max(22)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                xPed: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                xCont: z
                    .string()
                    .min(1)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
            })
            .optional(),
        cana: z
            .object({
                safra: z
                    .string()
                    .min(4)
                    .max(9)
                    .transform((str) => str && ParserUtility.scape(str)),
                ref: z
                    .string()
                    .regex(new RegExp("(0[1-9]|1[0-2])([/][2][0-9][0-9][0-9])"))
                    .transform((str) => str && ParserUtility.scape(str)),
                forDia: z
                    .array(
                        z.object({
                            $: z.object({
                                dia: z
                                    .string()
                                    .regex(new RegExp("[1-9]|[1][0-9]|[2][0-9]|[3][0-1]"))
                                    .transform((str) => str && ParserUtility.scape(str)),
                            }),
                            qtde: z
                                .string()
                                .regex(RegexSEFAZ.Decimal11_01a10)
                                .transform((str) => str && ParserUtility.scape(str)),
                        }),
                    )
                    .max(31),
                qTotMes: z
                    .string()
                    .regex(RegexSEFAZ.Decimal11_01a10)
                    .transform((str) => str && ParserUtility.scape(str)),
                qTotAnt: z
                    .string()
                    .regex(RegexSEFAZ.Decimal11_01a10)
                    .transform((str) => str && ParserUtility.scape(str)),
                qTotGer: z
                    .string()
                    .regex(RegexSEFAZ.Decimal11_01a10)
                    .transform((str) => str && ParserUtility.scape(str)),
                deduc: z
                    .array(
                        z.object({
                            xDed: z
                                .string()
                                .min(1)
                                .max(60)
                                .transform((str) => str && ParserUtility.scape(str)),
                            vDed: z
                                .string()
                                .regex(RegexSEFAZ.Decimal13_02)
                                .transform((str) => str && ParserUtility.scape(str)),
                        }),
                    )
                    .max(10)
                    .optional(),
                vFor: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vTotDed: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
                vLiqFor: z
                    .string()
                    .regex(RegexSEFAZ.Decimal13_02)
                    .transform((str) => str && ParserUtility.scape(str)),
            })
            .optional(),
        infRespTec: z
            .object({
                CNPJ: z
                    .string()
                    .regex(RegexSEFAZ.CNPJ)
                    .max(14)
                    .transform((str) => str && ParserUtility.scape(str)),
                xContato: z
                    .string()
                    .min(2)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str)),
                email: z
                    .string()
                    .min(6)
                    .max(60)
                    .transform((str) => str && ParserUtility.scape(str)),
                fone: z
                    .string()
                    .regex(new RegExp("[0-9]{6,14}"))
                    .transform((str) => str && ParserUtility.scape(str)),
                idCSRT: z
                    .string()
                    .regex(new RegExp("[0-9]{2}"))
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
                hashCSRT: z
                    .string()
                    .min(20)
                    .max(20)
                    .transform((str) => str && ParserUtility.scape(str))
                    .optional(),
            })
            .optional(),
        infSolicNFF: z
            .object({
                xSolic: z
                    .string()
                    .min(2)
                    .max(5000)
                    .transform((str) => str && ParserUtility.scape(str)),
            })
            .optional(),
    }),
});
