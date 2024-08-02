import { CancellationRequestInfos, ResponseMessage } from "./general";

export type NFSeABRASF_CancelRequest = {
    Pedido: {
        InfPedidoCancelamento: CancellationRequestInfos;
    };
};

export type NFSeABRASF_CancelResponse = {
    RetCancelamento: {
        NfseCancelamento: {
            Confirmacao: {
                $: { Id: string };
                Pedido: {
                    InfPedidoCancelamento: { $: { Id: string } } & CancellationRequestInfos;
                };
                DataHora: string;
            };
        };
    };
    MensagemRetorno: ResponseMessage[];
};
