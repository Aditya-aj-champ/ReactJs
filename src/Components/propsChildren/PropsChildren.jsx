import React, { Component } from "react";

// this Component render in the center component

export default function PropsChildren(props) {
  return (
    <>
      <h6>This is a props.children Component States component</h6>
      <h5>{props.children}</h5>
    </>
  );
}
