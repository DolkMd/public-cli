import { Summoner } from "../../../domain/riot/Summoner.ts";
import { RiotDatasource } from "../../../usecase/useacse.ts";
import ky from 'https://deno.land/x/ky/index.js';

export enum Region {
    JP = "jp"
}

export class RiotAPI implements RiotDatasource {
    private region!: Region;
    private baseURL!: string;
    public constructor(region: Region) {   
        this.region = region;
        this.baseURL = `https://${this.region}1.api.riotgames.com`;
     }

    public async getSummonerByName(name: string, apiKey: string): Promise<Summoner> {
        const url = `${this.baseURL}/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`;
        const response = await (ky as any).get(url).json();
        return {name: response.name, summonerLevel: response.summonerLevel, puuid: response.puuid } as Summoner;
    }
}   