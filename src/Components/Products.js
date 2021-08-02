import React from 'react'
import './products.css'
import Productrow from './Productrow'
export default function Products() {
    return (
        <div className="products">
                <p><span id="heading">Products</span></p>
                <Productrow title = {'Our Best Sellers This Month'}/>
                <Productrow title = {'Recommended '}/>
        </div>
    )
}
