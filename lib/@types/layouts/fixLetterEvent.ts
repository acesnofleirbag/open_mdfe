import { EventReceptionResponse } from "./eventReception";

export enum FixLetterText {
    WITH_PONTUATION = "A Carta de Correção é disciplinada pelo § 1º-A do art. 7º do Convênio S/N, de 15 de dezembro de 1970 e pode ser utilizada para regularização de erro ocorrido na emissão de documento fiscal, desde que o erro não esteja relacionado com: I - as variáveis que determinam o valor do imposto tais como: base de cálculo, alíquota, diferença de preço, quantidade, valor da operação ou da prestação; II - a correção de dados cadastrais que implique mudança do remetente ou do destinatário; III - a data de emissão ou de saída.",
    WITHOUT_PONTUATION = "A Carta de Correcao e disciplinada pelo paragrafo 1o-A do art. 7o do Convenio S/N, de 15 de dezembro de 1970 e pode ser utilizada para regularizacao de erro ocorrido na emissao de documento fiscal, desde que o erro nao esteja relacionado com: I - as variaveis que determinam o valor do imposto tais como: base de calculo, aliquota, diferenca de preco, quantidade, valor da operacao ou da prestacao; II - a correcao de dados cadastrais que implique mudanca do remetente ou do destinatario; III - a data de emissao ou de saida.",
}

// web service: NFeRecepcaoEvento

// schema: TEnvCCe
export type FixLetterRequest = {
    versao: "1.00";
    /** Descrição do Evento - "Carta de Correção" */
    descEvento: "Carta de Correção" | "Carta de Correcao";
    /** Correção a ser considerada */
    xCorrecao: string;
    /** Texto Fixo com as condições de uso da Carta de Correção */
    xCondUso: FixLetterText;
};

// schema: TRetEnvCCe === TRetEnvEvento
export type FixLetterResponse = EventReceptionResponse;
