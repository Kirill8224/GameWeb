import { NavLink, Route, Routes } from "react-router-dom"
import '../styles/index.css'
import type { GamesType } from "../types"
import { Windows } from "./Windows"
import { Strategies } from './Strategies'
import { Shooters } from './Shooters'
//import { Home } from "./Home"
import { Browsers } from "./Browsers"
import  { GetGames } from "./Games"
import { useState, useEffect } from "react"
import { GetGamesApi } from "../api/GetGames"
import { Pvp } from "./Pvp"
import { Search } from "./Search"
function WebGame() {
  const [Games, SetGames] = useState<GamesType[]>([])
//  const [Id, SetId]= useState(0)
  useEffect(()=>{
    GetGamesApi().then((Data)=> SetGames(Data)) }, [])
  return (<>
      <div className="Navigations">
        <NavLink to={'/'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Игры</NavLink>
        <NavLink to={'/search'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>поиск</NavLink>
        <NavLink to={'/shooters'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Шутер</NavLink>
        <NavLink to={'/Strategies'} className={(props)=>props.isActive ? 'activeStrategies' : 'NoactiveStrategies'}>Стратегии</NavLink>
        <NavLink to={'/windows'} className={(props)=>props.isActive ? 'activeStrategies' : 'NoactiveStrategies'}>Windows</NavLink>
        <NavLink to={'/browser'} className={(props)=>props.isActive ? 'activeStrategies' : 'NoactiveStrategies'}>Браузер</NavLink>
        <NavLink to={'/pvp'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>ПВП</NavLink>
      </div>
      <Routes>
        <Route path={'/search'} element={<Search Games= {Games}/>} />
        <Route path={'/'} element={<GetGames Games= {Games}/>} />
        <Route path={'/shooters'} element={<Shooters />}/>
        <Route path={"/Strategies"} element= {<Strategies />}></Route>
        <Route path={"/windows"} element={<Windows />}></Route>
        <Route path={"/browser"} element={<Browsers />}></Route>
        <Route path={"/pvp"} element={<Pvp />}></Route>
      </Routes>
      </>
  )
}

export default WebGame
