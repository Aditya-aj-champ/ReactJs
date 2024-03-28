/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

export default class ClassPropes extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name}, {this.props.msg}
      </div>
    );
  }
}
