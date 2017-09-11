import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as gbActions from '../actions/gbActions';
import ResultItem from './ResultItem';

class ResultPage extends React.Component {
  render() {
    return(
      <div className="col-md-12">
        <h1>Games</h1>
        <div className="col-md-4">
          <ResultItem games={this.props.games} />
        </div>
      </div>
    )
  }
};

ResultPage.propTypes = {
  games: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps)(ResultPage);
