import { Config, Repository } from "../../../usecase/useacse.ts";

const HOME = Deno.env.get("HOME");

export class Local implements Repository {
    public constructor() {
        try {
            Deno.mkdirSync(HOME+"/.public_api");
            Deno.writeTextFileSync(HOME+"/.public_api/config.json", JSON.stringify({apiToken: ""} as Config));
            console.log("Generate: " + HOME+"/.public_api/config.json");
            console.log("Plase Riot Game API Key.");
            Deno.exit(2);
        } catch {        }
    }
    getConfig(): Config {
        const str = Deno.readTextFileSync(HOME+"/.public_api/config.json");
        return JSON.parse(str) as Config;
    }
}