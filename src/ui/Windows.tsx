import { useEffect, useMemo, useState } from "react";
import { WindowsApi } from "../api/Windows";
import { GetGame } from "./Game";
import type { GamesType } from "../types";
import { Loading } from "./Loading";
import { InfoGame } from "./InfoGame";
export function Windows(){
    const [id, setId] = useState(0)
    const [Games, SetGames]= useState<GamesType[]>([])
    const [quantity, setQuantity]= useState<number>(30)
    const GameRen: GamesType[]= useMemo(()=>{return Games.slice(0, quantity)}, [Games, quantity])
    useEffect(()=>{
        WindowsApi().then((data)=>{return(SetGames(data))})
    }, [])
    if(id != 0){
        return(<>
        <button className="active" onClick={()=>setId(0)}>назад</button>
        <InfoGame Id= {id} />
        </>)
    }
    if(Games.length< 1){
        return(<Loading />)
    }
    return(<div>
    {GameRen.map((Game)=>{return(<div key={Game.id}>
        <GetGame Game= {Game} SetId={setId}/>
        </div>)})}
    <button className="active" onClick={()=> setQuantity(quantity + 30)}>ещё</button>
    </div>)
}