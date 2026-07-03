import { useEffect, useState } from "react"
import { ShooterApi } from "../api/ShooterApi"
import { Loading } from "./Loading"
import { InfoGame } from "./InfoGame"
import { useMemo } from "react"
import { GetGame } from "./Game";
import type { GamesType } from "../types"
export function Shooters(){
    const [quantity, setQuantity]= useState<number>(30)
    const [Games, SetGames]= useState<GamesType[]>([])
    const GamesRen: GamesType[]= useMemo(()=>{return(Games.slice(0, quantity))}, [quantity, Games])
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
        </>)
    }
    return (
        <div>
            {/* 1. Сначала выводим ТОЛЬКО список игр */}
            {GamesRen.map((Game) => {
                return (
                    <div key={Game.id}>
                        <GetGame Game={Game} SetId={SetId} />
                    </div>
                )
            })}
            <div className="active">
                <button 
                    className="active" 
                    onClick={() => setQuantity(quantity + 30)}
                >
                    Ещё
                </button>
            </div>
        </div>
    )
    
}