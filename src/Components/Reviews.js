import React from 'react'
import './review.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Reviewcard from './Reviewcard'
export default function Reviews() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            dots:false
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
            }
        }
        ]
    }

    



    return (
        <div className="reviews">
            <div className="reviewHeading">
                <p><span id="heading">Check Out Recent Reviews</span></p>
            </div>
            <div className="reviewSlider">
                <Slider {...settings}>
                    <Reviewcard name={'Harry Maliq'} content={'Whether you are looking to brighten up your home with a display of fresh flowers sent to your favourite person'}/>
                    <Reviewcard name={'Elon Musk'} content={'Whether you are looking to brighten up your home with a display of fresh flowers sent to your favourite person'}/>
                    <Reviewcard name={'Jeff'} content={'Whether you are looking to brighten up your home with a display of fresh flowers sent to your favourite person'}/>
                    <Reviewcard name={'Irene Mackenzie'} content={'Whether you are looking to brighten up your home with a display of fresh flowers sent to your favourite person'}/>
                    <Reviewcard name={'James Conway'} content={'Whether you are looking to brighten up your home with a display of fresh flowers sent to your favourite person'}/>
                </Slider>
            </div>
        </div>
    )
}
