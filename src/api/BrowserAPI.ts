export function BrowserApi(){
    return(fetch('https://www.freetogame.com/api/games?platform=browser')
    .then((res)=>{return(res.json())})
    .then((data)=>{return(data)})
)}