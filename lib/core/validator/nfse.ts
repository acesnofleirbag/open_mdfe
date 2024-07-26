import { z } from "zod";
import {
    DeductionReductionIdentification,
    GenerateEnvironmentType,
    IssuanceProcess,
    IssueType,
    IssuerType,
    MessageStatusCode,
    ProvisionMode,
    Bond,
    RaceType,
    ObjectType,
    ServiceCategory,
    VehicleCategory,
    ServiceUsageLocal,
    TakerForeignTradeSupportMechanism,
    ProviderForeignTradeSupportMechanism,
    ShareNFSeInfosWithForeignTradeSecretary,
    OperationLinkedWithGoodsTemporaryMovement,
} from "../../@types/layouts/nfse/nfse";
import { EnvironmentIdentifier, UFIssuer } from "../../@types/layouts/general";

const Address = z.object({
    xLgr: z.string(),
    nro: z.string(),
    xCpl: z.string(),
    xBairro: z.string(),
    cMun: z.string(),
    UF: z.nativeEnum(UFIssuer),
    CEP: z.string(),
});

const __Issuer = z.object({
    IM: z.string().optional(),
    xNome: z.string(),
    xFant: z.string().optional(),
    enderNac: Address,
    fone: z.string().optional(),
    email: z.string().optional(),
});

const Issuer__Type1 = z
    .object({
        CNPJ: z.string(),
    })
    .merge(__Issuer);

const Issuer__Type2 = z
    .object({
        CPF: z.string(),
    })
    .merge(__Issuer);

const Issuer = Issuer__Type1.or(Issuer__Type2);

const Values = z.object({
    vCalcDR: z.string().optional(),
    tpBM: z.string().optional(),
    vCalcBM: z.string().optional(),
    vBC: z.string().optional(),
    pAliqAplic: z.string().optional(),
    vISSQN: z.string().optional(),
    vTotalRet: z.string().optional(),
    vLiq: z.string(),
    xOutInf: z.string().optional(),
});

const __ServiceProvider = z.object({
    CAEPF: z.string(),
    IM: z.string(),
    xNome: z.string(),
    end: Address,
    fone: z.string(),
    email: z.string(),
    regTrib: z.string(),
});

const ServiceProvider__Type1 = z
    .object({
        CNPJ: z.string(),
    })
    .merge(__ServiceProvider);

const ServiceProvider__Type2 = z
    .object({
        CPF: z.string(),
    })
    .merge(__ServiceProvider);

const ServiceProvider__Type3 = z
    .object({
        NIF: z.string(),
    })
    .merge(__ServiceProvider);

const ServiceProvider__Type4 = z
    .object({
        cNaoNIF: z.string(),
    })
    .merge(__ServiceProvider);

const ServiceProvider = ServiceProvider__Type1.or(ServiceProvider__Type2)
    .or(ServiceProvider__Type3)
    .or(ServiceProvider__Type4);

const __PeopleInfos = z.object({
    CAEPF: z.string(),
    IM: z.string(),
    xNome: z.string(),
    end: Address,
    fone: z.string(),
    email: z.string(),
});

const PeopleInfos__Type1 = z
    .object({
        CNPJ: z.string(),
    })
    .merge(__PeopleInfos);

const PeopleInfos__Type2 = z
    .object({
        CPF: z.string(),
    })
    .merge(__PeopleInfos);

const PeopleInfos__Type3 = z
    .object({
        NIF: z.string(),
    })
    .merge(__PeopleInfos);

const PeopleInfos__Type4 = z
    .object({
        cNaoNIF: z.string(),
    })
    .merge(__PeopleInfos);

const PeopleInfos = PeopleInfos__Type1.or(PeopleInfos__Type2).or(PeopleInfos__Type3).or(PeopleInfos__Type4);

const Construction__Type1 = z.object({
    cObra: z.string(),
});

const Construction__Type2 = z.object({
    inscImobFisc: z.string(),
});

const __SimpleAddress = z.object({
    xLgr: z.string(),
    nro: z.string(),
    xCpl: z.string(),
    xBairro: z.string(),
});

const SimpleAddress__Type1 = z
    .object({
        CEP: z.string(),
    })
    .merge(__SimpleAddress);

const SimpleAddress__Type2 = z
    .object({
        endExt: z.object({
            cEndPost: z.string(),
            xCidade: z.string(),
            xEstProvReg: z.string(),
        }),
    })
    .merge(__SimpleAddress);

const SimpleAddress = SimpleAddress__Type1.or(SimpleAddress__Type2);

const Construction__Type3 = z.object({
    end: SimpleAddress,
});

const Construction = Construction__Type1.or(Construction__Type2).or(Construction__Type3);

const __EventActivity = z.object({
    desc: z.string(),
    dtIni: z.string(),
    dtFim: z.string(),
});

const EventActivity__Type1 = __EventActivity.merge(
    z.object({
        id: z.string(),
    }),
);

const EventActivity__Type2 = __EventActivity.merge(
    z.object({
        end: SimpleAddress,
    }),
);

const EventActivity = EventActivity__Type1.or(EventActivity__Type2);

const __DeductionReductionDocument = z.object({
    tpDedRed: z.nativeEnum(DeductionReductionIdentification),
    xDescOutDed: z.string(),
    dtEmiDoc: z.string(),
    vDedutivelRedutivel: z.string(),
    vDeducaoReducao: z.string(),
    fornec: PeopleInfos.optional(),
});

const DeductionReductionDocument__Type1 = z
    .object({
        chNFSe: z.string(),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument__Type2 = z
    .object({
        chNFe: z.string(),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument__Type3 = z
    .object({
        NFSeMun: z.object({
            cMunNFSeMun: z.string(),
            nNFSeMun: z.string(),
            cVerifNFSeMun: z.string(),
        }),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument__Type4 = z
    .object({
        NFNFS: z.object({
            nNFS: z.string(),
            modNFS: z.string(),
            serieNFS: z.string(),
        }),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument__Type5 = z
    .object({
        nDocFisc: z.string(),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument__Type6 = z
    .object({
        nDoc: z.string(),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument = DeductionReductionDocument__Type1.or(DeductionReductionDocument__Type2)
    .or(DeductionReductionDocument__Type3)
    .or(DeductionReductionDocument__Type4)
    .or(DeductionReductionDocument__Type5)
    .or(DeductionReductionDocument__Type6);

export const NFSeValidator = z.object({
    $: z.object({ Id: z.string() }),
    xLocEmi: z.string(),
    xLocPrestacao: z.string(),
    nNFSe: z.string(),
    cLocIncid: z.string().optional(),
    xLocIncid: z.string().optional(),
    xTribNac: z.string(),
    xTribMun: z.string().optional(),
    xNBS: z.string().optional(),
    verAplic: z.string(),
    ambGer: z.nativeEnum(GenerateEnvironmentType),
    tpEmis: z.nativeEnum(IssueType),
    procEmi: z.nativeEnum(IssuanceProcess),
    cStat: z.nativeEnum(MessageStatusCode),
    dhProc: z.string(),
    nDFSe: z.string(),
    emit: Issuer,
    valores: Values,
    DPS: z.object({
        infDPS: z.object({
            $: z.object({
                Id: z.string(),
            }),
            tpAmb: z.nativeEnum(EnvironmentIdentifier),
            dhEmi: z.string(),
            verAplic: z.string(),
            serie: z.string(),
            nDPS: z.string(),
            dCompet: z.string(),
            tpEmit: z.nativeEnum(IssuerType),
            cLocEmi: z.string(),
            subst: z
                .object({
                    chSubstda: z.string(),
                    cMotivo: z.string(),
                    xMotivo: z.string().optional(),
                })
                .optional(),
            prest: ServiceProvider,
            toma: PeopleInfos,
            interm: PeopleInfos,
            serv: z.object({
                locPrest: z.object({
                    cLocPrestacao: z.string(),
                    cPaisPrestacao: z.string(),
                    opConsumServ: z.nativeEnum(ServiceUsageLocal),
                }),
                cServ: z.object({
                    cTribNac: z.string(),
                    cTribMun: z.string().optional(),
                    xDescServ: z.string(),
                    cNBS: z.string().optional(),
                    cIntContrib: z.string().optional(),
                }),
                comExt: z
                    .object({
                        mdPrestacao: z.nativeEnum(ProvisionMode),
                        vincPrest: z.nativeEnum(Bond),
                        tpMoeda: z.string(),
                        vServMoeda: z.string(),
                        mecAFComexP: z.nativeEnum(ProviderForeignTradeSupportMechanism),
                        mecAFComexT: z.nativeEnum(TakerForeignTradeSupportMechanism),
                        movTempBens: z.nativeEnum(OperationLinkedWithGoodsTemporaryMovement),
                        nDI: z.string().optional(),
                        nRE: z.string().optional(),
                        mdic: z.nativeEnum(ShareNFSeInfosWithForeignTradeSecretary),
                    })
                    .optional(),
                lsadppu: z
                    .object({
                        categ: z.nativeEnum(ServiceCategory),
                        objeto: z.nativeEnum(ObjectType),
                        extensao: z.string(),
                        nPostes: z.string(),
                    })
                    .optional(),
                obra: Construction.optional(),
                atvEvento: EventActivity.optional(),
                explRod: z
                    .object({
                        categVeic: z.nativeEnum(VehicleCategory),
                        nEixos: z.string(),
                        rodagem: z.nativeEnum(RaceType),
                        sentido: z.string(),
                        placa: z.string(),
                        codAcessoPed: z.string(),
                        codContrato: z.string(),
                    })
                    .optional(),
                infoCompl: z
                    .object({
                        idDocTec: z.string().optional(),
                        docRef: z.string().optional(),
                        xInfComp: z.string().optional(),
                    })
                    .optional(),
            }),
            valores: z.object({
                vServPrest: z.object({
                    vReceb: z.string().optional(),
                    vServ: z.string(),
                }),
                vDescCondIncond: z
                    .object({
                        vDescIncond: z.string().optional(),
                        vDescCond: z.string().optional(),
                    })
                    .optional(),
                vDedRed: z
                    .object({
                        pDR: z.string(),
                        vDR: z.string(),
                        documentos: z.object({
                            docDedRed: z.array(DeductionReductionDocument),
                        }),
                    })
                    .optional(),
                trib: z.object({
                    tribMun: z.object({}),
                    tribNac: z.object({}),
                    totTrib: z.object({}),
                }),
            }),
        }),
    }),
});
