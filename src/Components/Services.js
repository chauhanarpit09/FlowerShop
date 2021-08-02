import React from 'react'
import './services.css'
export default function Services() {
    return (
        <div className="services">
            <div className="serviceImage">
                <img src="../images/service.jpg" alt="serviceFlower"/>
            </div>
            <div className="serviceContent">
                <p><span id="headingservice">Our Service</span></p>
                <p><span id="heading">Flower Bouquet and Gift</span></p>
                <p>we aim to supply a fully sustainable service from the growing of our flowers to the packaging and transport. Our goal is to provide as lower carbon footprint per arrangement as possible with minimal waste. Gone are the days of stuffy themed arrangements. we believe in the simplist beauty of natural blooms from the humble settings of the potting shed, based in sidlesham, West Sussex</p>
                <div className="serviceLearnMore">
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}
