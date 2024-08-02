import { CancellationRequestInfos, CompNFSe, RPS, ResponseMessage } from "./general";

export type NFSeABRASF_ReplaceRequest = {
    SubstituicaoNfse: {
        $: { Id: string };
        Pedido: {
            InfPedidoCancelamento: CancellationRequestInfos;
        };
        Rps: RPS;
    };
};

export type NFSeABRASF_ReplaceResponse =
    | {
          RetSubstituicao: {
              NfseSubstituida: CompNFSe;
              NfseSubstituidora: {
                  MensagemRetorno: ResponseMessage[];
              };
          };
      }
    | {
          MensagemRetorno: ResponseMessage[];
      };
