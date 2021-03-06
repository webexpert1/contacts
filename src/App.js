import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';

import { Provider } from './Context';


class App extends Component {
   
  render() {
    return (
     <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
            <Contacts />
          
        </div>
     </div>
     </Provider>
    )
  }
}

export default App;

