import { useEffect, useState } from "react";
import type { GamesType } from "../types";
import { BrowserApi } from "../api/BrowserAPI";
import { Loading } from "./Loading";
import { GetGame } from "./Game";
import { InfoGame } from "./InfoGame";
export function Browsers(){
    const [Id, SetId] = useState(0)
    console.log(Id)
    const [Games, SetGames]= useState<GamesType[]>([])
    useEffect(()=>{
        BrowserApi().then((Games)=>{SetGames(Games)})
    }, [])
    if(Id != 0){
        return(<>
        <button className="active" onClick={()=>{SetId(0)}}>назад</button>
        <InfoGame Id= {Id} />
        </>)
    }
    if(Games.length < 1){
        return(<Loading />)
    }
    return(Games.map((Game)=>{
        return(<GetGame Game= {Game} SetId={SetId}/>)
    }))
}