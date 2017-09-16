import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ResultsList from './ResultsList';

class ResultsPage extends React.Component {
  render() {
    const games = this.props.games;
    return(
      <div className="col-md-12">
        <h1>Games</h1>
        <div className="col-md-4">
          <ResultsList games={games} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    )
  }
};

ResultsPage.propTypes = {
  games: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps)(ResultsPage);
