import React, { Component } from 'react';

import StartButton from '../StartButton'
import HeaderHome from './HeaderHome';
import Description from './Description';

import Title from './Title'

import './HomePage.css';

import { Link } from 'react-router-dom';

class HomePage extends Component{
    render(){
        return(
            <div className="backgroundHome">
                <HeaderHome />
                <div className='home-container'>
                    <Title />
                    <Description />
                    <Link to="/FormPage">
                        <StartButton />
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomePage
