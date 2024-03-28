/* eslint-disable react/jsx-key */
// import React from "react";
import JSONDATA from "./JSONDATA.json";
export default function UserList() {
  // eslint-disable-next-line react/jsx-key
  // Dynamically creating table heading
  const tableHeading = Object.keys(JSONDATA[0]).map((key, ind) => (
    <th key={ind}>{key}</th>
  ));
  return (
    <>
      <h6 className="text-center bg-primary  text-white p-3">
        Renderning json data
      </h6>
      <div className="table-responsive">
        <table className="table table-bordered table-striped ">
          <thead>
            <tr>{tableHeading}</tr>
          </thead>
          <tbody>
            {JSONDATA.map((data, ind) => {
              return (
                <tr key={ind}>
                  {/* <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.username}</td>
                  <td>{data.website}</td> */}
                  {/* or another way print dynamic data */}
                  {Object.values(data).map((val, ind) => {
                    return <td key={ind}>{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
