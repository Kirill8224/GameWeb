import { NavLink, Route, Routes } from "react-router-dom"
import '../styles/index.css'
import { Shooters } from './Shooters'
//import { Home } from "./Home"
import  { GetGames } from "./Games"
import { useState } from "react"
function App() {
  const [Id, SetId]= useState(0)
  return (
    <>
      <div>
        <NavLink to={'/'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Игры</NavLink>-
        <NavLink to={'/shooters'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Шутер</NavLink>
      </div>
      <Routes>
        <Route path={'/'} element={<GetGames Id= {Id} SetId= {SetId} />} />
        <Route path={'/shooters'} element={<Shooters />}/>
      </Routes>
    </>
  )
}

export default App
