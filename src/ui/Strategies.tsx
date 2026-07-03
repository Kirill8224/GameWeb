import { useEffect, useMemo, useState } from "react"
import type { GamesType } from "../types"
import { GetGame } from "./Game";
import { InfoGame } from "./InfoGame"
import { Loading } from "./Loading"
import { StrategyApi } from "../api/StrategyAPI"
export function Strategies(){
    const [id, setId] = useState<number>(0)
    const [Games, SetGames]= useState<GamesType[]>([])
    const [quantity, setQuantity]= useState<number>(30)
    const GameRen: GamesType[]= useMemo(()=>{return Games.slice(0, quantity)}, [Games, quantity])
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
    return(<div>
        {GameRen.map((Game)=>{return(<div key={Game.id}>
        <GetGame Game= {Game} SetId={setId}/>
        </div>)})}
        <button className="active" onClick={()=>{setQuantity(quantity + 30)}}>ещё</button>
        </div>)
}