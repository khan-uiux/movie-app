import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import TopRated from './pages/TopRated'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { MovieContext } from './Context/MovieContext'
import Login from './pages/Login'

function App() {

  const {handleCategory} = useContext(MovieContext)

  return (
    <>
      <div className="content relative bg-[#010208]">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/top-rated' element = {<TopRated />} />
        <Route path='/popular' element = {<TopRated />} />
        <Route path='/upcoming' element = {<TopRated />} />
        <Route path='/new-arival' element = {<TopRated />} />
        <Route path='/login' element = {<Login />} />
      </Routes>
    </>
  )
}

export default App