import { CTeEventReceptionRequest, CTeEventReceptionResponse } from "./layouts/cte/eventReception";
import { GTVeAuthorizationRequest, GTVeAuthorizationResponse } from "./layouts/cte/gtveAuthorization";
import {
    OtherServicesAuthorizationRequest,
    OtherServicesAuthorizationResponse,
} from "./layouts/cte/otherServicesAuthorization";
import { CTeProtocolFetchingRequest, CTeProtocolFetchingResponse } from "./layouts/cte/protocolFetching";
import { CTeServiceStatusRequest, CTeServiceStatusResponse } from "./layouts/cte/serviceStatus";
import { TransportAuthorizationRequest, TransportAuthorizationResponse } from "./layouts/cte/transportAuthorization";
import { AuthorizationRequest, AuthorizationResponse } from "./layouts/nfe/authorization";
import { AuthorizationResultRequest, AuthorizationResultResponse } from "./layouts/nfe/authorizationResult";
import { CancelRequest, CancelResponse } from "./layouts/nfe/cancelEvent";
import { DFeDistributionRequest, DFeDistributionResponse } from "./layouts/nfe/dfeDistribution";
import { EventReceptionRequest, EventReceptionResponse } from "./layouts/nfe/eventReception";
import { FixLetterRequest, FixLetterResponse } from "./layouts/nfe/fixLetterEvent";
import { NFeProtocolFetchingRequest, NFeProtocolFetchingResponse } from "./layouts/nfe/protocolFetching";
import { FetchRegisterRequest, FetchRegisterResponse } from "./layouts/nfe/registerFetching";
import { NFeServiceStatusRequest, NFeServiceStatusResponse } from "./layouts/nfe/serviceStatus";
import { UselessRequest, UselessResponse } from "./layouts/nfe/useless";

export interface NFeSefazOperations {
    requestAuthorization(payload: AuthorizationRequest): Promise<AuthorizationResponse>;

    checkAuthorization(payload: AuthorizationResultRequest): Promise<AuthorizationResultResponse>;

    fetchNFE(payload: NFeProtocolFetchingRequest): Promise<NFeProtocolFetchingResponse>;

    makeUseless(payload: UselessRequest): Promise<UselessResponse>;

    checkServiceStatus(payload: NFeServiceStatusRequest): Promise<NFeServiceStatusResponse>;

    fetchRegister(payload: FetchRegisterRequest): Promise<FetchRegisterResponse>;

    distributeDFE(payload: DFeDistributionRequest): Promise<DFeDistributionResponse>;

    registerEvent(payload: EventReceptionRequest): Promise<EventReceptionResponse>;

    cancel(payload: CancelRequest): Promise<CancelResponse>;

    sendFixLetter(payload: FixLetterRequest): Promise<FixLetterResponse>;
}

export interface CTeSefazOperations {
    requestTransportAuthorization(payload: TransportAuthorizationRequest): Promise<TransportAuthorizationResponse>;

    requestOtherServicesAuthorization(
        payload: OtherServicesAuthorizationRequest,
    ): Promise<OtherServicesAuthorizationResponse>;

    requestGTVeAuthorization(payload: GTVeAuthorizationRequest): Promise<GTVeAuthorizationResponse>;

    fetchCTE(payload: CTeProtocolFetchingRequest): Promise<CTeProtocolFetchingResponse>;

    checkServiceStatus(payload: CTeServiceStatusRequest): Promise<CTeServiceStatusResponse>;

    fetchRegister(payload: FetchRegisterRequest): Promise<FetchRegisterResponse>;

    registerEvent(payload: CTeEventReceptionRequest): Promise<CTeEventReceptionResponse>;
}
