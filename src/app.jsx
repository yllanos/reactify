import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
  render() {
    var message = 'Hello World!';
    return (
      <h1>{message}</h1>
    );
  }
}

render(<App />, document.getElementById('root'));
