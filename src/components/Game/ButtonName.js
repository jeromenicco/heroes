import React from 'react';

import './ButtonName.css';

const ButtonName = ({name, onClick}) => (
    <div className="buttonList">
        <button value={name} className="button" onClick={onClick}>{name}</button>
    </div>
)

export default ButtonName
