import { memo } from 'react';
import '../styles/index.css'
import type { GameTypeUi } from "../types";
export const GetGame= memo(function GetGame({Game, SetId}: GameTypeUi){
    return(
    <div key={Game.id} className="Game" onClick={()=>{SetId(Game.id)}}>
        <h1>Название: {Game.title}</h1>
        <p>жанр: {Game.genre}</p>
        <p>краткое описание: {Game.short_description}</p>
        <p>Разработала игру компния: {Game.developer} </p>
        <p>Игра вышла в {Game.release_date}</p>
        <p>Игра для {Game.platform}</p>
        <img src={Game.thumbnail} alt='скриншот из игры' className='mainAvatar'/>
    </div>)
})
//InfoGame(Game.id, GameI, SetGameI)