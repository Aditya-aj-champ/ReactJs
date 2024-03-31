import React, { useState } from "react";
import EmpList from "./EmpList";
import AddEmp from "./AddEmp";

export default function EmpCURD() {
  const initialEmp = [
    { eId: 101, Name: "Sanjay", sal: 10000 },
    { eId: 102, Name: "Ajay", sal: 110000 },
    { eId: 103, Name: "Sharukh", sal: 150000 },
    { eId: 104, Name: "Panveer", sal: 20000 },
    { eId: 105, Name: "Sumit", sal: 12000 },
  ];
  const [employees, setEmployees] = useState(initialEmp); // state variable

  const deleteEmp = (eIDToDel) => {
    const tempArray = employees.filter((emp) => {
      return emp.eId !== eIDToDel;
    });
    setEmployees(tempArray);
  };
  const addEmp = (empObj) => {
    let tempArray = [...employees, empObj];
    setEmployees(tempArray);
  };
  return (
    <>
      <h4 className="text-center bg-primary text-white p-2">CURD Operation</h4>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <EmpList employees1={employees} deleteEmp1={deleteEmp} />
          </div>
          <div className="col-sm-4">
            <AddEmp addEmp={addEmp} />
          </div>
        </div>
      </div>
    </>
  );
}
