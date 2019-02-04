import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

const List = props => (
  <div className="">
    {props.array.map(item => (
      <Item item={item} />
    ))}
  </div>
);
List.propTypes = {};
List.defaultProps = {
  array: [],
};
export default List;
