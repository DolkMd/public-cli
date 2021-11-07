import { Summoner } from "../domain/riot/Summoner.ts";

export interface Writer {
    print(summoner: Summoner): void;
}

export interface Command {
    run(arg: string[]): void;
}

export type Config = {
    apiToken: string;
}

export interface Repository {
    getConfig(): Config;
}

export interface RiotDatasource {
    getSummonerByName(name: string, apiKey: string): Promise<Summoner>;
}

