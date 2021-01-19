import React from 'react'

import './SkipButton.css';



class SkipButton extends React.Component {

    render () {
        return (
            <div className="skip-card-container-btn ">
                <button 
                onClick={this.props.skip} 
                className={`btn-skip ${this.props.life === 0 ? 'skip-grey' : 'skip-red'}`}>
                    SKIP {this.props.life}
                </button>
            </div>
        )
    };
};

export default SkipButton