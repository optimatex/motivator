import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChangeValue = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value) {
      this.props.onSubmit(this.state.value);
    }
  };

  render() {
    // const { isLoading, projects } = this.props;

    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChangeValue}
            placeholder="describe your memo"
          />

          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
