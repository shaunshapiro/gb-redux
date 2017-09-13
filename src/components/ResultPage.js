import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class ResultPage extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.game.name}</h1>
        <img src={this.props.game.image} alt={this.props.game.name} height="400" width="400" />
      </div>
    )
  }
}

ResultPage.propTypes = {
  game: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let game = {name: '', image: ''};
  const gameId = parseInt(ownProps.params.id);
  if (state.games.length > 0 ) {
    game = Object.assign({}, state.games.find(game => game.id === gameId));
  }
  return {game: game};
};

export default connect(mapStateToProps)(ResultPage);
