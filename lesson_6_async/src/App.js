import React, { Component } from 'react';
import News from './components/news/News';
import Search from './components/search/Search';
import { format } from 'prettier';

class App extends Component {
  state = {
    inputValue: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target.elements[0].value);
    const inputValue = evt.target.elements[0].value;
    this.setState({
      inputValue,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <Search onHandleSubmit={this.handleSubmit} value={inputValue} />
        <News inputValue={inputValue} />
      </>
    );
  }
}

export default App;
