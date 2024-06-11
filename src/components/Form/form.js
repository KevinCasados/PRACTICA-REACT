import React, { Component } from 'react';
import './form.css';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({ item: '' });
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <h2>CREADOR DE LISTAS</h2>
        <input className='input' placeholder='Ingresar item'
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button type="submit">Agregar Item</button>
      </form>
    );
  }
}

export default Form;