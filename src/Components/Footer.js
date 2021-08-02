import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="footerImageHolder">
                    <img src="../images/footerflower.png" alt="flowerHoldingImage" />
                </div>
                <div className="emptyDiv"></div>
                <div className="footerTextHolder">
                    <h2>Subscribe to our newsletter</h2>
                    <p> Subscribe to our newsletter and always up to date about new products and promos</p>
                    <div className="footerSeacrhBar">
                        <input type="text" placeholder="Your Email address"/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
