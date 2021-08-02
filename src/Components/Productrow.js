import React from 'react'
import './productRow.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Productcard from './Productcard'
export default function Productrow(props) {
    return (
        <div className="productrow">
             <div className="productTitle">
                <div className="title">
                    <h2>{props.title}</h2>
                </div>
                <div className="arrow">
                    <ArrowForwardIosIcon />
                </div>
             </div>
             <div className="productCards">
                 <Productcard key={'1'} title={'Aster Bouquet'} price={'$27.23'} imglink={'asterboquet.png'}/>
                 <Productcard key={'2'} title={'Rose Bouquet'} price={'$27.00'} imglink={'roseboquet.png'}/>
                 <Productcard key={'3'} title={'Tulip Bouquet'} price={'$20.99'} imglink={'tulipboquet.png'}/>
                 <Productcard key={'4'} title={'Special Bouquet'} price={'$50.99'} imglink={'specialboquet.png'}/>
             </div>
        </div>
    )
}
