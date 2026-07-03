export function PvpApi(){
    return(fetch('https://www.freetogame.com/api/games?category=pvp')
    .then((res)=>{return(res.json())})
    .then((data)=> {return(data)})
)}