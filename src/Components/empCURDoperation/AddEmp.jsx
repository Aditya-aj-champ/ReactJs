import React, { useState } from "react";
// call it in EmpCURD
export default function AddEmp({ addEmp }) {
  // three state variable for 3 input boxes
  const [empId, setEmpID] = useState(106);
  const [empName, setEmpName] = useState("abcd");
  const [empSalary, setEmpSalary] = useState(1000);

  const addData = (e) => {
    if (e.target.name === "eId") {
      setEmpID(e.target.value);
    } else if (e.target.name === "Name") {
      setEmpName(e.target.value);
    } else {
      setEmpSalary(e.target.value);
    }
  };

  return (
    <>
      <h5 className="text-center bg-light p-2" style={{ marginTop: "13px" }}>
        Add Employee
      </h5>
      <div className="border rounded text-center" style={{ padding: "15px" }}>
        <form>
          <div className="form-group row">
            <label
              htmlFor="colFormLabelLg"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              Eid
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="eId"
                placeholder="Employee Id"
                onChange={addData}
              />
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className="form-group row">
            <label
              htmlFor="colFormLabelLg"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              Name
            </label>
            <div className="col-sm-9">
              <input
                type="string"
                className="form-control"
                name="Name"
                placeholder="Employee Name"
                onChange={addData}
              />
            </div>
          </div>
          {/* -------------------------------- */}
          <div className="form-group row">
            <label
              htmlFor="colFormLabelLg"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              Salary
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control "
                name="eSal"
                placeholder="Employee Salary"
                onChange={addData}
              />
            </div>
          </div>
        </form>
        <button
          className="btn btn-success m-8"
          onClick={() => {
            let empObj = {
              eId: empId,
              Name: empName,
              sal: empSalary,
            };
            addEmp(empObj);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
