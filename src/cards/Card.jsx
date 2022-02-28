import React from 'react';
import"./card.css";


const Card = props => {
    return(
        <div className="card text-center border-0">
            <div className="overflow">
                <img src={props.imgsrc} alt="" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="/" className='btn btn-outline-lite btn-small'>shop now</a>
            </div>
        </div>
    )
}

export default Card;