import type { GamesType } from "../types";
type Strategy= {
    Game: GamesType,
    setId: React.Dispatch<React.SetStateAction<number>>
}
export function Strategy({Game, setId}: Strategy){
    return(<>
        <div className="Game" onClick={() =>setId(Game.id)}>
            <h1>Название: {Game.title}</h1>
            <p>краткое описание: {Game.short_description}</p>
            <p>Разработала игру компния: {Game.developer} </p>
            <p>Игра вышла в {Game.release_date}</p>
            <p>Игра для {Game.platform}</p>
            <img src={Game.thumbnail} alt='скриншот из игры' className='mainAvatar'/>
        </div>
        </>)
}