// In this class component i have create a class function i.e (increment () fun) and try to print the count value on screen (re-render) but i cant be able to re-render the count value on screen it only print in console, because i can't ue the SATE object when we use STATE object in our component than we can update or re-render the our normale variable vale or class variable value on screen .

// Normale class component

//import React, { Component } from "react";
// export default class SateInClassComp extends Component {
//   count = 0; // class variable
//   increment = () => {
//     this.count++;
//     console.log(this.count);
//   };
//   render() {
//     return (
//       <>
//         <h5>This is class component try to re-render the class variable but it cant possible without state object </h5>
//         <div>
//           Counter is : {this.count}
//           <button onClick={this.increment}>Increment</button>
//         </div>
//       </>
//     );
//   }
// }
// -------------------------------------------------------------------------------------------
// using STATE class object to re- render the  class or normale variable value on the screen.
import React, { Component } from "react";

export default class SateInClassComp extends Component {
  state = {
    count: 0, // a state variable that have value is 0
  };
  increment = () => {
    // To update the count value we setState() method which is predefine
    let NewStates = { count: this.state.count + 1 };
    this.setState(NewStates, () => {
      console.log(this.state.count);
    });
    //    OR
    // this.setState({ count: this.state.count + 1 });
    // console.log(this.state.count);
  };
  // here is decrement fun
  decrement = () => {
    if (this.state.count == 0) {
      return this.count;
    }
    let NewStates = { count: this.state.count - 1 };
    // setState is asynchronous (synchronous refers to a blocking architecture where each operation depends on the previous one. Asynchronous refers to a non-blocking architecture where tasks can run simultaneously) so, we cant get the update value on console so i using a call by function for print the update value on console.
    this.setState(NewStates, () => {
      console.log(this.state.count);
    });
  };
  render() {
    return (
      <>
        <h5>
          This is class component try to re-render the class variable Using
          state object
        </h5>
        <div>Count value is: {this.state.count}</div>
        <button onClick={this.increment}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}
