import React from "react";

import "./NameForm.css";

class NameForm extends React.Component {
  state = {
    name: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const{name} = this.state;
    localStorage.setItem('name', name);
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  componentDidMount () {
    const name = localStorage.getItem('name');
    this.setState({name : name});
  }

  render() {
    return (
      <div className='name-form-container'>
        <form className="my-name" onSubmit={this.handleSubmit}>
          <h2>Enter allias</h2>
          <input
            placeholder="Superhero"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default NameForm;
