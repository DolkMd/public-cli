import { Summoner } from "../../domain/riot/Summoner.ts";
import { Writer } from "../../usecase/useacse.ts";

// https://javascript.programmer-reference.com/javascript-han1zen2/
const isHalf = (chr: number) => {
    return (chr >= 0x00 && chr < 0x81) ||
    (chr === 0xf8f0) ||
    (chr >= 0xff61 && chr < 0xffa0) ||
    (chr >= 0xf8f1 && chr < 0xf8f4)
}

const getLen = (str: string): number => {
  let result = 0;
  for(let i = 0; i < str.length; i++){
    result += isHalf(str.charCodeAt(i)) ? 1 : 2;
  }
  return result;
}

const repeat = (c: string, n: number): string => {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += c;
    } 
    return result
}
const formatStringLine = (str: string, len: number): string => {
    if (getLen(str) > len) {
        return str.slice(0, len - 3) + "..."
    }
    const tmp = `${repeat(" ", (len-getLen(str))/2)}${str}`
    return `${tmp}${repeat(" ", len - getLen(tmp))}`

}

export class StdinWriter implements Writer {
    public print(summoner: Summoner) {
        const w = "  summoner name   ".length;
        console.log(
            `
            |       puuid      |  summoner name   |       level      |
            |------------------|------------------|------------------|
            |${formatStringLine(summoner.puuid, w)}|${formatStringLine(summoner.name, w)}|${formatStringLine(summoner.summonerLevel.toString(), w)}|
            `
        );
    } 
}