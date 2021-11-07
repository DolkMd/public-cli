import { Summoner } from "../domain/riot/Summoner.ts";
import { Repository, RiotDatasource, Writer } from "./useacse.ts";


export class RiotUseCase {
    private repo!: Repository;
    private riot!: RiotDatasource;
    private writer!: Writer;


    public constructor(arg: {repo: Repository,  ds: RiotDatasource, writer: Writer }) {
        this.repo = arg.repo;
        this.riot = arg.ds;
        this.writer = arg.writer;
    }

    public async printUserInfo(name: string) {
        const conf = this.repo.getConfig();
        const summoner = this.riot.getSummonerByName(name, conf.apiToken);
        this.writer.print(await summoner);
    }
}