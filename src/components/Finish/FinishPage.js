import React, { Component } from 'react'

import Header from '../Header';
import Score from '../Score'
import TryAgain from '../TryAgain'

import './FinishPage.css';

const title = ["Terrible", "Well done !", "You're the king !"]

class FinishPage extends Component{
    state = {
        yourScore: 0,
        titleResult: "",
        gifUrl: null,
        name: '',
        chosen: ''
    }

    componentDidMount = () => {
        const name = localStorage.getItem('name');
        this.setState({name : name});
        const yourAvatar = localStorage.getItem('chosen');
        this.setState({ 'chosen' : yourAvatar })
        const yourScore = localStorage.getItem('yourScore');
        this.setState({yourScore : yourScore})

        if (yourScore < 6) {
            this.setState({titleResult: title[0]})

        } else if (yourScore >= 6 && yourScore <= 12 ) {
            this.setState({titleResult: title[1]})

        } else if (yourScore > 12) {
            this.setState({titleResult: title[2]})

        }

    }

    
    render(){
        return(
            <div className="backgroundFinish">
                <Header name={this.state.name} avatar={this.state.chosen}/>
                <div className='finish-container'>
                    <h1 className='finish-page-items'>{this.state.titleResult}</h1>
                    <Score className='finish-page-items' score={this.state.yourScore} end />
                    <TryAgain className='finish-page-items' />
                </div>
            </div>
        )
    }
}

export default FinishPage
