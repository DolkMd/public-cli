import { RiotUseCase } from "../../usecase/riot_usecase.ts";
import { StdinWriter } from "../console/Writer.ts";
import { RiotAPI, Region } from "../datasource/riot/RiotDatasource.ts";
import { Local } from "../repository/local/Local.ts";

const repo = new Local();
const ds = new RiotAPI(Region.JP);
const writer = new StdinWriter();
const usecase = new RiotUseCase({ repo, ds, writer});

// await usecase.printUserInfo("");