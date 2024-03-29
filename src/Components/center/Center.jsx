// import React from "react";

import FunctionalPropes from "../propes/FunctionalPropes";
import MyModel from "../propsChildren/MyModel";
import PropsChildren from "../propsChildren/PropsChildren";
import SateInClassComp from "../stateInReact/SateInClassComp";
import ShowHidePassword from "../stateInReact/ShowHidePassword";
import StateFunComp from "../stateInReact/StateFunComp";
import SweetAlertDemo1 from "../sweetAlert/SweetAlertDemo1";

export default function Center() {
  return (
    <>
      <hr />
      <p>Center</p>

      <PropsChildren>
        This is propes.children component control by parent component i.e center
        component, also we can render any" div html element, reactComponent,
        function Dynamic.
      </PropsChildren>

      <MyModel>
        {" "}
        This is props.children mode Example the text content is control by the
        parent component & this parent control is called as propes.childe method
        or we pass any data component{" "}
      </MyModel>
      <hr />
      <FunctionalPropes name="Aditya" msg="Good Evening" />
      <hr />
      <SateInClassComp />
      <hr />
      <StateFunComp />
      <hr />
      <ShowHidePassword />
      <SweetAlertDemo1 />
    </>
  );
}
