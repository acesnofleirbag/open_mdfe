import { z } from "zod";
import {
    BuyerPresenceOnEstablishmentAtTransactionIndicator,
    CodeCityIBGE,
    ConcessionAct,
    DENATRANColorCode,
    DanfePrintFormat,
    EnvironmentIdentifier,
    FireGunType,
    FuelType,
    ICMSInterstateTaxRate,
    ImportIndicator,
    ImportMethod,
    IntegrationTypeInPaymentProcess,
    IntermediaryIndicator,
    IssuanceMode,
    IssuingProcess,
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
    TaxDocumentModel,
    TaxDocumentType,
    TaxRegimeCode,
    TransportRoute,
    UFCodeIBGE,
    UFIssuer,
    VehicleCondition,
    Vin,
} from "../@types/layouts/nfe";

const Address = z.object({
    xLgr: z.string(),
    nro: z.string(),
    xCpl: z.string().optional(),
    xBairro: z.string(),
    cMun: z.nativeEnum(CodeCityIBGE),
    xMun: z.string(),
    UF: z.nativeEnum(UFIssuer),
    CEP: z.string(),
    cPais: z.literal("1058").optional(),
    xPais: z.literal("Brasil").or(z.literal("BRASIL")),
    fone: z.string().optional(),
});

const Issuer = z.object({
    xNome: z.string(),
    xFant: z.string().optional(),
    enderEmit: Address,
    IE: z.string().or(z.literal("ISENTO")),
    IEST: z.string().optional(),
    IM: z.string().optional(),
    CNAE: z.string().optional(),
    CRT: z.nativeEnum(TaxRegimeCode),
});

const Recipient = z.object({
    xNome: z.string().optional(),
    enderDest: Address.optional(),
    indIEDest: z.nativeEnum(RecipientStateSubscriptionIndicator),
    IE: z.string().optional(),
    ISUF: z.string().optional(),
    IM: z.string().optional(),
    email: z.string().optional(),
});

const Local = z
    .object({
        email: z.string().optional(),
        IE: z.string().optional(),
    })
    .merge(Address);

const ImportDocument = z.object({
    nDI: z.string(),
    dDI: z.string(),
    xLocDesemb: z.string(),
    UFDesemb: z.nativeEnum(UFIssuer),
    dDesemb: z.string(),
    tpViaTransp: z.nativeEnum(TransportRoute),
    vAFRMM: z.string().optional(),
    tpIntermedio: z.nativeEnum(ImportMethod),
    UFTerceiro: z.nativeEnum(UFIssuer).optional(),
    cExportador: z.string(),
    adi: z.array(
        z.object({
            nAdicao: z.string().optional(),
            nSeqAdic: z.string(),
            cFabricante: z.string(),
            vDescDI: z.string().optional(),
            nDraw: z.string().optional(),
        }),
    ),
});

const __Product = z.object({
    cProd: z.string(),
    cEAN: z.string().or(z.literal("SEM GTIN")),
    cBarra: z.string().optional(),
    xProd: z.string(),
    NCM: z.string(),
    NVE: z.string().optional(),
    CEST: z.string().optional(),
    indEscala: z.literal("S").or(z.literal("N")).optional(),
    CNPJFab: z.string().optional(),
    cBenef: z.string().or(z.literal("SEM CBENEF")).optional(),
    cCredPresumido: z.string().optional(),
    pCredPresumido: z.string().optional(),
    vCredPresumido: z.string().optional(),
    EXTIPI: z.string().optional(),
    CFOP: z.string(),
    uCom: z.string(),
    qCom: z.string(),
    vUnCom: z.string(),
    vProd: z.string(),
    cEANTrib: z.string().or(z.literal("SEM GTIN")),
    cBarraTrib: z.string().optional(),
    uTrib: z.string(),
    qTrib: z.string(),
    vUnTrib: z.string(),
    vFrete: z.string().optional(),
    vSeg: z.string().optional(),
    vDesc: z.string().optional(),
    vOutro: z.string().optional(),
    indTot: z.nativeEnum(ProductComposeTotal),
    DI: ImportDocument.extend({ CPF: z.string().optional() })
        .or(ImportDocument.extend({ CNPJ: z.string().optional() }))
        .optional(),
    detExport: z
        .array(
            z.object({
                nDraw: z.string().optional(),
                exportInd: z
                    .object({
                        nRE: z.string(),
                        chNFe: z.string(),
                        qExport: z.string(),
                    })
                    .optional(),
            }),
        )
        .optional(),
    xPed: z.string().optional(),
    nItemPed: z.string().optional(),
    nFCI: z.string().optional(),
    rastro: z
        .array(
            z.object({
                nLote: z.string(),
                qLote: z.string(),
                dFab: z.string(),
                dVal: z.string(),
                cAgreg: z.string().optional(),
            }),
        )
        .optional(),
    infProdNFF: z
        .object({
            cProdFisco: z.string(),
            cOperNFF: z.string(),
        })
        .optional(),
    infProdEmb: z
        .object({
            xEmb: z.string(),
            qVolEmb: z.string(),
            uEmb: z.string(),
        })
        .optional(),
});

const Product__Type1 = z
    .object({
        veicProd: z
            .object({
                tpOp: z.nativeEnum(OperationType),
                chassi: z.string(),
                cCor: z.string(),
                xCor: z.string(),
                pot: z.string(),
                cilin: z.string(),
                pesoL: z.string(),
                pesoB: z.string(),
                nSerie: z.string(),
                tpComb: z.nativeEnum(FuelType),
                nMotor: z.string(),
                CMT: z.string(),
                dist: z.string(),
                anoMod: z.string(),
                anoFab: z.string(),
                tpPint: z.string(),
                tpVeic: z.string(),
                espVeic: z.string(),
                VIN: z.nativeEnum(Vin),
                condVeic: z.nativeEnum(VehicleCondition),
                cMod: z.string(),
                cCorDENATRAN: z.nativeEnum(DENATRANColorCode),
                lota: z.string(),
                tpRest: z.nativeEnum(Restriction),
            })
            .optional(),
    })
    .merge(__Product);

const Product__Type2 = z
    .object({
        med: z
            .object({
                cProdANVISA: z.string().or(z.literal("ISENTO")),
                xMotivoIsencao: z.string().optional(),
                vPMC: z.string(),
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
                    nSerie: z.string(),
                    nCano: z.string(),
                    descr: z.string(),
                }),
            )
            .optional(),
    })
    .merge(__Product);

const Product__Type4 = z
    .object({
        comb: z
            .object({
                cProdANP: z.string(),
                descANP: z.string(),
                pGLP: z.string().optional(),
                pGNn: z.string().optional(),
                pGNi: z.string().optional(),
                vPart: z.string().optional(),
                CODIF: z.string().optional(),
                qTemp: z.string().optional(),
                UFCons: z.nativeEnum(UFIssuer).and(z.literal("EX")),
                CIDE: z
                    .object({
                        qBCProd: z.string(),
                        vAliqProd: z.string(),
                        vCIDE: z.string(),
                    })
                    .optional(),
                encerrante: z
                    .object({
                        nBico: z.string(),
                        nBomba: z.string().optional(),
                        nTanque: z.string(),
                        vEncIni: z.string(),
                        vEncFin: z.string(),
                    })
                    .optional(),
                pBio: z.string().optional(),
                origComb: z
                    .array(
                        z.object({
                            indImport: z.nativeEnum(ImportIndicator),
                            cUFOrig: z.nativeEnum(UFCodeIBGE),
                            pOrig: z.string(),
                        }),
                    )
                    .optional(),
            })
            .optional(),
    })
    .merge(__Product);

const Product__Type5 = z
    .object({
        nRECOPI: z.string(),
    })
    .merge(__Product);

const Product = Product__Type1.or(Product__Type2).or(Product__Type3).or(Product__Type4).or(Product__Type5);

const PISST = z.object({});

const COFINSST = z.object({});

const Transporter = z.object({});

export const NFEValidator = z.object({
    infNFE: z.object({
        $: z.object({ versao: z.string(), Id: z.string() }),
        ide: z.object({
            cUF: z.nativeEnum(UFCodeIBGE),
            cNF: z.string(),
            natOp: z.string(),
            mod: z.nativeEnum(TaxDocumentModel),
            serie: z.string(),
            nNF: z.string(),
            dhEmi: z.string(),
            dhSaiEnt: z.string(),
            tpNF: z.nativeEnum(TaxDocumentType),
            idDest: z.nativeEnum(OperationDestinationLocationIdentifier),
            cMunFG: z.nativeEnum(CodeCityIBGE),
            tpImp: z.nativeEnum(DanfePrintFormat),
            tpEmis: z.nativeEnum(IssuanceMode),
            cDV: z.string(),
            tpAmb: z.nativeEnum(EnvironmentIdentifier),
            finNFe: z.nativeEnum(NFEGoal),
            indFinal: z.nativeEnum(OperationWithEndConsumer),
            indPres: z.nativeEnum(BuyerPresenceOnEstablishmentAtTransactionIndicator),
            indIntermed: z.nativeEnum(IntermediaryIndicator).optional(),
            procEmi: z.nativeEnum(IssuingProcess),
            verProc: z.string(),
            dhCont: z.string().optional(),
            xJust: z.string().optional(),
            NFref: z
                .array(
                    z
                        .object({
                            refNFe: z.string(),
                        })
                        .or(
                            z.object({
                                refNFeSig: z.string(),
                            }),
                        )
                        .or(
                            z.object({
                                refNF: z.object({
                                    cUF: z.nativeEnum(UFCodeIBGE),
                                    AAMM: z.string(),
                                    CNPJ: z.string(),
                                    mod: z.nativeEnum(NFEModel),
                                    serie: z.string(),
                                    nNF: z.string(),
                                }),
                            }),
                        )
                        .or(
                            z.object({
                                refNFP: z
                                    .object({
                                        cUF: z.nativeEnum(UFCodeIBGE),
                                        AAMM: z.string(),
                                        IE: z.string().or(z.literal("ISENTO")),
                                        mod: z.nativeEnum(ProducerReferencedNFMode),
                                        serie: z.string(),
                                        nNF: z.string(),
                                        CNPJ: z.string(),
                                    })
                                    .or(
                                        z.object({
                                            cUF: z.nativeEnum(UFCodeIBGE),
                                            AAMM: z.string(),
                                            IE: z.string().or(z.literal("ISENTO")),
                                            mod: z.nativeEnum(ProducerReferencedNFMode),
                                            serie: z.string(),
                                            nNF: z.string(),
                                            CPF: z.string(),
                                        }),
                                    ),
                            }),
                        ),
                )
                .optional(),
        }),
        emit: Issuer.extend({ CNPJ: z.string() }).or(
            Issuer.extend({
                CPF: z.string(),
            }),
        ),
        avulsa: z
            .object({
                CNPJ: z.string(),
                xOrgao: z.string(),
                matr: z.string(),
                xAgente: z.string(),
                fone: z.string().optional(),
                UF: z.nativeEnum(UFIssuer),
                nDAR: z.string().optional(),
                dEmi: z.string().optional(),
                vDAR: z.string().optional(),
                repEmi: z.string(),
                dPag: z.string().optional(),
            })
            .optional(),
        dest: Recipient.extend({
            CNPJ: z.string(),
        })
            .or(
                Recipient.extend({
                    CPF: z.string(),
                }),
            )
            .or(
                Recipient.extend({
                    idEstrangeiro: z.string(),
                }),
            )
            .optional(),
        retirada: Local.extend({ CNPJ: z.string() })
            .or(Local.extend({ CPF: z.string() }))
            .optional(),
        entrega: Local.extend({ CNPJ: z.string() })
            .or(Local.extend({ CPF: z.string() }))
            .optional(),
        autXML: z
            .object({ CPF: z.string() })
            .or(z.object({ CNPJ: z.string() }))
            .optional(),
        det: z.array(
            z.object({
                $: z.object({ nItem: z.string() }),
                prod: Product,
                imposto: z.object({
                    vTotTrib: z.string().optional(),
                    PIS: z.object({}).optional(), //PIS,
                    PISST: PISST.extend({ vBC: z.string(), pPIS: z.string() })
                        .or(PISST.extend({ qBCProd: z.string(), vAliqProd: z.string() }))
                        .optional(),
                    COFINS: z.object({}).optional(), //CONFINS,
                    COFINSST: COFINSST.extend({ vBC: z.string(), pCOFINS: z.string() })
                        .or(COFINSST.extend({ qBCProd: z.string(), vAliqProd: z.string() }))
                        .optional(),
                    ICMSUFDest: z
                        .object({
                            vBCUFDest: z.string(),
                            vBCFCPUFDest: z.string().optional(),
                            pFCPUFDest: z.string().optional(),
                            pICMSUFDest: z.string(),
                            pICMSInter: z.nativeEnum(ICMSInterstateTaxRate),
                            pICMSInterPart: z.string(),
                            vFCPUFDest: z.string().optional(),
                            vICMSUFDest: z.string(),
                            vICMSUFRemet: z.string(),
                        })
                        .optional(),
                }),
                impostoDevol: z
                    .object({
                        pDevol: z.string(),
                        IPI: z.object({ vIPIDevol: z.string() }),
                    })
                    .optional(),
                infAdProd: z.string().optional(),
                obsItem: z
                    .object({
                        obsCont: z
                            .object({
                                xTexto: z.string(),
                                xCampo: z.string(),
                            })
                            .optional(),
                        obsFisco: z.object({
                            xTexto: z.string(),
                            xCampo: z.string(),
                        }),
                    })
                    .optional(),
            }),
        ),
        total: z.object({
            ICMSTot: z.object({
                vBC: z.string(),
                vICMS: z.string(),
                vICMSDeson: z.string(),
                vFCPUFDest: z.string().optional(),
                vICMSUFDest: z.string().optional(),
                vICMSUFRemet: z.string().optional(),
                vFCP: z.string(),
                vBCST: z.string(),
                vST: z.string(),
                vFCPST: z.string(),
                vFCPSTRet: z.string(),
                qBCMono: z.string().optional(),
                vICMSMono: z.string().optional(),
                qBCMonoReten: z.string().optional(),
                vICMSMonoReten: z.string().optional(),
                qBCMonoRet: z.string().optional(),
                vICMSMonoRet: z.string().optional(),
                vProd: z.string(),
                vFrete: z.string(),
                vSeg: z.string(),
                vDesc: z.string(),
                vII: z.string(),
                vIPI: z.string(),
                vIPIDevol: z.string(),
                vPIS: z.string(),
                vCOFINS: z.string(),
                vOutro: z.string(),
                vNF: z.string(),
                vTotTrib: z.string().optional(),
            }),
            ISSQNtot: z
                .object({
                    vServ: z.string().optional(),
                    vBC: z.string().optional(),
                    vISS: z.string().optional(),
                    vPIS: z.string().optional(),
                    vCOFINS: z.string().optional(),
                    dCompet: z.string(),
                    vDeducao: z.string().optional(),
                    vOutro: z.string().optional(),
                    vDescIncond: z.string().optional(),
                    vDescCond: z.string().optional(),
                    vISSRet: z.string().optional(),
                    cRegTrib: z.nativeEnum(SpecialTaxRegimeCode).optional(),
                })
                .optional(),
            retTrib: z
                .object({
                    vRetPIS: z.string().optional(),
                    vRetCOFINS: z.string().optional(),
                    vRetCSLL: z.string().optional(),
                    vBCIRRF: z.string().optional(),
                    vIRRF: z.string().optional(),
                    vBCRetPrev: z.string().optional(),
                    vRetPrev: z.string().optional(),
                })
                .optional(),
        }),
        transp: z.object({
            modFrete: z.nativeEnum(ShippingMethod),
            transporta: Transporter.extend({ CNPJ: z.string().optional() })
                .or(Transporter.extend({ CPF: z.string().optional() }))
                .optional(),
            retTransp: z
                .object({
                    vServ: z.string(),
                    vBCRet: z.string(),
                    pICMSRet: z.string(),
                    vICMSRet: z.string(),
                    CFOP: z.string(),
                    cMunFG: z.nativeEnum(CodeCityIBGE),
                })
                .optional(),
            vol: z
                .array(
                    z.object({
                        qVol: z.string().optional(),
                        esp: z.string().optional(),
                        marca: z.string().optional(),
                        nVol: z.string().optional(),
                        pesoL: z.string().optional(),
                        pesoB: z.string().optional(),
                        lacres: z.array(z.object({ nLacre: z.string() })),
                    }),
                )
                .optional(),
        }),
        cobr: z
            .object({
                fat: z
                    .object({
                        nFat: z.string().optional(),
                        vOrig: z.string().optional(),
                        vDesc: z.string().optional(),
                        vLiq: z.string().optional(),
                    })
                    .optional(),
                dup: z
                    .array(
                        z.object({
                            nDup: z.string().optional(),
                            dVenc: z.string().optional(),
                            vDup: z.string(),
                        }),
                    )
                    .optional(),
            })
            .optional(),
        pag: z.object({
            detPag: z.array(
                z.object({
                    indPag: z.nativeEnum(PaymentMode).optional(),
                    tPag: z.string(),
                    xPag: z.string().optional(),
                    vPag: z.string(),
                    dPag: z.string().optional(),
                    CNPJPag: z.string().optional(),
                    UFPag: z.nativeEnum(UFIssuer).optional(),
                    card: z
                        .object({
                            tpIntegra: z.nativeEnum(IntegrationTypeInPaymentProcess),
                            CNPJ: z.string().optional(),
                            tBand: z.string().optional(),
                            cAut: z.string().optional(),
                            CNPJReceb: z.string().optional(),
                            idTermPag: z.string().optional(),
                        })
                        .optional(),
                }),
            ),
            vTroco: z.string().optional(),
        }),
        infIntermed: z
            .object({
                CNPJ: z.string(),
                idCadIntTran: z.string(),
            })
            .optional(),
        infAdic: z
            .object({
                infAdFisco: z.string().optional(),
                infCpl: z.string().optional(),
                obsCont: z
                    .array(
                        z.object({
                            $: z.object({ xCampo: z.string() }),
                            xTexto: z.string(),
                        }),
                    )
                    .optional(),
                obsFisco: z
                    .array(
                        z.object({
                            $: z.object({ xCampo: z.string() }),
                            xTexto: z.string(),
                        }),
                    )
                    .optional(),
                procRef: z
                    .array(
                        z.object({
                            nProc: z.string(),
                            indProc: z.nativeEnum(ProcessOrigin),
                            tpAto: z.nativeEnum(ConcessionAct).optional(),
                        }),
                    )
                    .optional(),
            })
            .optional(),
        exporta: z
            .object({
                UFSaidaPais: z.nativeEnum(UFIssuer),
                xLocExporta: z.string(),
                xLocDespacho: z.string().optional(),
            })
            .optional(),
        compra: z
            .object({
                xNEmp: z.string().optional(),
                xPed: z.string().optional(),
                xCont: z.string().optional(),
            })
            .optional(),
        cana: z
            .object({
                safra: z.string(),
                ref: z.string(),
                forDia: z.array(
                    z.object({
                        $: z.object({ dia: z.string() }),
                        qtde: z.string(),
                    }),
                ),
                qTotMes: z.string(),
                qTotAnt: z.string(),
                qTotGer: z.string(),
                deduc: z
                    .array(
                        z.object({
                            xDed: z.string(),
                            vDed: z.string(),
                        }),
                    )
                    .optional(),
                vFor: z.string(),
                vTotDed: z.string(),
                vLiqFor: z.string(),
            })
            .optional(),
        infRespTec: z
            .object({
                CNPJ: z.string(),
                xContato: z.string(),
                email: z.string(),
                fone: z.string(),
                idCSRT: z.string().optional(),
                hashCSRT: z.string().optional(),
            })
            .optional(),
        infSolicNFF: z
            .object({
                xSolic: z.string(),
            })
            .optional(),
    }),
});
