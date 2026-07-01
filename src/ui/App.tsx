import { NavLink, Route, Routes } from "react-router-dom"
import '../styles/index.css'
import { Home } from "./Home"
import  { GetGames } from "./Games"
import { useState } from "react"
function App() {
  const [Id, SetId]= useState(0)
  if(Id != 0){
    return(
      <>
      <div>
        <NavLink to={'/'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Home</NavLink>-
        <NavLink to={'/Games'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Games</NavLink>
      </div>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/Games'} element={<GetGames Id= {Id} SetId= {SetId} />} />
      </Routes>
      </>
    )
  }
  return (
    <>
      <div>
        <NavLink to={'/'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Home</NavLink>-
        <NavLink to={'/Games'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Games</NavLink>
      </div>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/Games'} element={<GetGames Id= {Id} SetId= {SetId} />} />
      </Routes>
    </>
  )
}

export default App
