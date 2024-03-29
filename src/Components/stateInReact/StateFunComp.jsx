import React, { useEffect, useState } from "react";

export default function StateFunComp() {
  // How to declare a state variable
  let [counter, setCountt] = useState(0); // this is state object variable in fun comp
  // we use the "useState(0)" method which take the initial value i.e in my case is 0 like "useState(0)" & it will return a array with two value "let [ counter,SetCountt]" first one is counter variable & 2nd one is a function l.e setCountt(can be any name) inside the setCountt fun we update the counter value increase by 1. ex :- let [counter, setCountt] = useState(0);
  const increment = () => {
    setCountt(counter + 1);
    //console.log(counter);
    useEffect(() => {
      console.log(counter);
    });
  };
  // Here is decrement fun
  const decrement = () => {
    if (counter == 0) {
      return counter;
    }
    setCountt(counter - 1);
    //console.log(counter);
  };
  return (
    <>
      <h5>This is sate object functional component</h5>
      <div>Counter value is : {counter}</div>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}> Decrement</button>
    </>
  );
}
