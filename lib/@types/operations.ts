export interface SefazOperations {
    send(): Promise<void>;

    make_useless(): void;

    fix_letter(): void;

    cancel(): void;
}
