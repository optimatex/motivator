import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMaps } from 'map/services/actions';
import * as mapSelectors from 'map/services/selectors';

import './style.scss';

export class Maps extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    getMaps: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getMaps();
  }

  render() {
    // const { isLoading, projects } = this.props;

    return <div className="">Maps</div>;
  }
}

const mapStateToProps = state => ({
  isLoading: mapSelectors.getIsLoadingList(state),
});

const mapDispatchToProps = dispatch => ({
  getMaps: bindActionCreators(getMaps, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
