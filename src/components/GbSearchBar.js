import React from 'react';
import {loadGames} from '../actions/gbActions';

class GbSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.loadGames = loadGames.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault;
    this.loadGames(this.refs.searchInput.value);
  }

  render() {
    return (
      <div className="searchBox">
        <form ref="searchForm" className="search-form" onSubmit={this.handleSubmit.bind(this)} >
          <input type="text" ref="searchInput" placeholder="search"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
};

export default GbSearchBar;
