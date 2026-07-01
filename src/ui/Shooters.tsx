import { useEffect, useState } from "react"
import { ShooterApi } from "../api/ShooterApi"
import { Loading } from "./Loading"
import { Shooter } from "./Shooter"
import { InfoGame } from "./InfoGame"
import type { GamesType } from "../types"
export function Shooters(){
    const [Games, SetGames]= useState<GamesType[]>([])
    const [Id, SetId] = useState(0)
    useEffect(()=>
    {ShooterApi().then((data)=>{SetGames(data)}) }
    , [])
    if(Games.length < 1){
        return(<Loading />)
    }
    if(Id != 0){
        return(<>
        <button className="active" onClick={()=>SetId(0)}>Назад</button>
        <InfoGame Id= {Id}/>
        {console.log('Айди', Id)}
        </>)
    }
    return(Games.map((Game)=>{
        return(<Shooter Game= {Game} SetId= {SetId}/>)
    }))
}