import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  static propTypes = {};

  render() {
    const { Text } = this.props;

    return <div className="">{Text}</div>;
  }
}

export default Item;
