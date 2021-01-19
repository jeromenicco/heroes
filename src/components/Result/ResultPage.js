import React, { Component } from 'react'

import Score from '../Score';
import TryAgain from '../TryAgain';

import './ResultPage.css';

class ResultPage extends Component{
    state = {
        yourScore: 0
    }

    componentDidMount(){
        const yourScore = localStorage.getItem('yourScore');
        this.setState({yourScore});
    }

    render(){
        return(
            <div className="backgroundResult">
                <Score score ={this.state.yourScore} end />
                <TryAgain />
            </div>
        )
    }
}

export default ResultPage
