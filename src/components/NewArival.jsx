import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import Card from "./Card";

function NewArival() {
    
    const {newArival} = useContext(MovieContext)

    const newArivalSetting = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay : true
    };

  return (
    <Slider {...newArivalSetting}>
        { newArival.map((movie, index) => {
            return <Card key={index} movie={movie} />
        }) }
    </Slider>
  )
}

export default NewArival