import React from "react";
import {Redirect} from 'react-router-dom'

import "./Timer.css";

class Timer extends React.Component {
  state = {
    timer: this.props.time
  };
  changeTime = () => {
    const time = this.state.timer;
    if (time !== 0) {
      this.setState({ timer: time - 1 });
    }
  };
  componentDidUpdate = (prevProps) => {
    const timer = this.state.timer
    if (this.props.time !== prevProps.time){
      this.setState({timer: timer + (this.props.time - prevProps.time)})
    }
  }
  componentDidMount = () => {
    setInterval(this.changeTime, 1000);
  };
  
  render() {
    const width = 150;
    const strokeWidth = 10;
    return this.state.timer === null ? null : ( this.state.timer <= 0 ? <Redirect to="/FinishPage" /> : (
      <div className="timer-container">
        <p className="time">{this.state.timer}</p>
        <svg viewBox='0 0 150 150' preserveAspectRatio="xMidYMid meet">
          <circle
            className="circle"
            cx={width / 2}
            cy={width / 2}
            r={width / 2 - strokeWidth / 2}
            stroke="#f8cf17"
            strokeWidth={strokeWidth}
            fillOpacity="0"
            style={{ animation: `stroke ${this.props.time}s linear forwards` }}
          />
        </svg>
      </div>
    ))
  }
}

export default Timer
