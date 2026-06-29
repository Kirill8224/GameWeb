import { NavLink, Route, Routes } from "react-router-dom"
import '../styles/index.css'
import { Home } from "./Home"
import { GetGames } from "./Games"
function App() {
  return (
    <>
      <div>
        <NavLink to={'/'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Home</NavLink>-
        <NavLink to={'/Games'} className={(props)=>props.isActive ? 'active' : 'Noactive'}>Games</NavLink>
      </div>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/Games'} element={<GetGames />}/>
      </Routes>
    </>
  )
}

export default App
