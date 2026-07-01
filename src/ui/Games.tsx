import { GetGamesApi } from "../api/GetGames"
import { Loading } from "./Loading"
import { InfoGame } from "./InfoGame"
import '../styles/index.css'
import {useState,  useEffect } from "react"
import type { GamesType } from "../types"
import { GetGame } from "./Game"
//import { useTraks } from "../bbl/UseSTate"
interface GetGamesProps {
//    Game: GamesType,
    Id: number,
    SetId: React.Dispatch<React.SetStateAction<number>>
}
export function GetGames({}: GetGamesProps){
    const [Id, SetId]= useState(0)
    const [Games, SetGames] = useState<GamesType[]>([])
    useEffect(()=>{
        GetGamesApi().then((Data)=> SetGames(Data)) }, [])
    if(Id != 0){
        return(<>
        <button className="active" onClick={()=>{SetId(0)}}>Games</button>
        <InfoGame Id= {Id} />
        </>)
    }
    console.log(Games)
    if (Games.length === 0) {
        return <Loading Games={Games} />
    }
    return(Games.map((Game)=>{return(<>
    <div className="Games">
    <GetGame Game= {Game} Id= {Id} SetId= {SetId}/>
    </div>
    </>)}))
}


//<InfoGame Id= {Id} />