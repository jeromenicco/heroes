import React from "react"

import "./ButtonsLevelChoice.css"

const ButtonsLevelChoice = ({onClick, level}) => {
        return (
            <div className='level-choice-container'>
                <h2>Choose difficulty</h2>
                <div className="ButtonsLevelChoice-body">
                    <div className='button-wrap'>
                        <button className="ButtonsLevelChoice-inside easy" name='easy' onClick={onClick}>
                            Easy
                        </button>
                    </div>
                    <div className='button-wrap'>
                        <button className="ButtonsLevelChoice-inside medium" name='medium' onClick={onClick}>
                            Medium
                        </button>
                    </div>
                    <div className='button-wrap'>
                        <button className="ButtonsLevelChoice-inside expert" name='expert' onClick={onClick}>
                            Expert
                        </button>
                    </div>
                    <div className='button-wrap hardcore'>
                        <button className="ButtonsLevelChoice-inside hardcore" name='hardcore' onClick={onClick}>
                            Hardcore
                        </button> 
                    </div>
                </div>
            </div>
    )}

export default ButtonsLevelChoice
