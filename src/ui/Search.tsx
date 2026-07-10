import { useMemo, useState } from "react"
import type { GamesType } from "../types"
import { GetGame } from "./Game"
import { InfoGame } from "./InfoGame"
export function Search({Games}: {Games: GamesType[]}){
    const [Search, SetSearch]= useState<string>('')
    const [Id, SetId]= useState(0)
    const [count, setcount]= useState<number>(20)
    console.log(Search)
    const GamesSearch= Games.filter((Games) => {return Games.title.toLowerCase().includes(Search.toLowerCase())})
    console.log(GamesSearch)
    if(Id != 0){
        return(<div>
        <button className="active" onClick={()=>SetId(0)}>назад</button>
        <InfoGame Id={Id} />
        </div>)
    }
    const GamesRen= useMemo(()=> {return GamesSearch.slice(0, count)}, [GamesSearch, count])
    return(<div>
        <hr />
        <input onChange={e => SetSearch(e.target.value)} className="Search" type="text" placeholder="введите название игры"/>
        {GamesRen.length >20 ? <div>
            {GamesRen.map((Game)=>{return(<GetGame Game= {Game} SetId={SetId}/>)})}
            <button className="active" onClick={()=>setcount(count + 20)}>ещё</button>
        </div> : <div>{GamesRen.map((Game)=>{return(<GetGame Game= {Game} SetId={SetId}/>)})}</div>}
        <hr />
    </div>)
}