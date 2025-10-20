declare module "prompt-syncc" {
    interface Prompt {
        (ask: string): string;
        hide(ask: string): string;
    }

    function promptSyncc(): Prompt;
    export = promptSyncc;
}
