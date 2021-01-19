import React from "react";

import ButtonName from "./ButtonName";
import SkipButton from "./SkipButton";

import "./CardChoice.css";

class CardChoice extends React.Component {
  render() {
    return (
        <div className="button-container">
          <ButtonName name={this.props.listName[0]} onClick={this.props.onClick} />
          <ButtonName name={this.props.listName[1]} onClick={this.props.onClick} />
          <ButtonName name={this.props.listName[2]} onClick={this.props.onClick} />
          <ButtonName name={this.props.listName[3]} onClick={this.props.onClick} />
          <SkipButton life={this.props.life} skip={this.props.skip}/>
        </div>
    );
  }
}
export default CardChoice;
