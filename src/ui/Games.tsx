
import { Loading } from "./Loading"
import { InfoGame } from "./InfoGame"
import '../styles/index.css'
import {useState, useMemo } from "react"
import type { GamesType } from "../types"
import { GetGame } from "./Game"
//import { useTraks } from "../bbl/UseSTate"
//interface GetGamesProps {
//    Game: GamesType,
//    Id: number,
 //   SetId: React.Dispatch<React.SetStateAction<number>>,
 //   Games: GamesType[]}
export function GetGames({Games}: {Games: GamesType[]}){
    const [Id, SetId]= useState(0)
//    const [Games, SetGames] = useState<GamesType[]>([])
    const [quantity, setQuantity]= useState<number>(30)
    const GamesRen: GamesType[]= useMemo(()=>{return Games.slice(0, quantity)}, [Games, quantity])
//    useEffect(()=>{
//        GetGamesApi().then((Data)=> SetGames(Data)) }, [])
    if(Id != 0){
        return(<>
        <button className="active" onClick={()=>{SetId(0)}}>Назад</button>
        <InfoGame Id= {Id} />
        </>)
    }
    if (GamesRen.length === 0) {
        return <Loading Games={Games} />
    }
    return(<div>
    {GamesRen.map((Game)=>{return(
    <div key={Game.id} className="Games">
        <GetGame Game= {Game} SetId={SetId}/>
    </div>
    )})}
    <button className="active" onClick={()=>{setQuantity(quantity + 30)}}>ещё</button>
    </div>)
}


//<InfoGame Id= {Id} />