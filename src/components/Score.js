import React from 'react';

import './Score.css';

const Score = ({score, end}) => {
    return(
        <div className={end ? "panelScoreEnd" : "panelScore"}>
            <p className="scoreDisplay" >Your score : {score}</p>
        </div>
    )
}

export default Score
