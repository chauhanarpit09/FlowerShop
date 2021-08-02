import React from 'react'
import './banner.css'
export default function Banner() {
    return (
        <div className="banner">
           <div className="emptyDiv"></div>
           <div className="textOnBanner">
                <div className="text">
                    <h2>Gift and Flower for Your Beloved</h2>
                    <p>Priding ourselves on the quality, bold colurs and sustainvability of our products, will give you a boost of confidence</p>
                </div>
                <div className="shoppingButton">
                    <button>Start Shopping</button>
                </div>
                <div className="examplePackage">
                    <div className="packageHolder">
                        <div className="package">
                            <div className="flowerImage">
                                <img src="../images/tulip.png" alt="flower"/>
                            </div>
                            <div>
                                <h4>Tulip Package</h4>
                                <p>$70.99</p>
                            </div>

                        </div>
                    </div>
                    <div className="packageHolder">
                        <div className="package">
                            <div className="flowerImage">
                                <img src="../images/rose.png" alt="flower"/>
                            </div>
                            <div className="flowerContent">
                                <h4>Rose Package</h4>
                                <p>$70.99</p>
                            </div>

                        </div>
                    </div>
                </div>
           </div>
           <div className="imageOnBanner">
                <img src="../images/bannerImage.png" alt="bannerImage"/>
           </div>
        </div>
    )
}
