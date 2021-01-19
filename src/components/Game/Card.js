import React from 'react'

import './Card.css';

const card = ({img}) => {
    return (
        <div className="card-container">
            <img className="card" src={img} alt="Hero card"></img>
        </div>
    );
  }

export default card
