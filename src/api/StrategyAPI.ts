//import type { GamesType } from "../types";
export function StrategyApi(){
    return(fetch('https://www.freetogame.com/api/games?category=Strategy')
    .then((res)=> {return(res.json())})
    .then((data)=> {return(data)})
)}