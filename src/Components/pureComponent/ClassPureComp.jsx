import React, { Component, PureComponent } from "react";

export default class ClassPureComp extends PureComponent {
  state = {
    name: "Aditya",
  };
  changeName = () => {
    this.setState({ name: "Adi" }); // if the state variable value is same the re-render method is not call in "PureComponent" (is is predefine class or keyword) if we use the only "Component" method than re-render is always call is the state variable same or different . that is the main different between component or PureComponent Class .
  };
  render() {
    console.log("Render method is call... for classPureComponent");
    return (
      <>
        <h5>This is the example of class pure component </h5>
        <div className="ms-3">
          <p>Name = {this.state.name}</p>
          <button className="btn btn-primary" onClick={this.changeName}>
            Change Name
          </button>
        </div>
      </>
    );
  }
}
