import React from 'react'
import './header.css'
export default function Header() {
    return (
        <div className="header">
            <div className="companyLogo">
                <h2>FLO.</h2>
            </div>
            <div className="emptyDiv">
            </div>
            <div className="navigationLinks">
               <div>
                    <p>New Arrival</p>
               </div>
               <div>
                    <p>Best Seller</p>
               </div>
               <div>
                    <p>Reviews</p>  
               </div>
               <div className="signUpButton">
                    <button>Sign Up</button>
               </div>
            </div>
        </div>
    )
}
