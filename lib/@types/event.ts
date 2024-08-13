export enum Actions {
    CONFIRMATION,
    UNFAMILIARITY,
    NOT_CARRIED_OUT,
    OPERATION_KNOWLEDGE_OR_EMISSION_KNOWLEDGE,
    RECIPIENT_MANIFESTATION_CHANGE,
}

export enum EventCategory {
    REGISTERED_BY_ISSUER,
    REGISTERED_BY_RECIPIENT,
    REGISTERED_BY_ISSUING_TAX_AUTHORITY,
    REGISTERED_BY_SIDE_EFFECT,
    REGISTERED_BY_OTHER_BODIES,
}

export type Event = {
    type: number;
    name: string;
    paragraph?: string;
    description: string;
    createdBy: string;
    section?: string;
    category: EventCategory;
};
