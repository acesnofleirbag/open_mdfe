// NOTE: Source
//
// - production: <https://www.nfe.fazenda.gov.br/portal/webServices.aspx?tipoConteudo=OUC/YVNWZfo=>
// - homologation: <http://hom.nfe.fazenda.gov.br/Portal/webServices.aspx?tipoConteudo=OUC/YVNWZfo=>

export const NFeWebServices = {
    AM: {
        useless: {
            production: "https://nfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4",
            homologation: "https://homnfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4",
        },
        protocolFetching: {
            production: "https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4",
            homologation: "https://homnfe.sefaz.am.gov.br/services2/services/NfeConsulta4",
        },
        serviceStatus: {
            production: "https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4",
            homologation: "https://homnfe.sefaz.am.gov.br/services2/services/NfeStatusServico4",
        },
        eventReception: {
            production: "https://nfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4",
            homologation: "https://homnfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4",
        },
        authorization: {
            production: "https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4",
            homologation: "https://homnfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4",
        },
        authorizationResult: {
            production: "https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4",
            homologation: "https://homnfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4",
        },
    },
    BA: {
        useless: {
            production: "https://nfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx",
            homologation: "https://hnfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx",
        },
        protocolFetching: {
            production: "https://nfe.sefaz.ba.gov.br/webservices/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
            homologation: "https://hnfe.sefaz.ba.gov.br/webservices/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
        },
        serviceStatus: {
            production: "https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx",
            homologation: "https://hnfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx",
        },
        registerFetching: {
            production: "https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx",
            homologation: "https://hnfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx",
        },
        eventReception: {
            production: "https://nfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
            homologation: "https://hnfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
        },
        authorization: {
            production: "https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx",
            homologation: "https://hnfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx",
        },
        authorizationResult: {
            production: "https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
            homologation: "https://hnfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
        },
    },
    GO: {
        useless: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeInutilizacao4",
        },
        protocolFetching: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4",
        },
        serviceStatus: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeStatusServico4",
        },
        registerFetching: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4",
        },
        eventReception: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4",
        },
        authorization: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeAutorizacao4",
        },
        authorizationResult: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4",
        },
    },
    MG: {
        useless: {
            production: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4",
            homologation: "https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4",
        },
        protocolFetching: {
            production: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeConsultaProtocolo4",
            homologation: "https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeConsultaProtocolo4",
        },
        serviceStatus: {
            production: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4",
            homologation: "https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4",
        },
        registerFetching: {
            production: "https://nfe.fazenda.mg.gov.br/nfe2/services/CadConsultaCadastro4",
            homologation: "https://hnfe.fazenda.mg.gov.br/nfe2/services/CadConsultaCadastro4",
        },
        eventReception: {
            production: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRecepcaoEvento4",
            homologation: "https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeRecepcaoEvento4",
        },
        authorization: {
            production: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4",
            homologation: "https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4",
        },
        authorizationResult: {
            production: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4",
            homologation: "https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4",
        },
    },
    MS: {
        useless: {
            production: "https://nfe.sefaz.ms.gov.br/ws/NFeInutilizacao4",
            homologation: "https://hom.nfe.sefaz.ms.gov.br/ws/NFeInutilizacao4",
        },
        protocolFetching: {
            production: "https://nfe.sefaz.ms.gov.br/ws/NFeConsultaProtocolo4",
            homologation: "https://hom.nfe.sefaz.ms.gov.br/ws/NFeConsultaProtocolo4",
        },
        serviceStatus: {
            production: "https://nfe.sefaz.ms.gov.br/ws/NFeStatusServico4",
            homologation: "https://hom.nfe.sefaz.ms.gov.br/ws/NFeStatusServico4",
        },
        registerFetching: {
            production: "https://nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4",
            homologation: "https://hom.nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4",
        },
        eventReception: {
            production: "https://nfe.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4",
            homologation: "https://hom.nfe.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4",
        },
        authorization: {
            production: "https://nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4",
            homologation: "https://hom.nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4",
        },
        authorizationResult: {
            production: "https://nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4",
            homologation: "https://hom.nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4",
        },
    },
    MT: {
        useless: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4",
        },
        protocolFetching: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4",
        },
        serviceStatus: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4",
        },
        registerFetching: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4",
        },
        eventReception: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4",
        },
        authorization: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4",
        },
        authorizationResult: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4",
        },
    },
    PE: {
        useless: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4",
        },
        protocolFetching: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4",
        },
        serviceStatus: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4",
        },
        registerFetching: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4",
        },
        eventReception: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4",
        },
        authorization: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4",
        },
        authorizationResult: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4",
        },
    },
    PR: {
        useless: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4",
        },
        protocolFetching: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4",
        },
        serviceStatus: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeStatusServico4",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeStatusServico4",
        },
        registerFetching: {
            production: "https://nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4",
        },
        eventReception: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4",
        },
        authorization: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4",
        },
        authorizationResult: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4",
        },
    },
    RS: {
        useless: {
            production: "https://nfe.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
            homologation: "https://nfe-homologacao.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
        },
        protocolFetching: {
            production: "https://nfe.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
            homologation: "https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
        },
        serviceStatus: {
            production: "https://nfe.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
            homologation: "https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
        },
        registerFetching: {
            production: "https://cad.sefazrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            homologation: "https://cad.sefazrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
        },
        eventReception: {
            production: "https://nfe.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
            homologation: "https://nfe-homologacao.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
        },
        authorization: {
            production: "https://nfe.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
            homologation: "https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
        },
        authorizationResult: {
            production: "https://nfe.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
            homologation: "https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
        },
    },
    SP: {
        useless: {
            production: "https://nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx",
        },
        protocolFetching: {
            production: "https://nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx",
        },
        serviceStatus: {
            production: "https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx",
        },
        registerFetching: {
            production: "https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx",
        },
        eventReception: {
            production: "https://nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx",
        },
        authorization: {
            production: "https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx",
        },
        authorizationResult: {
            production: "https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx",
        },
    },
    SVAN: {
        useless: {
            production: "https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx",
            homologation: "https://hom.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx",
        },
        protocolFetching: {
            production: "https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
            homologation: "https://hom.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
        },
        serviceStatus: {
            production: "https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx",
            homologation: "https://hom.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx",
        },
        eventReception: {
            production: "https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
            homologation: "https://hom.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
        },
        authorization: {
            production: "https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx",
            homologation: "https://hom.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx",
        },
        authorizationResult: {
            production: "https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
            homologation: "https://hom.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
        },
    },
    SVRS: {
        useless: {
            production: "https://nfe.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
        },
        protocolFetching: {
            production: "https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
        },
        serviceStatus: {
            production: "https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
        },
        registerFetching: {
            production: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            homologation: "https://cad-homologacao.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
        },
        eventReception: {
            production: "https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
        },
        authorization: {
            production: "https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
        },
        authorizationResult: {
            production: "https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
        },
    },
    "SVC-AN": {
        useless: {
            production: "https://www.svc.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx",
            homologation: "https://hom.svc.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx",
        },
        protocolFetching: {
            production: "https://www.svc.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
            homologation: "https://hom.svc.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
        },
        serviceStatus: {
            production: "https://www.svc.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx",
            homologation: "https://hom.svc.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx",
        },
        eventReception: {
            production: "https://www.svc.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
            homologation: "https://hom.svc.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
        },
        authorization: {
            production: "https://www.svc.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx",
            homologation: "https://hom.svc.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx",
        },
        authorizationResult: {
            production: "https://www.svc.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
            homologation: "https://hom.svc.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
        },
    },
    "SVC-RS": {
        protocolFetching: {
            production: "https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
        },
        serviceStatus: {
            production: "https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
        },
        eventReception: {
            production: "https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
        },
        authorization: {
            production: "https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
        },
        authorizationResult: {
            production: "https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
            homologation: "https://nfe-homologacao.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
        },
    },
    AN: {
        DFeDistribution: {
            production: "https://www1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx",
            homologation: "https://hom1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx",
        },
        eventReception: {
            production: "https://www.nfe.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
            homologation: "https://hom1.nfe.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
        },
    },
};

export const CTeWebServices = {
    MT: {
        qrcode: {
            production: "https://www.sefaz.mt.gov.br/cte/qrcode",
            homologation: "https://homologacao.sefaz.mt.gov.br/cte/qrcode",
        },
        serviceStatus: {
            production: "https://cte.sefaz.mt.gov.br/ctews2/services/CTeStatusServicoV4",
            homologation: "https://homologacao.sefaz.mt.gov.br/ctews2/services/CTeStatusServicoV4",
        },
        protocolFetching: {
            production: "https://cte.sefaz.mt.gov.br/ctews2/services/CTeConsultaV4",
            homologation: "https://homologacao.sefaz.mt.gov.br/ctews2/services/CTeConsultaV4",
        },
        eventReception: {
            production: "https://cte.sefaz.mt.gov.br/ctews2/services/CTeRecepcaoEventoV4",
            homologation: "https://homologacao.sefaz.mt.gov.br/ctews2/services/CTeRecepcaoEventoV4",
        },
        OSReception: {
            production: "https://cte.sefaz.mt.gov.br/ctews/services/CTeRecepcaoOSV4",
            homologation: "https://homologacao.sefaz.mt.gov.br/ctews/services/CTeRecepcaoOSV4",
        },
        SincReception: {
            production: "https://cte.sefaz.mt.gov.br/ctews2/services/CTeRecepcaoSincV4",
            homologation: "https://homologacao.sefaz.mt.gov.br/ctews2/services/CTeRecepcaoSincV4",
        },
        GTVeReception: {
            production: "https://cte.sefaz.mt.gov.br/ctews2/services/CTeRecepcaoGTVeV4",
            homologation: "https://homologacao.sefaz.mt.gov.br/ctews2/services/CTeRecepcaoGTVeV4",
        },
    },
    MS: {
        qrcode: {
            production: "http://www.dfe.ms.gov.br/cte/qrcode",
            homologation: "http://www.dfe.ms.gov.br/cte/qrcode",
        },
        serviceStatus: {
            production: "https://producao.cte.ms.gov.br/ws/CTeStatusServicoV4",
            homologation: "https://homologacao.cte.ms.gov.br/ws/CTeStatusServicoV4",
        },
        protocolFetching: {
            production: "https://producao.cte.ms.gov.br/ws/CTeConsultaV4",
            homologation: "https://homologacao.cte.ms.gov.br/ws/CTeConsultaV4",
        },
        eventReception: {
            production: "https://producao.cte.ms.gov.br/ws/CTeRecepcaoEventoV4",
            homologation: "https://homologacao.cte.ms.gov.br/ws/CTeRecepcaoEventoV4",
        },
        OSReception: {
            production: "https://producao.cte.ms.gov.br/ws/CTeRecepcaoOSV4",
            homologation: "https://homologacao.cte.ms.gov.br/ws/CTeRecepcaoOSV4",
        },
        SincReception: {
            production: "https://producao.cte.ms.gov.br/ws/CTeRecepcaoSincV4",
            homologation: "https://homologacao.cte.ms.gov.br/ws/CTeRecepcaoSincV4",
        },
        GTVeReception: {
            production: "https://producao.cte.ms.gov.br/ws/CTeRecepcaoGTVeV4",
            homologation: "https://homologacao.cte.ms.gov.br/ws/CTeRecepcaoGTVeV4",
        },
    },
    MG: {
        qrcode: {
            production: "https://cte.fazenda.mg.gov.br/portalcte/sistema/qrcode.xhtml",
            homologation: "https://cte.fazenda.mg.gov.br/portalcte/sistema/qrcode.xhtml",
        },
        serviceStatus: {
            production: "https://cte.fazenda.mg.gov.br/cte/services/CTeStatusServicoV4",
            homologation: "https://hcte.fazenda.mg.gov.br/cte/services/CTeStatusServicoV4",
        },
        protocolFetching: {
            production: "https://cte.fazenda.mg.gov.br/cte/services/CTeConsultaV4",
            homologation: "https://hcte.fazenda.mg.gov.br/cte/services/CTeConsultaV4",
        },
        eventReception: {
            production: "https://cte.fazenda.mg.gov.br/cte/services/CTeRecepcaoEventoV4",
            homologation: "https://hcte.fazenda.mg.gov.br/cte/services/CTeRecepcaoEventoV4",
        },
        OSReception: {
            production: "https://cte.fazenda.mg.gov.br/cte/services/CTeRecepcaoOSV4",
            homologation: "https://hcte.fazenda.mg.gov.br/cte/services/CTeRecepcaoOSV4",
        },
        SincReception: {
            production: "https://cte.fazenda.mg.gov.br/cte/services/CTeRecepcaoSincV4",
            homologation: "https://hcte.fazenda.mg.gov.br/cte/services/CTeRecepcaoSincV4",
        },
        GTVeReception: {
            production: "https://cte.fazenda.mg.gov.br/cte/services/CTeRecepcaoGTVeV4",
            homologation: "https://hcte.fazenda.mg.gov.br/cte/services/CTeRecepcaoGTVeV4",
        },
    },
    PR: {
        qrcode: {
            production: "http://www.fazenda.pr.gov.br/cte/qrcode",
            homologation: "http://www.fazenda.pr.gov.br/cte/qrcode",
        },
        serviceStatus: {
            production: "https://cte.fazenda.pr.gov.br/cte4/CTeStatusServicoV4",
            homologation: "https://homologacao.cte.fazenda.pr.gov.br/cte4/CTeStatusServicoV4",
        },
        protocolFetching: {
            production: "https://cte.fazenda.pr.gov.br/cte4/CTeConsultaV4",
            homologation: "https://homologacao.cte.fazenda.pr.gov.br/cte4/CTeConsultaV4",
        },
        eventReception: {
            production: "https://cte.fazenda.pr.gov.br/cte4/CTeRecepcaoEventoV4",
            homologation: "https://homologacao.cte.fazenda.pr.gov.br/cte4/CTeRecepcaoEventoV4",
        },
        OSReception: {
            production: "https://cte.fazenda.pr.gov.br/cte4/CTeRecepcaoOSV4",
            homologation: "https://homologacao.cte.fazenda.pr.gov.br/cte4/CTeRecepcaoOSV4",
        },
        SincReception: {
            production: "https://cte.fazenda.pr.gov.br/cte4/CTeRecepcaoSincV4",
            homologation: "https://homologacao.cte.fazenda.pr.gov.br/cte4/CTeRecepcaoSincV4",
        },
        GTVeReception: {
            production: "https://cte.fazenda.pr.gov.br/cte4/CTeRecepcaoGTVeV4",
            homologation: "https://homologacao.cte.fazenda.pr.gov.br/cte4/CTeRecepcaoGTVeV4",
        },
    },
    RS: {
        qrcode: {
            production: "https://dfe-portal.svrs.rs.gov.br/cte/qrCode",
            homologation: "https://dfe-portal.svrs.rs.gov.br/cte/qrCode",
        },
        serviceStatus: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeStatusServicoV4/CTeStatusServicoV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeStatusServicoV4/CTeStatusServicoV4.asmx",
        },
        protocolFetching: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeConsultaV4/CTeConsultaV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeConsultaV4/CTeConsultaV4.asmx",
        },
        eventReception: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeRecepcaoEventoV4/CTeRecepcaoEventoV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeRecepcaoEventoV4/CTeRecepcaoEventoV4.asmx",
        },
        OSReception: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeRecepcaoOSV4/CTeRecepcaoOSV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeRecepcaoOSV4/CTeRecepcaoOSV4.asmx",
        },
        SincReception: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeRecepcaoSincV4/CTeRecepcaoSincV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeRecepcaoSincV4/CTeRecepcaoSincV4.asmx",
        },
        GTVeReception: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeRecepcaoGTVeV4/CTeRecepcaoGTVeV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeRecepcaoGTVeV4/CTeRecepcaoGTVeV4.asmx",
        },
    },
    SP: {
        qrcode: {
            production: "https://nfe.fazenda.sp.gov.br/CTeConsulta/qrCode",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeConsulta/qrCode",
        },
        serviceStatus: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeStatusServicoV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeStatusServicoV4.asmx",
        },
        protocolFetching: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeConsultaV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeConsultaV4.asmx",
        },
        eventReception: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoEventoV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoEventoV4.asmx",
        },
        OSReception: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoOSV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoOSV4.asmx",
        },
        SincReception: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoSincV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoSincV4.asmx",
        },
        GTVeReception: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoGTVeV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoGTVeV4.asmx",
        },
    },
    SVRS: {
        qrcode: {
            production: "https://dfe-portal.svrs.rs.gov.br/cte/qrCode",
            homologation: "https://dfe-portal.svrs.rs.gov.br/cte/qrCode",
        },
        serviceStatus: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeStatusServicoV4/CTeStatusServicoV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeStatusServicoV4/CTeStatusServicoV4.asmx",
        },
        protocolFetching: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeConsultaV4/CTeConsultaV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeConsultaV4/CTeConsultaV4.asmx",
        },
        eventReception: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeRecepcaoEventoV4/CTeRecepcaoEventoV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeRecepcaoEventoV4/CTeRecepcaoEventoV4.asmx",
        },
        OSReception: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeRecepcaoOSV4/CTeRecepcaoOSV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeRecepcaoOSV4/CTeRecepcaoOSV4.asmx",
        },
        SincReception: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeRecepcaoSincV4/CTeRecepcaoSincV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeRecepcaoSincV4/CTeRecepcaoSincV4.asmx",
        },
        GTVeReception: {
            production: "https://cte.svrs.rs.gov.br/ws/CTeRecepcaoGTVeV4/CTeRecepcaoGTVeV4.asmx",
            homologation: "https://cte-homologacao.svrs.rs.gov.br/ws/CTeRecepcaoGTVeV4/CTeRecepcaoGTVeV4.asmx",
        },
    },
    SVSP: {
        qrcode: {
            production: "https://nfe.fazenda.sp.gov.br/CTeConsulta/qrCode",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeConsulta/qrCode",
        },
        serviceStatus: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeStatusServicoV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeStatusServicoV4.asmx",
        },
        protocolFetching: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeConsultaV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeConsultaV4.asmx",
        },
        eventReception: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoEventoV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoEventoV4.asmx",
        },
        OSReception: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoOSV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoOSV4.asmx",
        },
        SincReception: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoSincV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoSincV4.asmx",
        },
        GTVeReception: {
            production: "https://nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoGTVeV4.asmx",
            homologation: "https://homologacao.nfe.fazenda.sp.gov.br/CTeWS/WS/CTeRecepcaoGTVeV4.asmx",
        },
    },
    AN: {
        DFeDistribution: {
            production: "https://www1.cte.fazenda.gov.br/CTeDistribuicaoDFe/CTeDistribuicaoDFe.asmx",
            homologation: "https://hom1.cte.fazenda.gov.br/CTeDistribuicaoDFe/CTeDistribuicaoDFe.asmx",
        },
    },
};

export const ABRASF_WebServices: Record<string, string> = {
    "2933307": "https://ba-vitoriadaconquista-pm-nfs-backend.cloud.el.com.br:443/producao/NfseWSService",
};
