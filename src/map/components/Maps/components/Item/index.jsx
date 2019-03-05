import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  static propTypes = {};

  handleRemove = () => {
    this.props.onRemove(this.props.item._id);
  };

  render() {
    const { item } = this.props;

    return (
      <div className="">
        {item.Text} <button onClick={this.handleRemove} />
      </div>
    );
  }
}

export default Item;
