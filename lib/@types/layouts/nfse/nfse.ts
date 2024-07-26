import { EnvironmentIdentifier, UFIssuer } from "../general";

export enum GenerateEnvironmentType {}

export enum IssueType {}

export enum IssuanceProcess {}

export enum MessageStatusCode {}

export enum IssuerType {}

export enum ServiceUsageLocal {}

export enum ProvisionMode {}

export enum Bond {}

export enum ProviderForeignTradeSupportMechanism {}

export enum TakerForeignTradeSupportMechanism {}

export enum OperationLinkedWithGoodsTemporaryMovement {}

export enum ShareNFSeInfosWithForeignTradeSecretary {}

export enum ServiceCategory {}

export enum ObjectType {}

export enum VehicleCategory {}

export enum RaceType {
    SIMPLE = "1",
    PAIR = "2",
}

export enum DeductionReductionIdentification {}

type Address = {
    xLgr: string;
    nro: string;
    xCpl: string;
    xBairro: string;
    cMun: string;
    UF: UFIssuer;
    CEP: string;
};

// schema: TCEmitente
type __Issuer = {
    IM?: string;
    xNome: string;
    xFant?: string;
    enderNac: Address;
    fone?: string;
    email?: string;
};

type Issuer__Type1 = {
    CNPJ: string;
} & __Issuer;

type Issuer__Type2 = {
    CPF: string;
} & __Issuer;

type Issuer = Issuer__Type1 | Issuer__Type2;

// schema: TCValoresNFSe
type Values = {
    vCalcDR?: string;
    tpBM?: string;
    vCalcBM?: string;
    vBC?: string;
    pAliqAplic?: string;
    vISSQN?: string;
    vTotalRet?: string;
    vLiq: string;
    xOutInf?: string;
};

type __ServiceProvider = {
    /** Número do Cadastro de Atividade Econômica da Pessoa Física (CAEPF) do prestador do serviço */
    CAEPF: string;
    /** Número da inscrição municipal */
    IM: string;
    /** Nome/Nome Empresarial do prestador */
    xNome: string;
    /** Dados de endereço do prestador */
    end: Address;
    /** Número do telefone do prestador: Preencher com o Código DDD + número do telefone. Nas operações com exterior é
     * permitido informar o código do país + código da localidade + número do telefone)
     */
    fone: string;
    /** E-mail */
    email: string;
    /** Grupo de informações relativas aos regimes de tributação do prestador de serviços */
    regTrib: string;
};

type ServiceProvider__Type1 = {
    /** Número do CNPJ */
    CNPJ: string;
} & __ServiceProvider;

type ServiceProvider__Type2 = {
    /** Número do CPF */
    CPF: string;
} & __ServiceProvider;

type ServiceProvider__Type3 = {
    /** Número de Identificação Fiscal fornecido por órgão de administração tributária no exterior */
    NIF: string;
} & __ServiceProvider;

type ServiceProvider__Type4 = {
    /** Motivo para não informação do NIF:
     * 1 | Dispensado do NIF
     * 2 | Não exigência do NIF
     */
    cNaoNIF: string;
} & __ServiceProvider;

type ServiceProvider =
    | ServiceProvider__Type1
    | ServiceProvider__Type2
    | ServiceProvider__Type3
    | ServiceProvider__Type4;

type __PeopleInfos = {
    /** Número do Cadastro de Atividade Econômica da Pessoa Física (CAEPF) */
    CAEPF: string;
    /** Número da inscrição municipal */
    IM: string;
    /** Nome/Nome Empresarial */
    xNome: string;
    /** Dados de endereço */
    end: Address;
    /** Número do telefone do prestador: Preencher com o Código DDD + número do telefone. Nas operações com exterior é
     * permitido informar o código do país + código da localidade + número do telefone)
     */
    fone: string;
    /** E-mail */
    email: string;
};

type PeopleInfos__Type1 = {
    /** Número do CNPJ */
    CNPJ: string;
} & __PeopleInfos;

type PeopleInfos__Type2 = {
    /** Número do CPF */
    CPF: string;
} & __PeopleInfos;

type PeopleInfos__Type3 = {
    /** Número de Identificação Fiscal fornecido por órgão de administração tributária no exterior */
    NIF: string;
} & __PeopleInfos;

type PeopleInfos__Type4 = {
    /** Motivo para não informação do NIF:
     * 1 | Dispensado do NIF
     * 2 | Não exigência do NIF
     */
    cNaoNIF: string;
} & __PeopleInfos;

type PeopleInfos = PeopleInfos__Type1 | PeopleInfos__Type2 | PeopleInfos__Type3 | PeopleInfos__Type4;

type Construction__Type1 = {
    /** Número de identificação da obra. Cadastro Nacional de Obras (CNO) ou Cadastro Específico do INSS (CEI) */
    cObra: string;
};

type Construction__Type2 = {
    /** Inscrição imobiliária fiscal (código fornecido pela Prefeitura Municipal para a identificação da obra ou para
     * fins de recolhimento do IPTU)
     */
    inscImobFisc: string;
};

type __SimpleAddress = {
    /** Tipo e nome do logradouro da localização do imóvel */
    xLgr: string;
    /** Número do imóvel */
    nro: string;
    /** Complemento do endereço */
    xCpl: string;
    /** Bairro */
    xBairro: string;
};

type SimpleAddress__Type1 = {
    /** Número do CEP */
    CEP: string;
} & __SimpleAddress;

type SimpleAddress__Type2 = {
    /** Grupo de informações específicas de endereço no exterior */
    endExt: {
        /** Código alfanumérico do Endereçamento Postal no exterior do prestador do serviço */
        cEndPost: string;
        /** Nome da cidade no exterior do prestador do serviço */
        xCidade: string;
        /** Estado, província ou região da cidade no exterior do prestador do serviço */
        xEstProvReg: string;
    };
} & __SimpleAddress;

type SimpleAddress = SimpleAddress__Type1 | SimpleAddress__Type2;

type Construction__Type3 = {
    /** Grupo de informações do endereço da obra do serviço prestado */
    end: SimpleAddress;
};

type Construction = Construction__Type1 | Construction__Type2 | Construction__Type3;

type __EventActivity = {
    /** Descrição do evento Artístico, Cultural, Esportivo, etc */
    desc: string;
    /** Data de início da atividade de evento. Ano, Mês e Dia (AAAA-MM-DD) */
    dtIni: string;
    /** Data de fim da atividade de evento. Ano, Mês e Dia (AAAA-MM-DD) */
    dtFim: string;
};

type EventActivity__Type1 = __EventActivity & {
    /** Identificação da Atividade de Evento (código identificador de evento determinado pela Administração Tributária
     * Municipal)
     */
    id: string;
};

type EventActivity__Type2 = __EventActivity & {
    /** Grupo de informações relativas ao endereço da atividade, evento ou local do serviço prestado */
    end: SimpleAddress;
};

type EventActivity = EventActivity__Type1 | EventActivity__Type2;

type __DeductionReductionDocument = {
    /** Identificação da Dedução/Redução:
     * 1 | Alimentação e bebidas/frigobar
     * 2 | Materiais
     * 3 | Produção externa
     * 4 | Reembolso de despesas
     * 5 | Repasse consorciado
     * 6 | Repasse plano de saúde
     * 7 | Serviços
     * 8 | Subempreitada de mão de obra
     * 99 | Outras deduções
     */
    tpDedRed: DeductionReductionIdentification;
    /** Descrição da Dedução/Redução quando a opção é "99 – Outras Deduções" */
    xDescOutDed: string;
    /** Data da emissão do documento dedutível. Ano, mês e dia (AAAA-MM-DD) */
    dtEmiDoc: string;
    /** Valor monetário total dedutível/redutível no documento informado (R$). Este é o valor total no documento
     * informado que é passível de dedução/redução
     */
    vDedutivelRedutivel: string;
    /** Valor monetário utilizado para dedução/redução do valor do serviço da NFS-e que está sendo emitida (R$). Deve
     * ser menor ou igual ao valor deduzível/redutível (vDedutivelRedutivel)
     */
    vDeducaoReducao: string;
    /** Grupo de informações do Fornecedor em Deduções de Serviços */
    fornec?: PeopleInfos;
};

type DeductionReductionDocument__Type1 = {
    /** Chave de Acesso da NFS-e (Padrão Nacional) */
    chNFSe: string;
} & __DeductionReductionDocument;

type DeductionReductionDocument__Type2 = {
    /** Chave de Acesso da NF-e */
    chNFe: string;
} & __DeductionReductionDocument;

type DeductionReductionDocument__Type3 = {
    /** Grupo de informações de Outras NFS-e (Padrão anterior de NFS-e) */
    NFSeMun: {
        /** Código Município emissor da nota eletrônica municipal (Tabela do IBGE) */
        cMunNFSeMun: string;
        /** Número da nota eletrônica municipal */
        nNFSeMun: string;
        /** Código de Verificação da nota eletrônica municipal */
        cVerifNFSeMun: string;
    };
} & __DeductionReductionDocument;

type DeductionReductionDocument__Type4 = {
    /** Grupo de informações de NF ou NFS (Modelo não eletrônico) */
    NFNFS: {
        /** Número da Nota Fiscal NF ou NFS */
        nNFS: string;
        /** Modelo da Nota Fiscal NF ou NFS */
        modNFS: string;
        /** Série Nota Fiscal NF ou NFS */
        serieNFS: string;
    };
} & __DeductionReductionDocument;

type DeductionReductionDocument__Type5 = {
    /** Número de documento fiscal */
    nDocFisc: string;
} & __DeductionReductionDocument;

type DeductionReductionDocument__Type6 = {
    /** Número de documento não fiscal */
    nDoc: string;
} & __DeductionReductionDocument;

type DeductionReductionDocument =
    | DeductionReductionDocument__Type1
    | DeductionReductionDocument__Type2
    | DeductionReductionDocument__Type3
    | DeductionReductionDocument__Type4
    | DeductionReductionDocument__Type5
    | DeductionReductionDocument__Type6;

export type SefazNFSe = {
    $: { Id: string };
    /** Descrição do código do IBGE do município emissor da NFS-e */
    xLocEmi: string;
    /** Descrição do local da prestação do serviço */
    xLocPrestacao: string;
    /**  Número sequencial por tipo de emitente da NFS-e. A Sefin Nacional NFS-e irá gerar o número da NFS-e de forma
     * sequencial por emitente. Por se tratar de um ambiente altamente transacional, a Sefin Nacional NFS-e não irá
     * reutilizar números inutilizados durante a geração da NFS-e
     */
    nNFSe: string;
    /** O código de município utilizado pelo Sistema Nacional NFS-e é o código definido para cada município pertencente
     * ao ""Anexo V – Tabela de Código de Municípios do IBGE"", que consta ao final do Manual de Orientação ao
     * Contribuinte do ISSQN para a Sefin Nacional NFS-e. O município de incidência do ISSQN é determinado
     * automaticamente pelo sistema, conforme regras do aspecto espacial da lei complementar federal (LC 116/03) que são
     * válidas para todos os municípios. <http://www.planalto.gov.br/ccivil_03/Leis/LCP/Lcp116.htm>
     */
    cLocIncid?: string;
    /** A descrição do código de município utilizado pelo Sistema Nacional NFS-e é o nome de cada município pertencente
     * ao "Anexo V – Tabela de Código de Municípios do IBGE", que consta ao final do Manual de Orientação ao Contribuinte
     * do ISSQN para a Sefin Nacional NFS-e */
    xLocIncid?: string;
    /** Descrição do código de tributação nacional do ISSQN */
    xTribNac: string;
    /** Descrição do código de tributação municipal do ISSQN */
    xTribMun?: string;
    /** Descrição do código da NBS */
    xNBS?: string;
    /** Versão do aplicativo que gerou a NFS-e */
    verAplic: string;
    /** Ambiente gerador da NFS-e */
    ambGer: GenerateEnvironmentType;
    /** Processo de Emissão da DPS:
     * 1 | Emissão com aplicativo do contribuinte (via Web Service)
     * 2 | Emissão com aplicativo disponibilizado pelo fisco (Web)
     * 3 | Emissão com aplicativo disponibilizado pelo fisco (App)
     */
    tpEmis: IssueType;
    /** Processo de Emissão da DPS:
     * 1 | Emissão com aplicativo do contribuinte (via Web Service)
     * 2 | Emissão com aplicativo disponibilizado pelo fisco (Web)
     * 3 | Emissão com aplicativo disponibilizado pelo fisco (App)
     */
    procEmi: IssuanceProcess;
    /** Código do Status da mensagem */
    cStat: MessageStatusCode;
    /** Data/Hora da validação da DPS e geração da NFS-e. Data e hora no formato UTC (Universal Coordinated
     * Time): AAAA-MM-DDThh:mm:ssTZD
     */
    dhProc: string;
    /** Número sequencial do documento gerado por ambiente gerador de DFSe do múnicípio */
    nDFSe: string;
    /** Grupo de informações da DPS relativas ao emitente da NFS-e */
    emit: Issuer;
    /** Grupo de valores referentes ao Serviço Prestado */
    valores: Values;
    /** Grupo de informações da DPS relativas ao serviço prestado */
    DPS: {
        infDPS: {
            $: {
                /**  Informar o identificador precedido do literal ‘DPS’. A regra de formação do identificador de 45
                 * posições da DPS é: "DPS" + Cód.Mun (7) + Tipo de Inscrição Federal (1) + Inscrição Federal (14 - CPF
                 * completar com 000 à esquerda) + Série DPS (5)+ Núm. DPS (15)
                 */
                Id: string;
            };
            /** Identificação do Ambiente:
             * 1 | Produção
             * 2 | Homologação
             */
            tpAmb: EnvironmentIdentifier;
            /** Data e hora da emissão do DPS. Data e hora no formato UTC (Universal Coordinated Time):
             * AAAA-MM-DDThh:mm:ssTZD
             */
            dhEmi: string;
            /** Versão do aplicativo que gerou o DPS */
            verAplic: string;
            /** Número do equipamento emissor do DPS ou série do DPS */
            serie: string;
            /** Número do DPS */
            nDPS: string;
            /** Data em que se iniciou a prestação do serviço: Dia, mês e ano (AAAAMMDD) */
            dCompet: string;
            /** Emitente da DPS:
             * 1 | Prestador;
             * 2 | Tomador;
             * 3 | Intermediário
             */
            tpEmit: IssuerType;
            /**  O código de município utilizado pelo Sistema Nacional NFS-e é o código definido para cada município
             * pertencente ao ""Anexo V – Tabela de Código de Municípios do IBGE"", que consta ao final do Manual de
             * Orientação ao Contribuinte do ISSQN para a Sefin Nacional NFS-e. O município emissor da NFS-e é aquele
             * município em que o emitente da DPS está cadastrado e autorizado a "emitir uma NFS-e", ou seja, emitir uma
             * DPS para que o sistema nacional valide as informações nela prestadas e gere a NFS-e correspondente para o
             * emitente. Para que o sistema nacional emita a NFS-e o município emissor deve ser conveniado e estar ativo
             * no sistema nacional. Além disso o convênio do município deve permitir que os contribuintes do município
             * utilize os emissores públicos do Sistema Nacional NFS-e
             */
            cLocEmi: string;
            /** Dados da NFS-e a ser substituída */
            subst?: {
                /** Chave de acesso da NFS-e a ser substituída */
                chSubstda: string;
                /**  Código de justificativa para substituição de NFS-e:
                 * 01 | Desenquadramento de NFS-e do Simples Nacional
                 * 02 | Enquadramento de NFS-e no Simples Nacional
                 * 03 | Inclusão Retroativa de Imunidade/Isenção para NFS-e
                 * 04 | Exclusão Retroativa de Imunidade/Isenção para NFS-e
                 * 05 | Rejeição de NFS-e pelo tomador ou pelo intermediário se responsável pelo recolhimento do tributo
                 * 99 | Outros
                 */
                cMotivo: string;
                /** Descrição do motivo da substituição da NFS-e */
                xMotivo?: string;
            };
            /** Grupo de informações do DPS relativas ao Prestador de Serviços */
            prest: ServiceProvider;
            /** Grupo de informações do DPS relativas ao Tomador de Serviços */
            toma: PeopleInfos;
            /** Grupo de informações do DPS relativas ao Intermediário de Serviços */
            interm: PeopleInfos;
            /** Grupo de informações do DPS relativas ao Serviço Prestado */
            serv: {
                /**  Grupo de informações relativas ao local da prestação do serviço */
                locPrest: {
                    /** Código do município onde o serviço foi prestado (tabela do IBGE) */
                    cLocPrestacao: string;
                    /** Código do país onde o serviço foi prestado (Tabela de Países ISO) */
                    cPaisPrestacao: string;
                    /**  Opção para que o emitente informe onde ocorreu o consumo do serviço prestado:
                     * 0 | Consumo do serviço prestado ocorrido no município do local da prestação
                     * 1 | Consumo do serviço prestado ocorrido ocorrido no exterior
                     */
                    opConsumServ: ServiceUsageLocal;
                };
                /** Grupo de informações relativas ao código do serviço prestado */
                cServ: {
                    /** Código de tributação nacional do ISSQN: Regra de formação - 6 dígitos numéricos sendo: 2 para
                     * Item (LC 116/2003), 2 para Subitem (LC 116/2003) e 2 para Desdobro Nacional
                     */
                    cTribNac: string;
                    /** Código de tributação municipal do ISSQN */
                    cTribMun?: string;
                    /** Descrição completa do serviço prestado */
                    xDescServ: string;
                    /** Código NBS (Nomenclatura Brasileira de Serviços, Intangíveis e outras Operações que produzam
                     * Variações no Patrimônio) correspondente ao serviço prestado
                     */
                    cNBS?: string;
                    /** Código interno do contribuinte */
                    cIntContrib?: string;
                };
                /** Grupo de informações relativas à exportação/importação de serviço prestado */
                comExt?: {
                    /** Modo de Prestação:
                     * 0 | Desconhecido (tipo não informado na nota de origem)
                     * 1 | Transfronteiriço
                     * 2 | Consumo no Brasil
                     * 3 | Presença Comercial no Exterior
                     * 4 | Movimento Temporário de Pessoas Físicas
                     */
                    mdPrestacao: ProvisionMode;
                    /** Vínculo entre as partes no negócio:
                     * 0 | Sem vínculo com o tomador/ Prestador
                     * 1 | Controlada
                     * 2 | Controladora
                     * 3 | Coligada
                     * 4 | Matriz
                     * 5 | Filial ou sucursal
                     * 6 | Outro vínculo
                     */
                    vincPrest: Bond;
                    /** Identifica a moeda da transação comercial */
                    tpMoeda: string;
                    /** Valor do serviço prestado expresso em moeda estrangeira especificada em tpmoeda */
                    vServMoeda: string;
                    /**  Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo prestador do serviço:
                     * 00 | Desconhecido (tipo não informado na nota de origem)
                     * 01 | Nenhum
                     * 02 | ACC - Adiantamento sobre Contrato de Câmbio – Redução a Zero do IR e do IOF
                     * 03 | ACE – Adiantamento sobre Cambiais Entregues - Redução a Zero do IR e do IOF
                     * 04 | BNDES-Exim Pós-Embarque – Serviços
                     * 05 | BNDES-Exim Pré-Embarque - Serviços
                     * 06 | FGE - Fundo de Garantia à Exportação
                     * 07 | PROEX - EQUALIZAÇÃO
                     * 08 | PROEX - Financiamento
                     */
                    mecAFComexP: ProviderForeignTradeSupportMechanism;
                    /**  Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo tomador do serviço:
                     * 00 | Desconhecido (tipo não informado na nota de origem)
                     * 01 | Nenhum
                     * 02 | Adm. Pública e Repr. Internacional
                     * 03 | Alugueis e Arrend. Mercantil de maquinas, equip., embarc. e aeronaves
                     * 04 | Arrendamento Mercantil de aeronave para empresa de transporte aéreo público
                     * 05 | Comissão a agentes externos na exportação
                     * 06 | Despesas de armazenagem, mov. e transporte de carga no exterior
                     * 07 | Eventos FIFA (subsidiária)
                     * 08 | Eventos FIFA
                     * 09 | Fretes, arrendamentos de embarcações ou aeronaves e outros
                     * 10 | Material Aeronáutico
                     * 11 | Promoção de Bens no Exterior
                     * 12 | Promoção de Dest. Turísticos Brasileiros
                     * 13 | Promoção do Brasil no Exterior
                     * 14 | Promoção Serviços no Exterior
                     * 15 | RECINE
                     * 16 | RECOPA
                     * 17 | Registro e Manutenção de marcas, patentes e cultivares
                     * 18 | REICOMP
                     * 19 | REIDI
                     * 20 | REPENEC
                     * 21 | REPES
                     * 22 | RETAERO
                     * 23 | RETID
                     * 24 | Royalties, Assistência Técnica, Científica e Assemelhados
                     * 25 | Serviços de avaliação da conformidade vinculados aos Acordos da OMC
                     * 26 | ZPE
                     */
                    mecAFComexT: TakerForeignTradeSupportMechanism;
                    /**  Operação está vinculada à Movimentação Temporária de Bens:
                     * 0 | Desconhecido (tipo não informado na nota de origem)
                     * 1 | Não
                     * 2 | Vinculada - Declaração de Importação
                     * 3 | Vinculada - Declaração de Exportação
                     */
                    movTempBens: OperationLinkedWithGoodsTemporaryMovement;
                    /** Número da Declaração de Importação (DI/DSI/DA/DRI-E) averbado */
                    nDI?: string;
                    /** Número do Registro de Exportação (RE) averbado */
                    nRE?: string;
                    /** Compartilhar as informações da NFS-e gerada a partir desta DPS com a Secretaria de Comércio
                     * Exterior:
                     * 0 | Não enviar para o MDIC
                     * 1 | Enviar para o MDIC
                     */
                    mdic: ShareNFSeInfosWithForeignTradeSecretary;
                };
                /** Grupo de informações relativas a atividades de Locação, sublocação, arrendamento, direito de
                 * passagem ou permissão de uso, compartilhado ou não, de ferrovia, rodovia, postes, cabos, dutos e
                 * condutos de qualquer natureza
                 */
                lsadppu?: {
                    /** Categorias do serviço:
                     * 1 | Locação
                     * 2 | Sublocação
                     * 3 | Arrendamento
                     * 4 | Direito de passagem
                     * 5 | Permissão de uso
                     */
                    categ: ServiceCategory;
                    /** Tipo de objetos da locação, sublocação, arrendamento, direito de passagem ou permissão de uso:
                     * 1 | Ferrovia;
                     * 2 | Rodovia;
                     * 3 | Postes;
                     * 4 | Cabos;
                     * 5 | Dutos;
                     * 6 | Condutos de qualquer natureza;
                     */
                    objeto: ObjectType;
                    /** Extensão total da ferrovia, rodovia, cabos, dutos ou condutos */
                    extensao: string;
                    /** Número total de postes */
                    nPostes: string;
                };
                /** Grupo de informações do DPS relativas à serviço de obra */
                obra?: Construction;
                /** Grupo de informações do DPS relativas à Evento */
                atvEvento?: EventActivity;
                /** Grupo de informações relativas a pedágio */
                explRod?: {
                    /** Categorias de veículos para cobrança:
                     * 00 | Categoria de Veículos (tipo não informado na nota de origem)
                     * 01 | Automóvel, caminhonete e furgão
                     * 02 | Caminhão leve, ônibus, caminhão trator e furgão
                     * 03 | Automóvel e caminhonete com semireboque
                     * 04 | Caminhão, caminhão-trator, caminhão-trator com semi-reboque e ônibus
                     * 05 | Automóvel e caminhonete com reboque
                     * 06 | Caminhão com reboque e caminhãotrator com semi-reboque
                     * 07 | Caminhão com reboque e caminhãotrator com semi-reboque
                     * 08 | Caminhão com reboque e caminhãotrator com semi-reboque
                     * 09 | Motocicletas, motonetas e bicicletas motorizadas
                     * 10 | Veículo especial
                     * 11 | Veículo Isento
                     */
                    categVeic: VehicleCategory;
                    /** Número de eixos para fins de cobrança */
                    nEixos: string;
                    /** Tipo de rodagem */
                    rodagem: RaceType;
                    /** Orientação de passagem do veículo: ângulo em graus a partir do norte geográfico em sentido
                     * horário, número inteiro de 0 a 359, onde 0º seria o norte, 90º o leste, 180º o sul, 270º o oeste.
                     * Precisão mínima de 10
                     */
                    sentido: string;
                    /** Placa do veículo */
                    placa: string;
                    /** Código de acesso gerado automaticamente pelo sistema emissor da concessionária */
                    codAcessoPed: string;
                    /** Código de contrato gerado automaticamente pelo sistema nacional no cadastro da concessionária */
                    codContrato: string;
                };
                /** Grupo de informações complementares disponível para todos os serviços prestados */
                infoCompl?: {
                    /** Identificador de Documento de Responsabilidade Técnica: ART, RRT, DRT, Outros */
                    idDocTec?: string;
                    /** Chave da nota, número identificador da nota, número do contrato ou outro identificador de
                     * documento emitido pelo prestador de serviços, que subsidia a emissão dessa nota pelo tomador do
                     * serviço ou intermediário (preenchimento obrigatório caso a nota esteja sendo emitida pelo Tomador
                     * ou intermediário do serviço)
                     */
                    docRef?: string;
                    /** Informações complementares */
                    xInfComp?: string;
                };
            };
            /** Grupo de informações relativas à valores do serviço prestado */
            valores: {
                /** Grupo de informações relativas aos valores do serviço prestado */
                vServPrest: {
                    /** Valor monetário recebido pelo intermediário do serviço (R$) */
                    vReceb?: string;
                    /** Valor dos serviços em R$ */
                    vServ: string;
                };
                /** Grupo de informações relativas aos descontos condicionados e incondicionados */
                vDescCondIncond?: {
                    /** Valor monetário do desconto incondicionado (R$) */
                    vDescIncond?: string;
                    /** Valor monetário do desconto condicionado (R$) */
                    vDescCond?: string;
                };
                /** Grupo de informações relativas ao valores para dedução/redução do valor da base de cálculo (valor do
                 * serviço)
                 */
                vDedRed?: {
                    /** Valor percentual padrão para dedução/redução do valor do serviço */
                    pDR: string;
                    /** Valor monetário padrão para dedução/redução do valor do serviço */
                    vDR: string;
                    /** Grupo de informações de documento utilizado para Dedução/Redução do valor do serviço */
                    documentos: {
                        /**  Grupo de informações de documento utilizado para Dedução/Redução do valor do serviço */
                        docDedRed: DeductionReductionDocument[];
                    };
                };
                /** Grupo de informações relacionados aos tributos relacionados ao serviço prestado */
                trib: {
                    /** Grupo de informações relacionados ao Imposto Sobre Serviços de Qualquer Natureza - ISSQN */
                    tribMun: {};
                    /** Grupo de informações de outros tributos relacionados ao serviço prestado */
                    tribNac: {};
                    /** Grupo de informações para totais aproximados dos tributos relacionados ao serviço prestado */
                    totTrib: {};
                };
            };
        };
    };
};
