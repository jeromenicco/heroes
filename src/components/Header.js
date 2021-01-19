import React from 'react'
import TitleMini from './Home/TitleMini'

import './Header.css'

import { Link } from 'react-router-dom';

const Header = ({name, avatar}) => {
  return(
    <div className="header-container">
      <Link to='/' >
        <TitleMini />
      </Link>
      <div className='header-player'>
        <p className='player-name'>{name}</p>
        {avatar && <img className='player-avatar' alt={name} src={avatar} />}
        
      </div>
    </div>
  )
}

export default Header
