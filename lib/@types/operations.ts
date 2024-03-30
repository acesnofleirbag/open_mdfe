import { AuthorizationRequest, AuthorizationResponse } from "./layouts/authorization";
import { AuthorizationResultRequest, AuthorizationResultResponse } from "./layouts/authorizationResult";
import { CancelRequest, CancelResponse } from "./layouts/cancelEvent";
import { DFeDistributionRequest, DFeDistributionResponse } from "./layouts/dfeDistribution";
import { EventReceptionRequest, EventReceptionResponse } from "./layouts/eventReception";
import { FixLetterRequest, FixLetterResponse } from "./layouts/fixLetterEvent";
import { ProtocolFetchingRequest, ProtocolFetchingResponse } from "./layouts/protocolFetching";
import { FetchRegisterRequest, FetchRegisterResponse } from "./layouts/registerFetching";
import { ServiceStatusRequest, ServiceStatusResponse } from "./layouts/serviceStatus";
import { UselessRequest, UselessResponse } from "./layouts/useless";

export interface SefazOperations {
    requestAuthorization(payload: AuthorizationRequest): Promise<AuthorizationResponse>;

    checkBatchAuthorization(payload: AuthorizationResultRequest): Promise<AuthorizationResultResponse>;

    fetchNFE(_payload: ProtocolFetchingRequest): Promise<ProtocolFetchingResponse>;

    makeUseless(payload: UselessRequest): Promise<UselessResponse>;

    checkServiceStatus(payload: ServiceStatusRequest): Promise<ServiceStatusResponse>;

    fetchRegister(payload: FetchRegisterRequest): Promise<FetchRegisterResponse>;

    distributeDFE(payload: DFeDistributionRequest): Promise<DFeDistributionResponse>;

    registerEvent(payload: EventReceptionRequest): Promise<EventReceptionResponse>;

    cancel(payload: CancelRequest): Promise<CancelResponse>;

    sendFixLetter(payload: FixLetterRequest): Promise<FixLetterResponse>;
}
