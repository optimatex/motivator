import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'map/services/actions';
import * as mapSelectors from 'map/services/selectors';
import FormHoc from '../Form';
import List from './components/List';
import './style.scss';

export class Maps extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    getMaps: PropTypes.func.isRequired,
    addMap: PropTypes.func.isRequired,
    removeMap: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        Text: PropTypes.string,
      }),
    ),
  };

  componentDidMount() {
    this.props.getMaps();
  }

  render() {
    const { isLoading, addMap, removeMap, list } = this.props;

    return (
      <div className="">
        <FormHoc onSubmit={addMap} />

        {!isLoading ? <List array={list} onRemove={removeMap} /> : '...Loading'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: mapSelectors.getIsLoadingList(state),
  list: mapSelectors.getMapsList(state),
});

const mapDispatchToProps = dispatch => ({
  getMaps: bindActionCreators(actions.getMaps, dispatch),
  addMap: bindActionCreators(actions.addMap, dispatch),
  removeMap: bindActionCreators(actions.removeMap, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
