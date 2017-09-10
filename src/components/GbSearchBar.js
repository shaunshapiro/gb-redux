import React from 'react';

class GbSearchBar extends React.Component {
  render() {
    return (
      <div className="searchBox">
        <form ref="searchForm" className="search-form" >
          <input type="text" ref="searchInput" placeholder="search"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
};

export default GbSearchBar;
