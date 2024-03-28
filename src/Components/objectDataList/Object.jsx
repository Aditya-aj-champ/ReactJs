// import React from 'react'

export default function Object() {
  let employees = [
    { eId: 101, name: "Sanjan", sal: 5000 },
    { eId: 102, name: "Deepak", sal: 6000 },
    { eId: 103, name: "Ajay", sal: 8000 },
    { eId: 104, name: "Ramesh", sal: 9000 },
  ];
  return (
    <>
      <h1 className="text-center bg-primary text-white">
        How to display the object data :{" "}
      </h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>E_Id</th>
            <th>E_Name</th>
            <th>E_Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, ind) => {
            return (
              <tr key={ind}>
                <td>{emp.eId}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
