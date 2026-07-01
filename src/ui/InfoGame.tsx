import { useEffect } from "react"
import type { InfoGameType } from "../types"
import { GetGameApi } from "../api/GetGame"
import { useState } from "react"
import { Infoimage } from "./ScreenInfo"
export function InfoGame({ Id }: { Id: number }){
    const [GameI, SetGameI] = useState<InfoGameType | null>(null)
    useEffect(()=>{
        GetGameApi(Id).then((Data)=>{SetGameI(Data)})
    }, [])
    if(GameI === null){
    return(<h1>Загрузка</h1>)}
    else{
    return(<>
    <div>
        <h1 style={{textAlign: "center"}}>{GameI.title} </h1>
        <p>{GameI.description}</p>
        <span>Жанр: {GameI.genre}, </span>
        <span>Разработчик: {GameI.developer}, </span>
        <span>Издатель: {GameI.publisher}, </span>
        <span>Игра для {GameI.platform}.</span>
        <h3>Системные требования:</h3>
        <ul>
            <li>оперативная система: {GameI.minimum_system_requirements.os}</li>
            <li>оперативная память: {GameI.minimum_system_requirements.memory}</li>
            <li>процессор: {GameI.minimum_system_requirements.processor}</li>
            <li>Объём: {GameI.minimum_system_requirements.storage}</li>
        </ul>
        <div><a href={GameI.freetogame_profile_url}>игровой сайт</a></div>
        <a href={GameI.game_url}>играть</a>
    </div>
    <Infoimage Images={GameI.screenshots}/>
    {console.log(GameI)}
    </>
    )}}