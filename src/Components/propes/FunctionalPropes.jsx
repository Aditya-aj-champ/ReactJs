// import React from "react";
import PropsType from "prop-types";
// eslint-disable-next-line react/prop-types
export default function FunctionalPropes({ name, msg }) {
  return (
    <h6>
      Hello,
      <br /> {name}
    </h6>
  );
}
// this propes type that means we have to define the type of vale that we have passing from parent to child
FunctionalPropes.prototype = {
  name: PropsType.string.isRequired,
  msg: PropsType.string.isRequired,
};
