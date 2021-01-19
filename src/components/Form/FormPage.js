import React from 'react'
import { Link } from 'react-router-dom';

import Avatar from './Avatar';
import ButtonsLevelChoice from './ButtonsLevelChoice';
import Header from '../Header';
import NameForm from './NameForm';
import StartButton from '../StartButton';

import './FormPage.css';

class FormPage extends React.Component{
    state = {
        level: '',
        chosen: '',
        avatar: ''
    }

    getBackground = (e) => {
        this.setState({level: e.target.name})
    }

    getColoured = (e) => {
        this.setState({chosen: e.target.src})
        this.setState({avatar: e.target.name})
    }

    componentWillUnmount = () => {
        const yourLevel = this.state.level;
        localStorage.setItem('level', yourLevel)
        const yourAvatar = this.state.chosen;
        localStorage.setItem('chosen', yourAvatar)
    }


    render(){
        return(
            <div className="backgroundForm">
                <Header />
                <div className='form-page-wrapper'>
                    <div className='form-container'>
                        <NameForm />
                        <Avatar onClick={this.getColoured} avatar={this.state.avatar}/>
                        <ButtonsLevelChoice onClick={this.getBackground} level={this.state.level} />
                        <Link to="/GamePage">
                            <StartButton />
                        </Link>
                    </div>
                </div>
            </div>
        )
    };
}

export default FormPage
