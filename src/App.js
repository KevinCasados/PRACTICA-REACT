import React, { Component } from 'react';
import Header from './components/Header/header';
import Form from './components/Form/form';
import ItemList from './components/ItemList/itemList';
import Footer from './components/Footer/footer';
import './app.css'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item]
    }));
  }

  deleteItem = (index) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item, i) => i !== index)
    }));
  }

  componentDidMount() {
    console.log('App component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      console.log('App component updated - Items length:', this.state.items.length);
    }
  }

  componentWillUnmount() {
    console.log('App component will unmount');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form addItem={this.addItem} />
        <ItemList items={this.state.items} deleteItem={this.deleteItem} />
        <Footer />
      </div>
    );
  }
}

export default App;