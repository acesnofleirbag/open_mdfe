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
    JustificationCode,
    NonNIF_Reason,
    SimpleNationalSituation,
    TaxAssessmentRegimeSN,
    TaxAssessmentRegimeSpecialTypes,
    ISSQN_TaxOverService,
    SuspendedEnforceability,
    ISSQN_Immunity,
    RetentionType,
    CST_Type,
    PIS_COFINS_RetentionType,
    BunicipalBenefitType,
} from "../../@types/layouts/nfse/nfse";
import {
    BACEN_CoinCode,
    BrazilianNomenclatureServices,
    EnvironmentIdentifier,
    IBGE_DistrictTable,
    ISO_Country,
    UFIssuer,
} from "../../@types/layouts/general";
import { RegexSEFAZ } from "../regex";

const Address = z.object({
    xLgr: z.string().min(1).max(255),
    nro: z.string().min(1).max(60),
    xCpl: z.string().min(1).max(156),
    xBairro: z.string().min(1).max(60),
    cMun: z.nativeEnum(IBGE_DistrictTable),
    UF: z.nativeEnum(UFIssuer),
    CEP: z.string().regex(new RegExp(/^([0-9]{8})$/)),
});

const __Issuer = z.object({
    IM: z.string().min(1).max(15).optional(),
    xNome: z.string().min(1).max(300),
    xFant: z.string().min(1).max(150).optional(),
    enderNac: Address,
    fone: z
        .string()
        .regex(new RegExp(/^([0-9]{6,20})$/))
        .optional(),
    email: z.string().min(1).max(80).optional(),
});

const Issuer__Type1 = z
    .object({
        CNPJ: z.string().regex(RegexSEFAZ.CNPJ),
    })
    .merge(__Issuer);

const Issuer__Type2 = z
    .object({
        CPF: z.string().regex(RegexSEFAZ.CPF),
    })
    .merge(__Issuer);

const Issuer = Issuer__Type1.or(Issuer__Type2);

const Values = z.object({
    vCalcDR: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
    tpBM: z.string().min(1).max(40).optional(),
    vCalcBM: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
    vBC: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
    pAliqAplic: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
    vISSQN: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
    vTotalRet: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
    vLiq: z.string().regex(RegexSEFAZ.Decimal15_02),
    xOutInf: z.string().min(1).max(2000).optional(),
});

const __ServiceProvider = z.object({
    CAEPF: z
        .string()
        .regex(new RegExp(/^([0-9]{14})$/))
        .optional(),
    IM: z.string().min(1).max(15).optional(),
    xNome: z.string().min(1).max(300).optional(),
    end: Address.optional(),
    fone: z
        .string()
        .regex(new RegExp(/^([0-9]{6,20})$/))
        .optional(),
    email: z.string().min(1).max(80).optional(),
    regTrib: z.object({
        opSimpNac: z.nativeEnum(SimpleNationalSituation),
        regApTribSN: z.nativeEnum(TaxAssessmentRegimeSN).optional(),
        regEspTrib: z.nativeEnum(TaxAssessmentRegimeSpecialTypes),
    }),
});

const ServiceProvider__Type1 = z
    .object({
        CNPJ: z.string().regex(RegexSEFAZ.CNPJ),
    })
    .merge(__ServiceProvider);

const ServiceProvider__Type2 = z
    .object({
        CPF: z.string().regex(RegexSEFAZ.CPF),
    })
    .merge(__ServiceProvider);

const ServiceProvider__Type3 = z
    .object({
        NIF: z.string().min(1).max(40),
    })
    .merge(__ServiceProvider);

const ServiceProvider__Type4 = z
    .object({
        cNaoNIF: z.nativeEnum(NonNIF_Reason),
    })
    .merge(__ServiceProvider);

const ServiceProvider = ServiceProvider__Type1.or(ServiceProvider__Type2)
    .or(ServiceProvider__Type3)
    .or(ServiceProvider__Type4);

const __PeopleInfos = z.object({
    CAEPF: z
        .string()
        .regex(new RegExp(/^([0-9]{14})$/))
        .optional(),
    IM: z.string().min(1).max(15).optional(),
    xNome: z.string().min(1).max(300),
    end: Address.optional(),
    fone: z
        .string()
        .regex(new RegExp(/^([0-9]{6,20})$/))
        .optional(),
    email: z.string().min(1).max(80).optional(),
});

const PeopleInfos__Type1 = z
    .object({
        CNPJ: z.string().regex(RegexSEFAZ.CNPJ),
    })
    .merge(__PeopleInfos);

const PeopleInfos__Type2 = z
    .object({
        CPF: z.string().regex(RegexSEFAZ.CPF),
    })
    .merge(__PeopleInfos);

const PeopleInfos__Type3 = z
    .object({
        NIF: z.string().min(1).max(40),
    })
    .merge(__PeopleInfos);

const PeopleInfos__Type4 = z
    .object({
        cNaoNIF: z.nativeEnum(NonNIF_Reason),
    })
    .merge(__PeopleInfos);

const PeopleInfos = PeopleInfos__Type1.or(PeopleInfos__Type2).or(PeopleInfos__Type3).or(PeopleInfos__Type4);

const Construction__Type1 = z.object({
    cObra: z.string().min(1).max(30),
});

const Construction__Type2 = z.object({
    inscImobFisc: z.string().min(1).max(30),
});

const __SimpleAddress = z.object({
    xLgr: z.string().min(1).max(255),
    nro: z.string().min(1).max(60),
    xCpl: z.string().min(1).max(156),
    xBairro: z.string().min(1).max(60),
});

const SimpleAddress__Type1 = z
    .object({
        CEP: z.string().regex(new RegExp(/^([0-9]{8})$/)),
    })
    .merge(__SimpleAddress);

const SimpleAddress__Type2 = z
    .object({
        endExt: z.object({
            cEndPost: z.string().min(1).max(11),
            xCidade: z.string().min(1).max(60),
            xEstProvReg: z.string().min(1).max(60),
        }),
    })
    .merge(__SimpleAddress);

const SimpleAddress = SimpleAddress__Type1.or(SimpleAddress__Type2);

const Construction__Type3 = z.object({
    end: SimpleAddress,
});

const Construction = Construction__Type1.or(Construction__Type2).or(Construction__Type3);

const __EventActivity = z.object({
    desc: z.string().min(1).max(255),
    dtIni: z.string().regex(RegexSEFAZ.Date),
    dtFim: z.string().regex(RegexSEFAZ.Date),
});

const EventActivity__Type1 = __EventActivity.merge(
    z.object({
        id: z.string().min(1).max(30),
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
    xDescOutDed: z.string().min(1).max(150),
    dtEmiDoc: z.string().regex(RegexSEFAZ.Date),
    vDedutivelRedutivel: z.string().regex(RegexSEFAZ.Decimal15_02),
    vDeducaoReducao: z.string().regex(RegexSEFAZ.Decimal15_02),
    fornec: PeopleInfos.optional(),
});

const DeductionReductionDocument__Type1 = z
    .object({
        chNFSe: z.string().regex(new RegExp(/^([0-9]{50})$/)),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument__Type2 = z
    .object({
        chNFe: z.string().regex(new RegExp(/^([0-9]{44})$/)),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument__Type3 = z
    .object({
        NFSeMun: z.object({
            cMunNFSeMun: z.nativeEnum(IBGE_DistrictTable),
            nNFSeMun: z.string().regex(new RegExp(/^([0-9]{15})$/)),
            cVerifNFSeMun: z.string().regex(new RegExp(/^([a-zA-Z0-9]{1,9})$/)),
        }),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument__Type4 = z
    .object({
        NFNFS: z.object({
            nNFS: z.string().regex(new RegExp(/^([0-9]{7})$/)),
            modNFS: z.string().regex(new RegExp(/^([0-9]{15})$/)),
            serieNFS: z.string().regex(new RegExp(/^([a-zA-Z0-9]{1,15})$/)),
        }),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument__Type5 = z
    .object({
        nDocFisc: z.string().min(1).max(255),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument__Type6 = z
    .object({
        nDoc: z.string().min(1).max(255),
    })
    .merge(__DeductionReductionDocument);

const DeductionReductionDocument = DeductionReductionDocument__Type1.or(DeductionReductionDocument__Type2)
    .or(DeductionReductionDocument__Type3)
    .or(DeductionReductionDocument__Type4)
    .or(DeductionReductionDocument__Type5)
    .or(DeductionReductionDocument__Type6);

const __MunicipalBenefit = z.object({
    tpBM: z.nativeEnum(BunicipalBenefitType),
    nBM: z.string().regex(new RegExp(/^([0-9]{14})$/)),
});

const MunicipalBenefit__Type1 = __MunicipalBenefit.merge(
    z.object({
        vRedBCBM: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
    }),
);

const MunicipalBenefit__Type2 = __MunicipalBenefit.merge(
    z.object({
        pRedBCBM: z.string().regex(RegexSEFAZ.Decimal3_02).optional(),
    }),
);

const MunicipalBenefit = MunicipalBenefit__Type1.or(MunicipalBenefit__Type2);

const TaxTotal__Type1 = z.object({
    vTotTrib: z.object({
        vTotTribFed: z.string().regex(RegexSEFAZ.Decimal15_02),
        vTotTribEst: z.string().regex(RegexSEFAZ.Decimal15_02),
        vTotTribMun: z.string().regex(RegexSEFAZ.Decimal15_02),
    }),
});

const TaxTotal__Type2 = z.object({
    pTotTrib: z.object({
        pTotTribFed: z.string().regex(RegexSEFAZ.Decimal3_02),
        pTotTribEst: z.string().regex(RegexSEFAZ.Decimal3_02),
        pTotTribMun: z.string().regex(RegexSEFAZ.Decimal3_02),
    }),
});

const TaxTotal__Type3 = z.object({
    indTotTrib: z.literal("0"),
});

const TaxTotal__Type4 = z.object({
    pTotTribSN: z.string().regex(new RegExp(/^(0|0\.[0-9]{2}|[1-9]{1}[0-9]{0,1}(\.[0-9]{2})?)$/)),
});

const TaxTotal = TaxTotal__Type1.or(TaxTotal__Type2).or(TaxTotal__Type3).or(TaxTotal__Type4);

export const NFSeValidator = z.object({
    $: z.object({ Id: z.string() }),
    xLocEmi: z.string().min(1).max(150),
    xLocPrestacao: z.string().min(1).max(150),
    nNFSe: z.string().regex(new RegExp(/^([1-9]{1}[0-9]{0,12})$/)),
    cLocIncid: z.nativeEnum(IBGE_DistrictTable).optional(),
    xLocIncid: z.string().min(1).max(150).optional(),
    xTribNac: z.string().min(1).max(600),
    xTribMun: z.string().min(1).max(600).optional(),
    xNBS: z.string().min(1).max(600).optional(),
    verAplic: z.string().min(1).max(20),
    ambGer: z.nativeEnum(GenerateEnvironmentType),
    tpEmis: z.nativeEnum(IssueType),
    procEmi: z.nativeEnum(IssuanceProcess),
    cStat: z.nativeEnum(MessageStatusCode),
    dhProc: z.string().regex(RegexSEFAZ.DateTimeUTC),
    nDFSe: z.string().regex(new RegExp(/^([1-9]{1}[0-9]{0,12})$/)),
    emit: Issuer,
    valores: Values,
    DPS: z.object({
        $: z.object({ xmlns: z.literal("http://www.sped.fazenda.gov.br/nfse") }),
        infDPS: z.object({
            $: z.object({
                Id: z.string().regex(new RegExp(/^(DPS[0-9]{42})$/)),
                versao: z.literal("1.00"),
            }),
            tpAmb: z.nativeEnum(EnvironmentIdentifier),
            dhEmi: z.string().regex(RegexSEFAZ.DateTimeUTC),
            verAplic: z.string().min(1).max(20),
            serie: z.string().min(1).max(5),
            nDPS: z.string().regex(new RegExp(/^([1-9]{1}[0-9]{0,14})$/)),
            dCompet: z.string().regex(RegexSEFAZ.Date),
            tpEmit: z.nativeEnum(IssuerType),
            cLocEmi: z.nativeEnum(IBGE_DistrictTable),
            subst: z
                .object({
                    chSubstda: z.string().regex(new RegExp(/^([0-9]{50})$/)),
                    cMotivo: z.nativeEnum(JustificationCode),
                    xMotivo: z.string().min(15).max(255).optional(),
                })
                .optional(),
            prest: ServiceProvider,
            toma: PeopleInfos,
            interm: PeopleInfos,
            serv: z.object({
                locPrest: z.object({
                    cLocPrestacao: z.nativeEnum(IBGE_DistrictTable),
                    cPaisPrestacao: z.nativeEnum(ISO_Country),
                    opConsumServ: z.nativeEnum(ServiceUsageLocal),
                }),
                cServ: z.object({
                    cTribNac: z.string().regex(new RegExp(/^([0-9]{6})$/)),
                    // prettier-ignore
                    cTribMun: z.string().regex(new RegExp(/^([0-9]{3})$/)).optional(),
                    xDescServ: z.string().min(1).max(2000),
                    cNBS: z.nativeEnum(BrazilianNomenclatureServices).optional(),
                    cIntContrib: z
                        .string()
                        .regex(new RegExp(/^([a-zA-Z0-9]{1,20})$/))
                        .optional(),
                }),
                comExt: z
                    .object({
                        mdPrestacao: z.nativeEnum(ProvisionMode),
                        vincPrest: z.nativeEnum(Bond),
                        tpMoeda: z.nativeEnum(BACEN_CoinCode),
                        vServMoeda: z.string().regex(RegexSEFAZ.Decimal15_02),
                        mecAFComexP: z.nativeEnum(ProviderForeignTradeSupportMechanism),
                        mecAFComexT: z.nativeEnum(TakerForeignTradeSupportMechanism),
                        movTempBens: z.nativeEnum(OperationLinkedWithGoodsTemporaryMovement),
                        nDI: z.string().min(1).max(12).optional(),
                        nRE: z.string().min(1).max(12).optional(),
                        mdic: z.nativeEnum(ShareNFSeInfosWithForeignTradeSecretary),
                    })
                    .optional(),
                lsadppu: z
                    .object({
                        categ: z.nativeEnum(ServiceCategory),
                        objeto: z.nativeEnum(ObjectType),
                        extensao: z.string().regex(new RegExp(/^([0-9]{1,5})$/)),
                        nPostes: z.string().regex(new RegExp(/^([0-9]{1,6})$/)),
                    })
                    .optional(),
                obra: Construction.optional(),
                atvEvento: EventActivity.optional(),
                explRod: z
                    .object({
                        categVeic: z.nativeEnum(VehicleCategory),
                        nEixos: z.string().regex(new RegExp(/^([0-9]{1,2})$/)),
                        rodagem: z.nativeEnum(RaceType),
                        sentido: z.string().regex(new RegExp(/^([0-9]{1,3})$/)),
                        placa: z.string().regex(new RegExp(/^([A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3})$/)),
                        codAcessoPed: z.string().regex(new RegExp(/^([a-zA-Z0-9]{10})$/)),
                        codContrato: z.string().regex(new RegExp(/^([a-zA-Z0-9]{4})$/)),
                    })
                    .optional(),
                infoCompl: z
                    .object({
                        idDocTec: z.string().min(1).max(40).optional(),
                        docRef: z.string().min(1).max(255).optional(),
                        xInfComp: z.string().min(1).max(2000).optional(),
                    })
                    .optional(),
            }),
            valores: z.object({
                vServPrest: z.object({
                    vReceb: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
                    vServ: z.string().regex(RegexSEFAZ.Decimal15_02),
                }),
                vDescCondIncond: z
                    .object({
                        vDescIncond: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
                        vDescCond: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
                    })
                    .optional(),
                vDedRed: z
                    .object({
                        pDR: z.string().regex(RegexSEFAZ.Decimal3_02),
                        vDR: z.string().regex(RegexSEFAZ.Decimal15_02),
                        documentos: z.object({
                            docDedRed: z.array(DeductionReductionDocument),
                        }),
                    })
                    .optional(),
                trib: z.object({
                    tribMun: z.object({
                        tribISSQN: z.nativeEnum(ISSQN_TaxOverService),
                        cPaisResult: z.nativeEnum(ISO_Country).optional(),
                        BM: MunicipalBenefit.optional(),
                        exigSusp: z
                            .object({
                                tpSusp: z.nativeEnum(SuspendedEnforceability),
                                nProcesso: z.string().regex(new RegExp(/^([0-9]{30})$/)),
                            })
                            .optional(),
                        tpImunidade: z.nativeEnum(ISSQN_Immunity).optional(),
                        pAliq: z
                            .string()
                            .regex(new RegExp(/^(0|[0-9]{1}(\.[0-9]{2})?)$/))
                            .optional(),
                        tpRetISSQN: z.nativeEnum(RetentionType),
                    }),
                    tribNac: z
                        .object({
                            piscofins: z
                                .object({
                                    CST: z.nativeEnum(CST_Type),
                                    vBCPisCofins: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
                                    pAliqPis: z
                                        .string()
                                        .regex(new RegExp(/^(0|0\.[0-9]{2}|[1-9]{1}[0-9]{0,1}(\.[0-9]{2})?)$/))
                                        .optional(),
                                    pAliqCofins: z
                                        .string()
                                        .regex(new RegExp(/^(0|0\.[0-9]{2}|[1-9]{1}[0-9]{0,1}(\.[0-9]{2})?)$/))
                                        .optional(),
                                    vPis: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
                                    vCofins: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
                                    tpRetPisCofins: z.nativeEnum(PIS_COFINS_RetentionType).optional(),
                                })
                                .optional(),
                            vRetCP: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
                            vRetIRRF: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
                            vRetCSLL: z.string().regex(RegexSEFAZ.Decimal15_02).optional(),
                        })
                        .optional(),
                    totTrib: TaxTotal,
                }),
            }),
        }),
    }),
});
