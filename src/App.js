import React, { Component } from 'react';
//import './App.css';
//import FilmInfo from './components/FilmInfo';
//import Films from './components/Films'
import Header from './components/Header'
import Results from './components/Results'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
         <header className="App-header bg-success" >
          <h1 className="App-title bg-">Reacting to APIs</h1>
        </header> 
        </div>
        <div className=" bg-danger">
          <Header />
          <Results />

        </div>
        <div>
         
        </div>
        
      </React.Fragment>
    );
  }
}

export default App;
