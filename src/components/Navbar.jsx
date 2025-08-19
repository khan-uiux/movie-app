import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { useContext } from 'react'
import { MovieContext } from '../Context/MovieContext'


function Navbar() {
    const {handleCategory} = useContext(MovieContext)

    const categories = [
        {path : '/home', lable : 'Home', type : 'now_playing'},
        {path : '/popular', lable : 'Popular', type : 'popular'},
        {path : '/top-rated', lable : 'Top Rated', type : 'top_rated'},
        {path : '/upcoming', lable : 'Upcoming', type : 'upcoming'},
        {path : '/new-arival', lable : 'New Arival', type : 'now_playing'}
    ]

  return (
    <nav className="flex justify-between items-center md:w-[100%] w-100">
        <Link to='/'> <img src={Logo} alt="nav-logo" className="md:w-24 w-16 cursor-pointer" /> </Link>
        <div className="links">
            <ul className='nav-ul flex gap-4'>
                { categories.map((cat, index) => {
                    return <li key={index} className='text-[15px] text-white font-[400] cursor-pointer hover:text-[#0CB6E1] duration-500'>
                        <NavLink to={cat.path} onClick={() => handleCategory(cat.type)}> {cat.lable} </NavLink>
                    </li>
                }) }
            </ul>
        </div>
        <button className='text-white border border-white rounded-[5px] px-4 py-[5px] text-[15px] bg-auto cursor-pointer hover:bg-[#0CB6E1] hover:text-white hover:border-[#0CB6E1]'> <Link to='/login'> Login </Link> </button>
    </nav>
  )
}

export default Navbar