import React from "react";
// Call it in EpmCURD
export default function EmpList({ employees1, deleteEmp1 }) {
  return (
    <>
      <h5 className="text-center bg-light p-2" style={{ marginTop: "13px" }}>
        Employee List/Table
      </h5>
      <table className="table table-bordered table-striped">
        <thead className="text-center">
          <tr>
            <th>Eid</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employees1.map((emp, ind) => {
            return (
              <tr key={ind}>
                <td>{emp.eId}</td>
                <td>{emp.Name}</td>
                <td>{emp.sal}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmp1(emp.eId)}
                  >
                    DEL
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
