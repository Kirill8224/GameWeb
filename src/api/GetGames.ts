export function GetGamesApi(): Promise<any>{
    return fetch('https://www.freetogame.com/api/games')
    .then((response)=>{ return(response.json())})
    .then((data)=>{return(data)})
}