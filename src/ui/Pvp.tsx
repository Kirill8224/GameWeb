import { useEffect, useState } from "react";
import { PvpApi } from "../api/PvpApi";
import { GetGame } from "./Game";
import { Loading } from "./Loading";
import { InfoGame } from "./InfoGame";

export function Pvp(){
    const [Id, SetId]= useState(0)
    const [Games, SetGame]= useState([])
    useEffect(()=>{
        PvpApi().then((res)=>{SetGame(res)})
    }, [])
    if(Games.length < 1){
        return(<Loading />)
    }
    if(Id != 0){
        return(<InfoGame Id= {Id}/>)
    }
    return(Games.map((Game)=>{
        return(<GetGame SetId= {SetId} Game= {Game} />)
    }))
}