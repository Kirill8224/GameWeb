import { useEffect, useState } from "react"
import type { GamesType } from "../types"
import { Strategy } from "./Strategy"
import { InfoGame } from "./InfoGame"
import { Loading } from "./Loading"
import { StrategyApi } from "../api/StrategyAPI"
export function Strategies(){
    const [id, setId] = useState<number>(0)
    const [Games, SetGames]= useState<GamesType[]>([])
    useEffect(()=>{StrategyApi().then((Games)=>{SetGames(Games)})}, [])
    if(id != 0){
        return(<>
        <button onClick={()=>{setId(0)}} className="active">Назад</button>
        <InfoGame Id= {id}/>
        </>)
    }
    if(Games.length < 1){
        return(<Loading />)
    }
    return(Games.map((Game)=>{return(<Strategy key={Game.id} Game= {Game} SetId= {setId}/>)}))
}