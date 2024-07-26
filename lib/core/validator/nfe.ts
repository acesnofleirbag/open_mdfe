import { z } from "zod";
import {
    AdremReductionReason,
    BuyerPresenceOnEstablishmentAtTransactionIndicator,
    CST__Type1,
    CST__Type2,
    CST__Type3,
    ConcessionAct,
    DENATRANColorCode,
    DanfePrintFormat,
    DeterminationMethod__Type1,
    DeterminationMethod__Type2,
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
    PaymentIndicator,
    PaymentMode,
    ProcessOrigin,
    NF_ProducerRefMode,
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
    VehicleCondition,
    Vin,
    CSOSN,
    ICMSCST,
} from "../../@types/layouts/nfe/nfe";
import { RegexSEFAZ } from "../regex";
import { CodeCityIBGE, EnvironmentIdentifier, UFCodeIBGE, UFIssuer } from "../../@types/layouts/general";

const NF_Ref__Type1 = z.object({
    refNFe: z.string().regex(RegexSEFAZ.AccessKey).max(44),
});

const NF_Ref__Type2 = z.object({
    refNFeSig: z.string().regex(RegexSEFAZ.AccessKey).max(44),
});

const NF_Ref__Type3 = z.object({
    refNF: z.object({
        cUF: z.nativeEnum(UFCodeIBGE),
        AAMM: z.string().regex(new RegExp(/[0-9]{2}[0]{1}[1-9]{1}|[0-9]{2}[1]{1}[0-2]{1}/)),
        CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14),
        mod: z.nativeEnum(NFEModel),
        serie: z.string().regex(RegexSEFAZ.Serie),
        nNF: z.string().regex(RegexSEFAZ.NFENumber),
    }),
});

const NF_ProducerRef__Type1 = z.object({
    cUF: z.nativeEnum(UFCodeIBGE),
    AAMM: z.string().regex(new RegExp(/[0-9]{2}[0]{1}[1-9]{1}|[0-9]{2}[1]{1}[0-2]{1}/)),
    CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14),
    IE: z.string().regex(RegexSEFAZ.IEWithoutISENTO).max(14),
    mod: z.nativeEnum(NF_ProducerRefMode),
    serie: z.string().regex(RegexSEFAZ.Serie),
    nNF: z.string().regex(RegexSEFAZ.NFENumber),
});

const NF_ProducerRef__Type2 = z.object({
    cUF: z.nativeEnum(UFCodeIBGE),
    AAMM: z.string().regex(new RegExp(/[0-9]{2}[0]{1}[1-9]{1}|[0-9]{2}[1]{1}[0-2]{1}/)),
    CPF: z.string().regex(RegexSEFAZ.CPF).max(11),
    IE: z.string().regex(RegexSEFAZ.IEWithoutISENTO).max(14),
    mod: z.nativeEnum(NF_ProducerRefMode),
    serie: z.string().regex(RegexSEFAZ.Serie),
    nNF: z.string().regex(RegexSEFAZ.NFENumber),
});

const NF_Ref__Type4 = z.object({
    refNFP: NF_ProducerRef__Type1.or(NF_ProducerRef__Type2),
});

const NF_Ref__Type5 = z.object({
    refCTe: z.string().regex(new RegExp(/[0-9]{44}/)),
});

const NF_Ref__Type6 = z.object({
    refECF: z.object({
        mod: z.nativeEnum(TaxCouponGroup),
        nECF: z.string().regex(new RegExp(/[0-9]{1,3}/)),
        nCOO: z.string().regex(new RegExp(/[0-9]{1,6}/)),
    }),
});

const NF_Ref = NF_Ref__Type1.or(NF_Ref__Type2).or(NF_Ref__Type3).or(NF_Ref__Type4).or(NF_Ref__Type5).or(NF_Ref__Type6);

const Address = z.object({
    xLgr: z.string().min(2).max(60),
    nro: z.string().min(1).max(60),
    xCpl: z.string().min(1).max(60).optional(),
    xBairro: z.string().min(2).max(60),
    cMun: z.nativeEnum(CodeCityIBGE),
    xMun: z.string().min(2).max(60),
    UF: z.nativeEnum(UFIssuer),
    CEP: z.string().regex(new RegExp(/[0-9]{8}/)),
    cPais: z.literal("1058").optional(),
    xPais: z.literal("Brasil").or(z.literal("BRASIL")).optional(),
    // prettier-ignore
    fone: z.string().regex(new RegExp(/[0-9]{6,14}/)).optional(),
});

const __Issuer = z.object({
    xNome: z.string().min(2).max(60),
    xFant: z.string().min(1).max(60).optional(),
    enderEmit: Address,
    IE: z.string().regex(RegexSEFAZ.IE).max(14),
    IEST: z.string().regex(RegexSEFAZ.IEWithoutISENTO).max(14).optional(),
    IM: z.string().min(1).max(15).optional(),
    // prettier-ignore
    CNAE: z.string().regex(new RegExp(/[0-9]{7}/)).optional(),
    CRT: z.nativeEnum(TaxRegimeCode),
});

const Issuer__Type1 = z
    .object({
        CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14),
    })
    .merge(__Issuer);

const Issuer__Type2 = z
    .object({
        CPF: z.string().regex(RegexSEFAZ.CPF).max(11),
    })
    .merge(__Issuer);

const Issuer = Issuer__Type1.or(Issuer__Type2);

const __Recipient = z.object({
    xNome: z.string().min(2).max(60).optional(),
    enderDest: Address.optional(),
    indIEDest: z.nativeEnum(RecipientStateSubscriptionIndicator),
    IE: z.string().regex(RegexSEFAZ.IEWithoutISENTO).max(14).optional(),
    // prettier-ignore
    ISUF: z.string().regex(new RegExp(/[0-9]{8,9}/)).optional(),
    IM: z.string().min(1).max(15).optional(),
    email: z.string().min(1).max(60).optional(),
});

const Recipient__Type1 = z
    .object({
        CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14),
    })
    .merge(__Recipient);

const Recipient__Type2 = z
    .object({
        CPF: z.string().regex(RegexSEFAZ.CPF).max(11),
    })
    .merge(__Recipient);

const Recipient__Type3 = z
    .object({
        idEstrangeiro: z.string().regex(new RegExp(/([!-ÿ]{0}|[!-ÿ]{5,20})?/)),
    })
    .merge(__Recipient);

const Recipient = Recipient__Type1.or(Recipient__Type2).or(Recipient__Type3);

const __Local = Address.merge(
    z.object({
        email: z.string().min(1).max(60).optional(),
        IE: z.string().regex(RegexSEFAZ.IE).optional(),
    }),
);

const Local__Type1 = z
    .object({
        CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14),
        xNome: z.string().min(2).max(60).optional(),
    })
    .merge(__Local);

const Local__Type2 = z
    .object({
        CPF: z.string().regex(RegexSEFAZ.CPF).max(11),
        xNome: z.string().min(2).max(60).optional(),
    })
    .merge(__Local);

const Local = Local__Type1.or(Local__Type2);

const __Product = z.object({
    cProd: z.string().min(1).max(60),
    cEAN: z.string().regex(new RegExp(/SEM GTIN|[0-9]{0}|[0-9]{8}|[0-9]{12,14}/)),
    cBarra: z.string().min(3).max(30).optional(),
    xProd: z.string().min(1).max(20),
    NCM: z.string().regex(new RegExp(/[0-9]{2}|[0-9]{8}/)),
    // prettier-ignore
    NVE: z.array(z.string().regex(new RegExp(/[A-Z]{2}[0-9]{4}/))).max(8).optional(),
    // prettier-ignore
    CEST: z.string().regex(new RegExp(/[0-9]{7}/)).optional(),
    indEscala: z.literal("S").or(z.literal("N")).optional(),
    CNPJFab: z.string().regex(RegexSEFAZ.CNPJ).max(14).optional(),
    // prettier-ignore
    cBenef: z.string().regex(new RegExp(/([!-ÿ]{8}|[!-ÿ]{10}|SEM CBENEF)?/)).optional(),
    // prettier-ignore
    cCredPresumido: z.string().regex(new RegExp(/[!-ÿ]{8}|[!-ÿ]{10}/)).optional(),
    pCredPresumido: z.string().regex(RegexSEFAZ.Decimal3_02a04).optional(),
    vCredPresumido: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
    EXTIPI: z
        .string()
        .regex(new RegExp(/[0-9]{2,3}/))
        .optional(),
    // prettier-ignore
    CFOP: z.string().regex(new RegExp(/[1,2,3,5,6,7]{1}[0-9]{3}/)),
    uCom: z.string().min(1).max(6),
    qCom: z.string().regex(RegexSEFAZ.Decimal11_01a04),
    vUnCom: z.string().regex(RegexSEFAZ.Decimal11_01a10),
    vProd: z.string().regex(RegexSEFAZ.Decimal13_02),
    cEANTrib: z.string().regex(new RegExp(/SEM GTIN|[0-9]{0}|[0-9]{8}|[0-9]{12,14}/)),
    cBarraTrib: z.string().min(3).max(30).optional(),
    uTrib: z.string().min(1).max(6),
    qTrib: z.string().regex(RegexSEFAZ.Decimal11_01a04),
    vUnTrib: z.string().regex(RegexSEFAZ.Decimal11_01a10),
    vFrete: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
    vSeg: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
    vDesc: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
    vOutro: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
    indTot: z.nativeEnum(ProductComposeTotal),
    DI: z
        .array(
            z.object({
                nDI: z.string().min(1).max(15),
                dDI: z.string().regex(RegexSEFAZ.Date),
                xLocDesemb: z.string().min(1).max(60),
                UFDesemb: z.nativeEnum(UFIssuer),
                dDesemb: z.string().regex(RegexSEFAZ.Date),
                tpViaTransp: z.nativeEnum(TransportRoute),
                vAFRMM: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                tpIntermedio: z.nativeEnum(ImportMethod),
                CPF: z.string().regex(RegexSEFAZ.CPF).max(11).optional(),
                CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14).optional(),
                UFTerceiro: z.nativeEnum(UFIssuer).optional(),
                cExportador: z.string().min(1).max(60),
                adi: z
                    .array(
                        z.object({
                            // prettier-ignore
                            nAdicao: z.string().regex(new RegExp(/[1-9]{1}[0-9]{0,2}/)).optional(),
                            nSeqAdic: z.string().regex(new RegExp(/[1-9]{1}[0-9]{0,4}/)),
                            cFabricante: z.string().min(1).max(60),
                            vDescDI: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                            nDraw: z.string().min(1).max(20).optional(),
                        }),
                    )
                    .max(999),
            }),
        )
        .max(100)
        .optional(),
    detExport: z
        .array(
            z.object({
                nDraw: z.string().min(1).max(20).optional(),
                exportInd: z
                    .object({
                        nRE: z.string().regex(new RegExp(/[0-9]{0,12}/)),
                        chNFe: z.string().regex(RegexSEFAZ.AccessKey).max(44),
                        qExport: z.string().regex(RegexSEFAZ.Decimal11_01a04),
                    })
                    .optional(),
            }),
        )
        .max(500)
        .optional(),
    xPed: z.string().min(1).max(15).optional(),
    // prettier-ignore
    nItemPed: z.string().regex(new RegExp(/[0-9]{1,6}/)).optional(),
    nFCI: z.string().regex(RegexSEFAZ.GUID).optional(),
    rastro: z
        .array(
            z.object({
                nLote: z.string().min(1).max(20),
                qLote: z.string().regex(RegexSEFAZ.Decimal08_01a03),
                dFab: z.string().regex(RegexSEFAZ.Date),
                dVal: z.string().regex(RegexSEFAZ.Date),
                cAgreg: z.string().min(1).max(20).optional(),
            }),
        )
        .max(500)
        .optional(),
    infProdNFF: z
        .object({
            cProdFisco: z.string().min(14).max(14),
            cOperNFF: z.string().regex(new RegExp(/[0-9]{1,5}/)),
        })
        .optional(),
    infProdEmb: z
        .object({
            xEmb: z.string().min(1).max(8),
            qVolEmb: z.string().regex(RegexSEFAZ.Decimal08_01a03),
            uEmb: z.string().min(1).max(8),
        })
        .optional(),
});

const Product__Type1 = __Product.merge(
    z.object({
        veicProd: z
            .object({
                tpOp: z.nativeEnum(OperationType),
                // prettier-ignore
                chassi: z.string().regex(new RegExp(/[A-Z0-9]+/)).min(17).max(17),
                cCor: z.string().min(1).max(4),
                xCor: z.string().min(1).max(40),
                pot: z.string().min(1).max(4),
                cilin: z.string().min(1).max(4),
                pesoL: z.string().min(1).max(9),
                pesoB: z.string().min(1).max(9),
                nSerie: z.string().min(1).max(9),
                tpComb: z.nativeEnum(FuelType),
                nMotor: z.string().min(1).max(21),
                CMT: z.string().min(1).max(9),
                dist: z.string().min(1).max(4),
                anoMod: z.string().regex(new RegExp(/[0-9]{4}/)),
                anoFab: z.string().regex(new RegExp(/[0-9]{4}/)),
                tpPint: z.string().min(1).max(1),
                tpVeic: z.string().regex(new RegExp(/[0-9]{1,2}/)),
                espVeic: z.string().regex(new RegExp(/[0-9]{1}/)),
                VIN: z.nativeEnum(Vin),
                condVeic: z.nativeEnum(VehicleCondition),
                cMod: z.string().regex(new RegExp(/[0-9]{1,6}/)),
                cCorDENATRAN: z.nativeEnum(DENATRANColorCode),
                // prettier-ignore
                lota: z.string().regex(new RegExp(/[0-9]{1,3}/)).min(1).max(3),
                tpRest: z.nativeEnum(Restriction),
            })
            .optional(),
    }),
);

const Product__Type2 = __Product.merge(
    z.object({
        med: z
            .object({
                cProdANVISA: z.string().regex(new RegExp(/[0-9]{11}|[0-9]{13}|ISENTO/)),
                xMotivoIsencao: z.string().min(1).max(255).optional(),
                vPMC: z.string().regex(RegexSEFAZ.Decimal13_02),
            })
            .optional(),
    }),
);

const Product__Type3 = __Product.merge(
    z.object({
        arma: z
            .array(
                z.object({
                    tpArma: z.nativeEnum(FireGunType),
                    nSerie: z.string().min(1).max(15),
                    nCano: z.string().min(1).max(15),
                    descr: z.string().min(1).max(256),
                }),
            )
            .max(500)
            .optional(),
    }),
);

const Product__Type4 = __Product.merge(
    z.object({
        comb: z
            .object({
                cProdANP: z.string().regex(new RegExp(/[0-9]{9}/)),
                descANP: z.string().min(2).max(95),
                pGLP: z.string().regex(RegexSEFAZ.Decimal03_02a04max100).optional(),
                pGNn: z.string().regex(RegexSEFAZ.Decimal03_02a04max100).optional(),
                pGNi: z.string().regex(RegexSEFAZ.Decimal03_02a04max100).optional(),
                vPart: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                // prettier-ignore
                CODIF: z.string().regex(new RegExp(/[0-9]{1,21}/)).optional(),
                qTemp: z.string().regex(RegexSEFAZ.Decimal12_01a04_Temperature).optional(),
                UFCons: z.nativeEnum(UFIssuer).or(z.literal("EX")),
                CIDE: z
                    .object({
                        qBCProd: z.string().regex(RegexSEFAZ.Decimal12_01a04),
                        vAliqProd: z.string().regex(RegexSEFAZ.Decimal11_01a04),
                        vCIDE: z.string().regex(RegexSEFAZ.Decimal13_02),
                    })
                    .optional(),
                encerrante: z
                    .object({
                        nBico: z.string().regex(new RegExp(/[0-9]{1,3}/)),
                        // prettier-ignore
                        nBomba: z.string().regex(new RegExp(/[0-9]{1,3}/)).optional(),
                        nTanque: z.string().regex(new RegExp(/[0-9]{1,3}/)),
                        vEncIni: z.string().regex(RegexSEFAZ.Decimal12_03),
                        vEncFin: z.string().regex(RegexSEFAZ.Decimal12_03),
                    })
                    .optional(),
                pBio: z.string().regex(RegexSEFAZ.Decimal03_04max100_Optional).optional(),
                origComb: z
                    .array(
                        z.object({
                            indImport: z.nativeEnum(ImportIndicator),
                            cUFOrig: z.nativeEnum(UFCodeIBGE),
                            pOrig: z.string().regex(RegexSEFAZ.Decimal03_04max100_Optional),
                        }),
                    )
                    .max(30)
                    .optional(),
            })
            .optional(),
    }),
);

const Product__Type5 = __Product.merge(
    z.object({
        nRECOPI: z
            .string()
            .regex(new RegExp(/[0-9]{20}/))
            .max(20),
    }),
);

const Product = Product__Type1.or(Product__Type2).or(Product__Type3).or(Product__Type4).or(Product__Type5);

const PISST = z.object({
    vPIS: z.string().regex(RegexSEFAZ.Decimal13_02),
    indSomaPISST: z.nativeEnum(ProductComposeTotal).optional(),
});

const COFINSST = z.object({
    vCOFINS: z.string().regex(RegexSEFAZ.Decimal13_02),
    indSomaCOFINSST: z.nativeEnum(ProductComposeTotal).optional(),
});

const COFINS__Type1 = z.object({
    COFINSAliq: z.object({
        CST: z.nativeEnum(CST__Type1),
        vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
        pCOFINS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
        vCOFINS: z.string().regex(RegexSEFAZ.Decimal13_02),
    }),
});

const COFINS__Type2 = z.object({
    COFINSQtde: z.object({
        CST: z.literal("03"),
        qBCProd: z.string().regex(RegexSEFAZ.Decimal12_01a04),
        vAliqProd: z.string().regex(RegexSEFAZ.Decimal11_01a04),
        vCOFINS: z.string().regex(RegexSEFAZ.Decimal13_02),
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
            vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
            pCOFINS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
            vCOFINS: z.string().regex(RegexSEFAZ.Decimal13_02),
        })
        .or(
            z.object({
                CST: z.nativeEnum(CST__Type3),
                qBCProd: z.string().regex(RegexSEFAZ.Decimal12_01a04),
                vAliqProd: z.string().regex(RegexSEFAZ.Decimal11_01a04),
                vCOFINS: z.string().regex(RegexSEFAZ.Decimal13_02),
            }),
        ),
});

const COFINS = COFINS__Type1.or(COFINS__Type2).or(COFINS__Type3).or(COFINS__Type4);

const Transporter = z.object({
    xNome: z.string().min(2).max(60).optional(),
    IE: z.string().regex(RegexSEFAZ.IE).optional(),
    xEnder: z.string().min(1).max(60).optional(),
    xMun: z.string().min(1).max(60).optional(),
    UF: z.nativeEnum(UFIssuer).optional(),
});

const PIS__Type1 = z.object({
    PISAliq: z.object({
        CST: z.nativeEnum(CST__Type1),
        vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
        pPIS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
        vPIS: z.string().regex(RegexSEFAZ.Decimal13_02),
    }),
});

const PIS__Type2 = z.object({
    PISQtde: z.object({
        CST: z.literal("03"),
        qBCProd: z.string().regex(RegexSEFAZ.Decimal12_01a04),
        vAliqProd: z.string().regex(RegexSEFAZ.Decimal11_01a04),
        vPIS: z.string().regex(RegexSEFAZ.Decimal13_02),
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
            vPIS: z.string().regex(RegexSEFAZ.Decimal13_02),
            vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
            pPIS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
        })
        .or(
            z.object({
                CST: z.nativeEnum(CST__Type3),
                vPIS: z.string().regex(RegexSEFAZ.Decimal13_02),
                qBCProd: z.string().regex(RegexSEFAZ.Decimal12_01a04),
                vAliqProd: z.string().regex(RegexSEFAZ.Decimal11_01a04),
            }),
        ),
});

const PIS = PIS__Type1.or(PIS__Type2).or(PIS__Type3).or(PIS__Type4);

const __Tax = z.object({
    PIS: PIS.optional(),
    PISST: z
        .object({
            vBC: z.string().regex(RegexSEFAZ.Decimal13_02_Optional),
            pPIS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
        })
        .merge(PISST)
        .or(
            z
                .object({
                    qBCProd: z.string().regex(RegexSEFAZ.Decimal12_01a04),
                    vAliqProd: z.string().regex(RegexSEFAZ.Decimal11_01a04),
                })
                .merge(PISST),
        )
        .optional(),
    COFINS: COFINS.optional(),
    COFINSST: z
        .object({
            vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
            pCOFINS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
        })
        .merge(COFINSST)
        .or(
            z
                .object({
                    qBCProd: z.string().regex(RegexSEFAZ.Decimal12_01a04),
                    vAliqProd: z.string().regex(RegexSEFAZ.Decimal11_01a04),
                })
                .merge(COFINSST),
        )
        .optional(),
    ICMSUFDest: z
        .object({
            vBCUFDest: z.string().regex(RegexSEFAZ.Decimal13_02),
            vBCFCPUFDest: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            pFCPUFDest: z.string().regex(RegexSEFAZ.Decimal3_02a04).optional(),
            pICMSUFDest: z.string().regex(RegexSEFAZ.Decimal3_02a04),
            pICMSInter: z.nativeEnum(ICMSInterstateTaxRate),
            pICMSInterPart: z.string().regex(RegexSEFAZ.Decimal3_02a04),
            vFCPUFDest: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            vICMSUFDest: z.string().regex(RegexSEFAZ.Decimal13_02),
            vICMSUFRemet: z.string().regex(RegexSEFAZ.Decimal13_02),
        })
        .optional(),
});

const __IPI = z.object({
    CNPJProd: z.string().regex(RegexSEFAZ.CNPJ).max(14).optional(),
    cSelo: z.string().min(1).max(60).optional(),
    // prettier-ignore
    qSelo: z.string().regex(new RegExp(/[0-9]{1,12}/)).optional(),
    cEnq: z.string().min(1).max(3),
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
                vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
                pIPI: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                vIPI: z.string().regex(RegexSEFAZ.Decimal13_02),
            })
            .or(
                z.object({
                    CST: z
                        .literal(IPITaxStatusCode.ENTRY_WITH_CREDIT_RECOVERY)
                        .or(z.literal(IPITaxStatusCode.OTHER_ENTRIES))
                        .or(z.literal(IPITaxStatusCode.TAXED_EXIT))
                        .or(z.literal(IPITaxStatusCode.OTHER_OUTPUTS)),
                    qUnid: z.string().regex(RegexSEFAZ.Decimal12_01a04),
                    vUnid: z.string().regex(RegexSEFAZ.Decimal11_01a04),
                    vIPI: z.string().regex(RegexSEFAZ.Decimal13_02),
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

const Tax__Type1 = z
    .object({
        vTotTrib: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
        ICMS: z
            .object({
                ICMS00: z.object({
                    orig: z.nativeEnum(MerchandiseOrigin),
                    CST: z.literal(ICMSCST.FULLY_TAXED),
                    modBC: z.nativeEnum(DeterminationMethod__Type1),
                    vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
                    pICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                    vICMS: z.string().regex(RegexSEFAZ.Decimal13_02),
                    pFCP: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                    vFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                }),
            })
            .or(
                z.object({
                    ICMS02: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(ICMSCST.OWN_SINGLE_PHASE_TAXATION_ON_FUELS),
                        qBCMono: z.string().regex(RegexSEFAZ.Decimal11_01a04).optional(),
                        adRemICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSMono: z.string().regex(RegexSEFAZ.Decimal13_02),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS10: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(ICMSCST.TAXED_AND_CHARGED_WITH_ICMS_FOR_TAX_SUBSTITUTION),
                        modBC: z.nativeEnum(DeterminationMethod__Type1),
                        vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMS: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCP: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional),
                        pRedBCST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional),
                        vBCST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pICMSST: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vICMSSTDeson: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        motDesICMSST: z.nativeEnum(ExemptionReason__Type1).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS15: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(ICMSCST.OWN_SINGLE_PHASE_TAXATION_AND_RESPONSIBILITY_FOR_WITHHOLDING_ON_FUELS),
                        qBCMono: z.string().regex(RegexSEFAZ.Decimal11_01a04).optional(),
                        adRemICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSMono: z.string().regex(RegexSEFAZ.Decimal13_02),
                        qBCMonoReten: z.string().regex(RegexSEFAZ.Decimal11_01a04).optional(),
                        adRemICMSReten: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSMonoReten: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pRedAdRem: z.string().regex(RegexSEFAZ.Decimal3_02max100).optional(),
                        motRedAdRem: z.nativeEnum(AdremReductionReason).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS20: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(ICMSCST.WITH_REDUCTION_IN_CALCULATION_BASE),
                        modBC: z.nativeEnum(DeterminationMethod__Type1),
                        pRedBC: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMS: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCP: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vICMSDeson: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        motDesICMS: z.nativeEnum(ExemptionReason__Type1).optional(),
                        indDeduzDeson: z.nativeEnum(ItemValueDeduction).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS30: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(ICMSCST.EXEMPT_OR_NOT_TAXED_AND_CHARGED_WITH_ICMS_FOR_TAX_SUBSTITUTION),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional),
                        pRedBCST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vBCST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pICMSST: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vICMSDeson: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        motDesICMS: z.nativeEnum(ExemptionReason__Type2).optional(),
                        indDeduzDeson: z.nativeEnum(ItemValueDeduction).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS40: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z
                            .literal(ICMSCST.EXEMPT)
                            .or(z.literal(ICMSCST.NOT_TAXED))
                            .or(z.literal(ICMSCST.SUSPENSION)),
                        vICMSDeson: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        motDesICMS: z.nativeEnum(ExemptionReason__Type3).optional(),
                        indDeduzDeson: z.nativeEnum(ItemValueDeduction).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS51: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(ICMSCST.DEFERRAL),
                        modBC: z.nativeEnum(DeterminationMethod__Type1).optional(),
                        pRedBC: z.string().regex(RegexSEFAZ.Decimal3_02a04).optional(),
                        // prettier-ignore
                        cBenefRBC: z.string().regex(new RegExp(/[!-ÿ]{8}|[!-ÿ]{10}/)).optional(),
                        vBC: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04).optional(),
                        vICMSOp: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pDif: z.string().regex(RegexSEFAZ.Decimal03_02a04max100).optional(),
                        vICMSDif: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vICMS: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vBCFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCP: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPDif: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPDif: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vFCPEfet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS53: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(ICMSCST.SINGLE_PHASE_TAXATION_ON_FUELS_WITH_DEFERRED_COLLECTION),
                        qBCMono: z.string().regex(RegexSEFAZ.Decimal11_01a04).optional(),
                        adRemICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04).optional(),
                        vICMSMonoOp: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pDif: z.string().regex(RegexSEFAZ.Decimal03_02a04max100).optional(),
                        vICMSMonoDif: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vICMSMono: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        qBCMonoDif: z.string().regex(RegexSEFAZ.Decimal11_01a04).optional(),
                        adRemICMSDif: z.string().regex(RegexSEFAZ.Decimal3_02a04).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS60: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(ICMSCST.ICMS_PREVIOUSLY_CHARGED_BY_TAX_SUBSTITUTION),
                        vBCSTRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vICMSSubstituto: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vICMSSTRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vBCFCPSTRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPSTRet: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPSTRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pRedBCEfet: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vBCEfet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pICMSEfet: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vICMSEfet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS61: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(ICMSCST.SINGLE_PHASE_TAXATION_ON_FUELS_PREVIOUSLY_CHARGED),
                        qBCMonoRet: z.string().regex(RegexSEFAZ.Decimal11_01a04).optional(),
                        adRemICMSRet: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSMonoRet: z.string().regex(RegexSEFAZ.Decimal13_02),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS70: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(
                            ICMSCST.WITH_REDUCTION_IN_THE_CALCULATION_BASE_AND_COLLECTION_OF_ICMS_FOR_TAX_SUBSTITUTION,
                        ),
                        modBC: z.nativeEnum(DeterminationMethod__Type1),
                        pRedBC: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMS: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCP: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        pRedBCST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vBCST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pICMSST: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vICMSDeson: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        motDesICMS: z.nativeEnum(ExemptionReason__Type1).optional(),
                        indDeduzDeson: z.nativeEnum(ItemValueDeduction).optional(),
                        vICMSSTDeson: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        motDesICMSST: z.nativeEnum(ExemptionReason__Type1).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMS90: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z.literal(ICMSCST.OTHERS),
                        modBC: z.nativeEnum(DeterminationMethod__Type1).optional(),
                        vBC: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pRedBC: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        pICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04).optional(),
                        vICMS: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vBCFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCP: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCP: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2).optional(),
                        pMVAST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        pRedBCST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vBCST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pICMSST: z.string().regex(RegexSEFAZ.Decimal3_02a04).optional(),
                        vICMSST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vBCFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vICMSDeson: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        motDesICMS: z.nativeEnum(ExemptionReason__Type1).optional(),
                        indDeduzDeson: z.nativeEnum(ItemValueDeduction).optional(),
                        vICMSSTDeson: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        motDesICMSST: z.nativeEnum(ExemptionReason__Type1).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSPart: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z
                            .literal(ICMSCST.TAXED_AND_CHARGED_WITH_ICMS_FOR_TAX_SUBSTITUTION)
                            .or(z.literal(ICMSCST.OTHERS)),
                        modBC: z.nativeEnum(DeterminationMethod__Type1),
                        vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pRedBC: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        pICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMS: z.string().regex(RegexSEFAZ.Decimal13_02),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        pRedBCST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vBCST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pICMSST: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional),
                        vFCPST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pBCOp: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional),
                        UFST: z.nativeEnum(UFIssuer),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSST: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CST: z
                            .literal(ICMSCST.NOT_TAXED)
                            .or(z.literal(ICMSCST.ICMS_PREVIOUSLY_CHARGED_BY_TAX_SUBSTITUTION)),
                        vBCSTRet: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vICMSSubstituto: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vICMSSTRet: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCPSTRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPSTRet: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPSTRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vBCSTDest: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vICMSSTDest: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pRedBCEfet: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vBCEfet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pICMSEfet: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vICMSEfet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN101: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z.literal(CSOSN.TAXED_BY_SIMPLES_NACIONAL_WITH_CREDIT_PERMISSION),
                        pCredSN: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vCredICMSSN: z.string().regex(RegexSEFAZ.Decimal13_02),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN102: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z
                            .literal(CSOSN.TAXED_BY_SIMPLES_NACIONAL_WITHOUT_CREDIT_PERMISSION)
                            .or(z.literal(CSOSN.ICMS_EXEMPTION_IN_SIMPLES_NACIONAL_FOR_GROSS_REVENUE_RANGE))
                            .or(z.literal(CSOSN.IMMUNE))
                            .or(z.literal(CSOSN.NOT_TAXED_BY_SIMPLES_NACIONAL)),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN201: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z.literal(
                            CSOSN.TAXED_BY_SIMPLES_NACIONAL_WITH_CREDIT_PERMISSION_AND_ICMS_CHARGED_BY_TAX_REPLACEMENT,
                        ),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        pRedBCST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vBCST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pICMSST: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pCredSN: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vCredICMSSN: z.string().regex(RegexSEFAZ.Decimal13_02),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN202: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z
                            .literal(
                                CSOSN.TAXED_BY_SIMPLES_NACIONAL_WITHOUT_CREDIT_PERMISSION_AND_WITH_ICMS_CHARGED_FOR_TAX_REPLACEMENT,
                            )
                            .or(
                                z.literal(
                                    CSOSN.EXEMPTION_FROM_ICMS_IN_SIMPLES_NACIONAL_FOR_GROSS_REVENUE_RANGE_AND_WITH_ICMS_COLLECTION_FOR_TAX_REPLACEMENT,
                                ),
                            ),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        pRedBCST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vBCST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pICMSST: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN500: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z.literal(
                            CSOSN.ICMS_PREVIOUSLY_CHARGED_BY_TAX_SUBSTITUTION_REPLACED_OR_BY_ADVANCE_TAXATION_BY_ICMS,
                        ),
                        vBCSTRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vICMSSubstituto: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vICMSSTRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        vBCFCPSTRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPSTRet: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPSTRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pRedBCEfet: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vBCEfet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pICMSEfet: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vICMSEfet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                    }),
                }),
            )
            .or(
                z.object({
                    ICMSSN900: z.object({
                        orig: z.nativeEnum(MerchandiseOrigin),
                        CSOSN: z.literal(CSOSN.OTHERS),
                        modBC: z.nativeEnum(DeterminationMethod__Type1),
                        vBC: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pRedBC: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        pICMS: z.string().regex(RegexSEFAZ.Decimal3_02a04).optional(),
                        vICMS: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        modBCST: z.nativeEnum(DeterminationMethod__Type2),
                        pMVAST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        pRedBCST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vBCST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        pICMSST: z.string().regex(RegexSEFAZ.Decimal3_02a04),
                        vICMSST: z.string().regex(RegexSEFAZ.Decimal13_02),
                        vBCFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pFCPST: z.string().regex(RegexSEFAZ.Decimal3_02a04_Optional).optional(),
                        vFCPST: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                        pCredSN: z.string().regex(RegexSEFAZ.Decimal3_02a04).optional(),
                        vCredICMSSN: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                    }),
                }),
            ),
        IPI: IPI.optional(),
        II: z
            .object({
                vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
                vDespAdu: z.string().regex(RegexSEFAZ.Decimal13_02),
                vII: z.string().regex(RegexSEFAZ.Decimal13_02),
                vIOF: z.string().regex(RegexSEFAZ.Decimal13_02),
            })
            .optional(),
    })
    .merge(__Tax);

const Tax__Type2 = z
    .object({
        vTotTrib: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
        IPI: IPI,
        ISSQN: z.object({
            vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
            vAliq: z.string().regex(RegexSEFAZ.Decimal3_02a04),
            vISSQN: z.string().regex(RegexSEFAZ.Decimal13_02),
            cMunFG: z.nativeEnum(CodeCityIBGE),
            cListServ: z.string().regex(new RegExp(/[0-9]{2}.[0-9]{2}/)),
            vDeducao: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
            vOutro: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
            vDescIncond: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
            vDescCond: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
            vISSRet: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
            indISS: z.nativeEnum(ExibilidadeISS),
            cServico: z.string().min(1).max(20).optional(),
            cMun: z.nativeEnum(CodeCityIBGE).optional(),
            // prettier-ignore
            cPais: z.string().regex(new RegExp(/[0-9]{1,4}/)).optional(),
            nProcesso: z.string().min(1).max(30).optional(),
            indIncentivo: z.nativeEnum(TaxIncentiveIndicator),
        }),
    })
    .merge(__Tax);

const Tax = Tax__Type1.or(Tax__Type2);

const __Transport = z.object({
    modFrete: z.nativeEnum(ShippingMethod),
    transporta: z
        .object({
            CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14).optional(),
        })
        .merge(Transporter)
        .or(
            z
                .object({
                    CPF: z.string().regex(RegexSEFAZ.CPF).max(11).optional(),
                })
                .merge(Transporter),
        )
        .optional(),
    retTransp: z
        .object({
            vServ: z.string().regex(RegexSEFAZ.Decimal13_02),
            vBCRet: z.string().regex(RegexSEFAZ.Decimal13_02),
            pICMSRet: z.string().regex(RegexSEFAZ.Decimal3_02a04),
            vICMSRet: z.string().regex(RegexSEFAZ.Decimal13_02),
            CFOP: z.string().regex(new RegExp(/[1,2,3,5,6,7]{1}[0-9]{3}/)),
            cMunFG: z.nativeEnum(CodeCityIBGE),
        })
        .optional(),
});

const TransportVolumes = z.object({
    vol: z
        .array(
            z.object({
                // prettier-ignore
                qVol: z.string().regex(new RegExp(/[0-9]{1,15}/)).optional(),
                esp: z.string().min(1).max(60).optional(),
                marca: z.string().min(1).max(60).optional(),
                nVol: z.string().min(1).max(60).optional(),
                pesoL: z.string().regex(RegexSEFAZ.Decimal12_03).optional(),
                pesoB: z.string().regex(RegexSEFAZ.Decimal12_03).optional(),
                lacres: z
                    .array(
                        z.object({
                            nLacre: z.string().min(1).max(60),
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
    placa: z.string().regex(new RegExp(/[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}/)),
    UF: z.nativeEnum(UFIssuer).or(z.literal("EX")).optional(),
    RNTC: z.string().min(1).max(20).optional(),
});

const Transport__Type1 = __Transport
    .merge(
        z.object({
            veicTransp: Vehicle.optional(),
            reboque: z.array(Vehicle).max(5).optional(),
        }),
    )
    .merge(TransportVolumes);

const Transport__Type2 = __Transport
    .merge(
        z.object({
            vagao: z.string().min(1).max(20).optional(),
        }),
    )
    .merge(TransportVolumes);

const Transport__Type3 = __Transport
    .merge(
        z.object({
            balsa: z.string().min(1).max(20).optional(),
        }),
    )
    .merge(TransportVolumes);

const Transport = Transport__Type1.or(Transport__Type2).or(Transport__Type3);

export const NFeValidator = z.object({
    $: z.object({
        versao: z.literal("4.00"),
        Id: z.string().regex(new RegExp(/NFe[0-9]{44}/)),
    }),
    ide: z.object({
        cUF: z.nativeEnum(UFCodeIBGE),
        cNF: z.string().regex(new RegExp(/[0-9]{8}/)),
        natOp: z.string().min(1).max(60),
        mod: z.nativeEnum(TaxDocumentModel),
        serie: z.string().regex(RegexSEFAZ.Serie),
        nNF: z.string().regex(RegexSEFAZ.NFENumber),
        dhEmi: z.string().regex(RegexSEFAZ.DateTimeUTC),
        dhSaiEnt: z.string().regex(RegexSEFAZ.DateTimeUTC).optional(),
        tpNF: z.nativeEnum(TaxDocumentType),
        idDest: z.nativeEnum(OperationDestinationLocationIdentifier),
        cMunFG: z.nativeEnum(CodeCityIBGE),
        tpImp: z.nativeEnum(DanfePrintFormat),
        tpEmis: z.nativeEnum(IssuanceMode),
        cDV: z.string().regex(new RegExp(/[0-9]{1}/)),
        tpAmb: z.nativeEnum(EnvironmentIdentifier),
        finNFe: z.nativeEnum(NFEGoal),
        indFinal: z.nativeEnum(OperationWithEndConsumer),
        indPres: z.nativeEnum(BuyerPresenceOnEstablishmentAtTransactionIndicator),
        indIntermed: z.nativeEnum(IntermediaryIndicator).optional(),
        procEmi: z.nativeEnum(IssuingProcess),
        verProc: z.string().min(1).max(20),
        dhCont: z.string().regex(RegexSEFAZ.DateTimeUTC).optional(),
        xJust: z.string().min(15).max(256).optional(),
        NFref: z.array(NF_Ref).max(999).optional(),
    }),
    emit: Issuer,
    avulsa: z
        .object({
            CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14),
            xOrgao: z.string().min(1).max(60),
            matr: z.string().min(1).max(60),
            xAgente: z.string().min(1).max(60),
            // prettier-ignore
            fone: z.string().regex(new RegExp(/[0-9]{6,14}/)).optional(),
            UF: z.nativeEnum(UFIssuer),
            nDAR: z.string().min(1).max(60).optional(),
            dEmi: z.string().regex(RegexSEFAZ.Date).optional(),
            vDAR: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            repEmi: z.string().min(1).max(60),
            dPag: z.string().regex(RegexSEFAZ.Date).optional(),
        })
        .optional(),
    dest: Recipient.optional(),
    retirada: Local.optional(),
    entrega: Local.optional(),
    autXML: z
        .array(
            z
                .object({
                    CPF: z.string().regex(RegexSEFAZ.CPF).max(11),
                })
                .or(
                    z.object({
                        CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14),
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
                            new RegExp(/[1-9]{1}[0-9]{0,1}|[1-8]{1}[0-9]{2}|[9]{1}[0-8]{1}[0-9]{1}|[9]{1}[9]{1}[0]{1}/),
                        ),
                }),
                prod: Product,
                imposto: Tax,
                impostoDevol: z
                    .object({
                        pDevol: z.string().regex(RegexSEFAZ.Decimal03_02a04max100),
                        IPI: z.object({
                            vIPIDevol: z.string().regex(RegexSEFAZ.Decimal13_02),
                        }),
                    })
                    .optional(),
                infAdProd: z.string().min(1).max(500).optional(),
                obsItem: z
                    .object({
                        obsCont: z
                            .object({
                                $: z.object({ xCampo: z.string().min(1).max(20) }),
                                xTexto: z.string().min(1).max(60),
                            })
                            .optional(),
                        obsFisco: z.object({
                            $: z.object({ xCampo: z.string().min(1).max(20) }),
                            xTexto: z.string().min(1).max(60),
                        }),
                    })
                    .optional(),
            }),
        )
        .max(990),
    total: z.object({
        ICMSTot: z.object({
            vBC: z.string().regex(RegexSEFAZ.Decimal13_02),
            vICMS: z.string().regex(RegexSEFAZ.Decimal13_02),
            vICMSDeson: z.string().regex(RegexSEFAZ.Decimal13_02),
            vFCPUFDest: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            vICMSUFDest: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            vICMSUFRemet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            vFCP: z.string().regex(RegexSEFAZ.Decimal13_02),
            vBCST: z.string().regex(RegexSEFAZ.Decimal13_02),
            vST: z.string().regex(RegexSEFAZ.Decimal13_02),
            vFCPST: z.string().regex(RegexSEFAZ.Decimal13_02),
            vFCPSTRet: z.string().regex(RegexSEFAZ.Decimal13_02),
            qBCMono: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            vICMSMono: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            qBCMonoReten: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            vICMSMonoReten: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            qBCMonoRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            vICMSMonoRet: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
            vProd: z.string().regex(RegexSEFAZ.Decimal13_02),
            vFrete: z.string().regex(RegexSEFAZ.Decimal13_02),
            vSeg: z.string().regex(RegexSEFAZ.Decimal13_02),
            vDesc: z.string().regex(RegexSEFAZ.Decimal13_02),
            vII: z.string().regex(RegexSEFAZ.Decimal13_02),
            vIPI: z.string().regex(RegexSEFAZ.Decimal13_02),
            vIPIDevol: z.string().regex(RegexSEFAZ.Decimal13_02),
            vPIS: z.string().regex(RegexSEFAZ.Decimal13_02),
            vCOFINS: z.string().regex(RegexSEFAZ.Decimal13_02),
            vOutro: z.string().regex(RegexSEFAZ.Decimal13_02),
            vNF: z.string().regex(RegexSEFAZ.Decimal13_02),
            vTotTrib: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
        }),
        ISSQNtot: z
            .object({
                vServ: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vBC: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vISS: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vPIS: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vCOFINS: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                dCompet: z.string().regex(RegexSEFAZ.Date),
                vDeducao: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vOutro: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vDescIncond: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vDescCond: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vISSRet: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                cRegTrib: z.nativeEnum(SpecialTaxRegimeCode).optional(),
            })
            .optional(),
        retTrib: z
            .object({
                vRetPIS: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vRetCOFINS: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vRetCSLL: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vBCIRRF: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vIRRF: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vBCRetPrev: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
                vRetPrev: z.string().regex(RegexSEFAZ.Decimal13_02_Optional).optional(),
            })
            .optional(),
    }),
    transp: Transport,
    cobr: z
        .object({
            fat: z
                .object({
                    nFat: z.string().min(1).max(60).optional(),
                    vOrig: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                    vDesc: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                    vLiq: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
                })
                .optional(),
            dup: z
                .array(
                    z.object({
                        nDup: z.string().min(1).max(60).optional(),
                        dVenc: z.string().regex(RegexSEFAZ.Date).optional(),
                        vDup: z.string().regex(RegexSEFAZ.Decimal13_02_Optional),
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
                    indPag: z.nativeEnum(PaymentIndicator).optional(),
                    tPag: z.nativeEnum(PaymentMode),
                    xPag: z.string().min(2).max(60).optional(),
                    vPag: z.string().regex(RegexSEFAZ.Decimal13_02),
                    dPag: z.string().regex(RegexSEFAZ.Date).optional(),
                    CNPJPag: z.string().regex(RegexSEFAZ.CNPJ).max(14).optional(),
                    UFPag: z.nativeEnum(UFIssuer).optional(),
                    card: z
                        .object({
                            tpIntegra: z.nativeEnum(IntegrationTypeInPaymentProcess),
                            CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14).optional(),
                            // prettier-ignore
                            tBand: z.string().regex(new RegExp(/[0-9]{2}/)).optional(),
                            cAut: z.string().min(1).max(128).optional(),
                            CNPJReceb: z.string().regex(RegexSEFAZ.CNPJ).max(14).optional(),
                            idTermPag: z.string().min(1).max(40).optional(),
                        })
                        .optional(),
                }),
            )
            .max(100),
        vTroco: z.string().regex(RegexSEFAZ.Decimal13_02).optional(),
    }),
    infIntermed: z
        .object({
            CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14),
            idCadIntTran: z.string().min(2).max(60),
        })
        .optional(),
    infAdic: z
        .object({
            infAdFisco: z.string().min(1).max(2000).optional(),
            infCpl: z.string().min(1).max(5000).optional(),
            obsCont: z
                .array(
                    z.object({
                        $: z.object({
                            xCampo: z.string().min(1).max(20),
                        }),
                        xTexto: z.string().min(1).max(60),
                    }),
                )
                .max(10)
                .optional(),
            obsFisco: z
                .array(
                    z.object({
                        $: z.object({
                            xCampo: z.string().min(1).max(20),
                        }),
                        xTexto: z.string().min(1).max(60),
                    }),
                )
                .max(10)
                .optional(),
            procRef: z
                .array(
                    z.object({
                        nProc: z.string().min(1).max(60),
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
            xLocExporta: z.string().min(1).max(60),
            xLocDespacho: z.string().min(1).max(60).optional(),
        })
        .optional(),
    compra: z
        .object({
            xNEmp: z.string().min(1).max(22).optional(),
            xPed: z.string().min(1).max(60).optional(),
            xCont: z.string().min(1).max(60).optional(),
        })
        .optional(),
    cana: z
        .object({
            safra: z.string().min(4).max(9),
            ref: z.string().regex(new RegExp(/(0[1-9]|1[0-2])([/][2][0-9][0-9][0-9])/)),
            forDia: z
                .array(
                    z.object({
                        $: z.object({
                            dia: z.string().regex(new RegExp(/[1-9]|[1][0-9]|[2][0-9]|[3][0-1]/)),
                        }),
                        qtde: z.string().regex(RegexSEFAZ.Decimal11_01a10),
                    }),
                )
                .max(31),
            qTotMes: z.string().regex(RegexSEFAZ.Decimal11_01a10),
            qTotAnt: z.string().regex(RegexSEFAZ.Decimal11_01a10),
            qTotGer: z.string().regex(RegexSEFAZ.Decimal11_01a10),
            deduc: z
                .array(
                    z.object({
                        xDed: z.string().min(1).max(60),
                        vDed: z.string().regex(RegexSEFAZ.Decimal13_02),
                    }),
                )
                .max(10)
                .optional(),
            vFor: z.string().regex(RegexSEFAZ.Decimal13_02),
            vTotDed: z.string().regex(RegexSEFAZ.Decimal13_02),
            vLiqFor: z.string().regex(RegexSEFAZ.Decimal13_02),
        })
        .optional(),
    infRespTec: z
        .object({
            CNPJ: z.string().regex(RegexSEFAZ.CNPJ).max(14),
            xContato: z.string().min(2).max(60),
            email: z.string().min(6).max(60),
            fone: z.string().regex(new RegExp(/[0-9]{6,14}/)),
            // prettier-ignore
            idCSRT: z.string().regex(new RegExp(/[0-9]{2}/)).optional(),
            hashCSRT: z.string().min(20).max(20).optional(),
        })
        .optional(),
    infSolicNFF: z
        .object({
            xSolic: z.string().min(2).max(5000),
        })
        .optional(),
});
