import React, { PropTypes } from 'react';
import logo from '../logo.svg';
import '../App.css';
import GbSearchBar from './GbSearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to GBSearch</h2>
        </div>
        <GbSearchBar />

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
