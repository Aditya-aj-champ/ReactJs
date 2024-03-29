import React, { useState } from "react";

export default function ShowHidePassword() {
  const [flag, setflag] = useState(true);
  const setflag1 = () => {
    setflag(!flag);
  };
  return (
    <>
      <h5>
        Using functional State object we can create a function that work to show
        or hide the password
      </h5>
      <div>
        <input type={flag ? "password" : "text"} className="ms-1" />
        {/* <button onClick={setflag1} className="ms-1">
          {flag ? "Show" : "Hide"}Password
        </button> */}
        {/* ---------------OR------------------------------ */}
        <input type="checkbox" onClick={setflag1} className="ms-1" />
        {flag ? "Show" : "Hide"}Password
      </div>
    </>
  );
}
