import React from "react";

function MemoComo2({ name }) {
  // call from MemoComponent1
  return (
    <>
      {console.log("MemoComo2 call...")}
      <h5>This is MemoComo2 Component </h5>
      <p>Name is {name}</p>
    </>
  );
}
export default React.memo(MemoComo2);
// by using the "React.memo(MemoComo2)" we can prevent the re-rendering the comp whose vale is remain same if we cant use the "React.memo(MemoComo2)" than the our "MemoComo2" will always re-rendering that when click on the parent component fun
//memo lets you skip re-rendering a component when its props are unchanged
