import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from './Card'

import Slider from "react-slick";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

function Hero() {

    const {movies} = useContext(MovieContext)

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay : true
    };

  return (
    <Slider {...settings}>
        { movies.map((movie, index) => {
        return <Card key={index} movie={movie} />
        }) }
    </Slider>
  )
}

export default Hero