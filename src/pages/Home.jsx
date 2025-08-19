import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Title from '../components/Title'
import NewArival from '../components/NewArival'
import TopRated from '../components/TopRated'
import Popular from '../components/Popular'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="main px-5">
        <div className="content relative">
          <div className="card-list md:mt-[80px] mt-2">
            <Hero />
          </div>
        </div>
      </div>
      <div className="section" style={{backgroundColor:"#02020F",padding:"50px 100px"}}>
        <div className="newArival mb-[50px]">
          <Title title = "New Arival" />
          <NewArival />
        </div>
        <div className="topRated mb-[50px]">
          <Title title = "Top Rated" />
          <TopRated />
        </div>

        <div className="topRated">
          <Title title = "Popular Movies" />
          <Popular />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default Home