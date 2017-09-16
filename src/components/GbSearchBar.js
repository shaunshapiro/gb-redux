import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gbActions from '../actions/gbActions';

class GbSearchBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {search: this.props.search};
  }

  // componentWillReceiveProps(nextProps) {
  //   debugger;
  //   if (this.props.search !== nextProps.search) {
  //     this.setState({search: nextProps.search});
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.state = { search: this.refs.searchInput.value };
    if (this.state.search.length > 0) {
      this.props.actions.loadGames(this.state.search);
    }
  }

  render() {
    return (
      <div className="searchBox">
        <form ref="searchForm" className="search-form" onSubmit={this.handleSubmit} >
          <input type="text" ref="searchInput" placeholder="search"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
};

GbSearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, OwnProps) {
  let search = '';
  if (state.search && state.search.length > 0) {
    search = state.search
  }
  return {search: search}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gbActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(GbSearchBar);
