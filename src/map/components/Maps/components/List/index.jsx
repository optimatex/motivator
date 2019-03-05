import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

const List = props => (
  <div className="">
    {props.array.map(item => (
      <Item item={item} onRemove={props.onRemove} key={item._id} />
    ))}
  </div>
);

List.propTypes = {
  array: PropTypes.arrayOf(PropTypes.shape({})),
  onRemove: PropTypes.func.isRequired,
};
List.defaultProps = {
  array: [],
};
export default List;
