import { useEffect, useState } from "react";
import type { GamesType } from "../types";
import { BrowserApi } from "../api/BrowserAPI";
import { Loading } from "./Loading";
import { useMemo } from "react";
import { GetGame } from "./Game";
import { InfoGame } from "./InfoGame";
export function Browsers(){
    const [Id, SetId] = useState(0)
    const [Games, SetGames]= useState<GamesType[]>([])
    const [quantity, setQuantity]= useState<number>(30)
    const GamesRen: GamesType[]= useMemo(()=>{return Games.slice(0, quantity)}, [Games, quantity])
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
    return(<div>
        {GamesRen.map((Game)=>{return(
        <div key={Game.id} className="Games">
            <GetGame Game= {Game} SetId={SetId}/>
        </div>
        )})}
        <button className="active" onClick={()=>{setQuantity(quantity + 30)}}>ещё</button>
        </div>)
}