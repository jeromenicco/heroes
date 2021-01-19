import React from 'react'

import './TryAgain.css'

import { Link } from 'react-router-dom';

class TryAgain extends React.Component {
    render(){
        return <div className="tBlock">
            <Link to="/FormPage" className="tButton" >
                Try Again
            </Link>
    </div>
}}

export default TryAgain
