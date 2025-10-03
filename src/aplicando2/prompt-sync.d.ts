declare module "prompt-sync" {
    interface Prompt {
        (ask: string): string;
        hide(ask: string): string;
    }

    function promptSync(): Prompt;
    export = promptSync;
}
