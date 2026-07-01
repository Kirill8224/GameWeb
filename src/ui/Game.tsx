import '../styles/index.css'
import type { GamesType } from '../types'
//import { useState } from 'react'
//import { InfoGame } from './InfoGame'
interface GetGamesProps {
    Game: GamesType
    Id: number;
    SetId: React.Dispatch<React.SetStateAction<number>>
  }
export function GetGame( { Game, SetId }: GetGamesProps  ){
//    const [GameI, SetGameI] = useState(null)
//    const [Id, SetId]= useState(0)
//    console.log('игра', Game)
    return(<>
    <div className="Game" onClick={()=>{SetId(Game.id)}}>
        <h1>Название: {Game.title}</h1>
        <p>краткое описание: {Game.short_description}</p>
        <p>Разработала игру компния: {Game.developer} </p>
        <p>Игра вышла в {Game.release_date}</p>
        <p>Игра для {Game.platform}</p>
        <img src={Game.thumbnail} alt='скриншот из игры' className='mainAvatar'/>
    </div>
    </>)
}
//InfoGame(Game.id, GameI, SetGameI)