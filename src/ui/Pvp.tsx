import { useEffect, useMemo, useState } from "react";
import { PvpApi } from "../api/PvpApi";
import { GetGame } from "./Game";
import { Loading } from "./Loading";
import { InfoGame } from "./InfoGame";
import type { GamesType } from "../types";

export function Pvp(){
    const [Id, SetId]= useState(0)
    const [Games, SetGame]= useState([])
    useEffect(()=>{
        PvpApi().then((res)=>{SetGame(res)})
    }, [])
    const [quantity, setQuantity]= useState<number>(30)
    const GamesRen: GamesType[]= useMemo(()=>{return Games.slice(0, quantity)}, [Games, quantity])
    if(Games.length < 1){
        return(<Loading />)
    }
    if(Id != 0){
        return(<>
        <button className="active" onClick={()=>SetId(0)}>назад</button>
        <InfoGame Id= {Id}/>
        </>)
    }
    return(
        <div>
        {GamesRen.map((Game)=>{
        return(<div key={Game.id}>
            <GetGame Game= {Game} SetId={SetId}/>
            </div>)
    })}
    <button onClick={()=> {setQuantity(quantity+ 30)}} className="active">ещё</button>
    </div>)
}