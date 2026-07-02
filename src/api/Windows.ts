export function WindowsApi(){
    return(fetch('https://www.freetogame.com/api/games?platform=windows')
    .then((res)=>{return(res.json())})
    .then((data)=> {return(data)})
)}