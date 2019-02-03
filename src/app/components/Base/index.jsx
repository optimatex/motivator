import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MapsHoc from 'map/components/Maps';
import './style.scss';

class Base extends Component {
  static propTypes = {};

  render() {
    // const {  } = this.props;
    return (
      <div className="">
        <MapsHoc />
      </div>
    );
  }
}

export default Base;
