import { NavLink, Route, Routes } from "react-router-dom"
import '../styles/index.css'
import { Windows } from "./Windows"
import { Strategies } from './Strategies'
import { Shooters } from './Shooters'
//import { Home } from "./Home"
import { Browsers } from "./Browsers"
import  { GetGames } from "./Games"
import { useState } from "react"
function WebGame() {
  const [Id, SetId]= useState(0)
  return (
    <>
      <div>
        <NavLink to={'/'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Игры</NavLink>-
        <NavLink to={'/shooters'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Шутер</NavLink>-
        <NavLink to={'/Strategies'} className={(props)=>props.isActive ? 'activeStrategies' : 'NoactiveStrategies'}>Стратегии</NavLink>-
        <NavLink to={'/windows'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Windows</NavLink>-
        <NavLink to={'/browser'} className={(props)=>props.isActive ? 'activeStrategies' : 'NoactiveStrategies'}>Браузерные</NavLink>
      </div>
      <Routes>
        <Route path={'/'} element={<GetGames Id= {Id} SetId= {SetId} />} />
        <Route path={'/shooters'} element={<Shooters />}/>
        <Route path={"/Strategies"} element= {<Strategies />}></Route>
        <Route path={"/windows"} element={<Windows />}></Route>
        <Route path={"/browser"} element={<Browsers />}></Route>
      </Routes>
    </>
  )
}

export default WebGame
