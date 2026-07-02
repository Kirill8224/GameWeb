import { useEffect, useState } from "react";
import type { GamesType } from "../types";
import { BrowserApi } from "../api/BrowserAPI";
import { Loading } from "./Loading";
import { Browser } from "./Browser";
import { InfoGame } from "./InfoGame";
export function Browsers(){
    const [Id, SetId] = useState(0)
    const [Games, SetGames]= useState<GamesType[]>([])
    useEffect(()=>{
        BrowserApi().then((Games)=>{SetGames(Games)})
    }, [])
    if(Id != 0){
        return(<InfoGame Id= {Id} />)
    }
    if(Games.length < 1){
        return(<Loading />)
    }
    return(Games.map((Game)=>{
        return(<Browser Game= {Game} SetId={SetId}/>)
    }))
}