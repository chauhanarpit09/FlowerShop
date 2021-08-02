import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './reviewcard.css'
export default function Reviewcard(props) {
    return (
        <div className="reviewcard">
            <div className="reviewerProfile">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${props.name}.svg`}/>
                <p><span id="name">{props.name}</span></p>
            </div>
            <div className="reviewContent">
                <p><span id="content">{props.content}</span></p>
            </div>
        </div>
    )
}
