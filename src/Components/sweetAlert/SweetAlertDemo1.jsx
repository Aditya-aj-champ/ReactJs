// "sweetalert2" :->  SweetAlert2 is a JavaScript library that provides beautiful, responsive, and customizable alerts. It is a replacement for the standard JavaScript alert() function,SweetAlert2 can be used to create a variety of different types of alerts, including:
// Simple alerts, Confirmation alerts, Prompt alerts, and Custom alerts.
// How to use "Sweetalert2"

// -> install the "sweetalert2"
//  --> npm i sweetalert2
// by going to current terminal file and than import it in child component
//  -->import sweet(any name) from "sweetAlert2";
import React from "react";
import sweet from "sweetAlert2";
export default function SweetAlertDemo1() {
  // 1 st normal alert fun
  const normaljsAlert = () => {
    alert("You click js alert button");
  };
  // 2 nd sweetalert fun
  const setSweetAlertttt = () => {
    sweet.fire("Good job", "You Click on the SweetAlert  Button", "success");
  };

  //  3 rd fun

  const setSweetAlertttt3 = () => {
    sweet.fire("Error", "You Click on the SweetAlert3  Button", "error");
  };
  // for more example with code go to website = > https://sweetalert2.github.io/#examples
  return (
    <>
      <hr />
      <h5>This is sweet alert box from from swal</h5>
      <button onClick={normaljsAlert} className="ms-1">
        Normal Alert
      </button>
      {/* 2nd  */}
      <button onClick={setSweetAlertttt} className="ms-3">
        Sweet Alert{" "}
      </button>
      {/* // 3 rd  */}
      <button onClick={setSweetAlertttt3} className="ms-3">
        SweetAlertError{" "}
      </button>
    </>
  );
}
