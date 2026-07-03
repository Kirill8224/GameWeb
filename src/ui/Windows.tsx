import { useEffect, useState } from "react";
import { WindowsApi } from "../api/Windows";
import { GetGame } from "./Game";
import type { GamesType } from "../types";
import { Loading } from "./Loading";
import { InfoGame } from "./InfoGame";
export function Windows(){
    const [id, setId] = useState(0)
    const [Games, SetGames]= useState<GamesType[]>([])
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
    return(Games.map((Game)=>{return(<GetGame Game= {Game} SetId={setId} />)}))
}