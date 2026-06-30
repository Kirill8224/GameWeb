import { GetGamesApi } from "../api/GetGames"
import { Loading } from "./Loading"
import {useState,  useEffect } from "react"
import type { GamesType } from "../types"
import { GetGame } from "./Game"
//import { useTraks } from "../bbl/UseSTate"
export function GetGames(){
    const [Games, SetGames] = useState<GamesType[]>([])
    useEffect(()=>{
        GetGamesApi().then((Data)=> SetGames(Data)) }, [])
    console.log(Games)
    if (Games.length === 0) {
        return <Loading Games={Games} />
    }
    return(Games.map((Game)=>{return(<>
    <div className="Games">
    <GetGame Game= {Game}/>
    </div>
    </>)}))
}