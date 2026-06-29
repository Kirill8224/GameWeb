import { GetGamesApi } from "../api/GetGames"
import { useState, useEffect } from "react"

export function GetGames(){
    const [Games, SetGames] = useState<any[]>([])
    useEffect(()=>{
        GetGamesApi().then((Data)=> SetGames(Data)) }, [])
    console.log(Games)
    return(<>
    <h1>список игр</h1>
    </>)
}