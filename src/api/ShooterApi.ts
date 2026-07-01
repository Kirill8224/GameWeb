export function ShooterApi(){
    return(fetch('https://www.freetogame.com/api/games?category=shooter')
    .then((res)=> {return(res.json())})
    .then((data)=>{return(data)}))
}