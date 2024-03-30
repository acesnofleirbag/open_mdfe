// NOTE: Source
//
// - production: <https://www.nfe.fazenda.gov.br/portal/webServices.aspx?tipoConteudo=OUC/YVNWZfo=>
// - homologation: <http://hom.nfe.fazenda.gov.br/Portal/webServices.aspx?tipoConteudo=OUC/YVNWZfo=>

export const WebServices = {
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
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
        },
        protocolFetching: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4?wsdl",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4?wsdl",
        },
        serviceStatus: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
        },
        registerFetching: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
        },
        eventReception: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
        },
        authorization: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
        },
        authorizationResult: {
            production: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
            homologation: "https://homolog.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
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
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4?wsdl",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4?wsdl",
        },
        protocolFetching: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4?wsdl",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4?wsdl",
        },
        serviceStatus: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl",
        },
        registerFetching: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl",
        },
        eventReception: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4?wsdl",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4?wsdl",
        },
        authorization: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4?wsdl",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4?wsdl",
        },
        authorizationResult: {
            production: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4?wsdl",
            homologation: "https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4?wsdl",
        },
    },
    PE: {
        useless: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4?wsdl",
        },
        protocolFetching: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4?wsdl",
        },
        serviceStatus: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4?wsdl",
        },
        registerFetching: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4?wsdl",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4?wsdl",
        },
        eventReception: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4?wsdl",
        },
        authorization: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4?wsdl",
        },
        authorizationResult: {
            production: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4",
            homologation: "https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4?wsdl",
        },
    },
    PR: {
        useless: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4?wsdl",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4?wsdl",
        },
        protocolFetching: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4?wsdl",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4?wsdl",
        },
        serviceStatus: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeStatusServico4?wsdl",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeStatusServico4?wsdl",
        },
        registerFetching: {
            production: "https://nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4?wsdl",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4?wsdl",
        },
        eventReception: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4?wsdl",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4?wsdl",
        },
        authorization: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4?wsdl",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4?wsdl",
        },
        authorizationResult: {
            production: "https://nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4?wsdl",
            homologation: "https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4?wsdl",
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
