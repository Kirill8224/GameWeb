//https://www.freetogame.com/api/game?id=1
export function GetGameApi(Id: number){
    return fetch(`https://www.freetogame.com/api/game?id=${Id}`)
    .then((response)=> {return(response.json())})
    .then((data)=>{return(data)})
}