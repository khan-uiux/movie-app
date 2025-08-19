import { useContext } from 'react'
import bannerImg from '../assets/images/banner-img.jpg'
import Title from '../components/Title'
import { MovieContext } from '../Context/MovieContext'
import Card from '../components/Card'
import Slider from 'react-slick'

function TopRated() {

  const {movieCategory, heading} = useContext(MovieContext)

  const categorySetting = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay : true
  }

  return (
    <div className="category-page">
      <div className="banner relative w-full h-[400px] overflow-hidden flex justify-center items-baseline">
        <img src={bannerImg} alt="Banner Image" className='w-full' />
      </div>
      <div className="content-category bg-[#010208] py-[40px]">
        <div className="heading-title flex items-center justify-center">
          <Title title = {heading} />
        </div>
        <div className="card-grid w-[90%] m-auto grid grid-cols-4 gap-4 mt-[40px]">
          { movieCategory.map((movie, index) => {
              return <Card key={index} movie={movie} />
            }) }
        </div>
      </div>
    </div>
  )
}

export default TopRated