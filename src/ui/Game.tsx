import '../styles/index.css'
export function GetGame({ Game }){
//    console.log('игра', Game)
    return(<>
    <div className="Game">
        <h1>Название: {Game.title}</h1>
        <p>краткое описание: {Game.short_description}</p>
        <p>Разработала игру компния: {Game.developer} </p>
        <p>Игра вышла в {Game.release_date}</p>
        <p>Игра для {Game.platform}</p>
        <img src={Game.thumbnail} alt='скриншот из игры' className='mainAvatar'/>
    </div>
    </>)
}