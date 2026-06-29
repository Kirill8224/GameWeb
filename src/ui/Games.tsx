import { GetGamesApi } from "../api/GetGames"
import {useState,  useEffect } from "react"
import type { GamesType } from "../types"
import { GetGame } from "./Game"
//import { useTraks } from "../bbl/UseSTate"
export function GetGames(){
    const [Games, SetGames] = useState<GamesType[]>([])
    useEffect(()=>{
        GetGamesApi().then((Data)=> SetGames(Data)) }, [])
    console.log(Games)
    return(Games.map((Game)=>{return(<>
    <GetGame Game= {Game}/>
    </>)}))
}