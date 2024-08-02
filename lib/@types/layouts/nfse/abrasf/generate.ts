import { CompNFSe, RPS, ResponseMessage } from "./general";

export type NFSeABRASF_GenerateRequest = {
    Rps: RPS;
};

export type NFSeABRASF_GenerateResponse =
    | {
          ListaNfse: {
              CompNfse: CompNFSe;
              MensagemRetorno?: ResponseMessage[];
          };
      }
    | {
          MensagemRetorno: ResponseMessage[];
      };
