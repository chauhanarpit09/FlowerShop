import React from 'react'
import './productCard.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function Productcard(props) {
    return (
        <div className="card">
            <div className="cardImage">
                <img src={`../images/${props.imglink}`} alt="flower"/>
            </div>
            <div className="cardContent">
                <div className="content">
                    <h4>{props.title}</h4>
                    <p>{props.price}</p>
                </div>
                <div className="shopIcon">
                    <AddShoppingCartIcon />
                </div>
            </div>
        </div>
    )
}
