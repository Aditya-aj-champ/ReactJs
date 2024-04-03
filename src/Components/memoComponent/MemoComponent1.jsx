import React, { useState } from "react";
import MemoComo2 from "./MemoComo2";

export default function MemoComponent1() {
  // call through center component

  // state variable
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Aditya");
  const changName = () => {
    setName("Adi");
  };
  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h5>This is From MemoComponent1 </h5>
      <div>
        <p>MemoComponent1 is the Parent Component for the "MemoComo2" </p>
        <div>Count is {count}</div>
        <button onClick={Increment}>Increment</button>
        <button onClick={changName}>Change Name</button>
      </div>
      <MemoComo2 name={name} />
    </>
  );
}
