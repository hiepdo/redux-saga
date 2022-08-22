import React, { useCallback, useState } from "react";
import FilterRecord from "./editUsers";
import { createSelector } from "reselect";

const getContacts = (state) => state.data.contacts

export const getUsers = createSelector(getContacts, contacts => contacts);

export const ListRecord = () => {
    
    const [name, setName] = useState("")
    const onChange = (e) => {
        let { value } = e.target;
        setName(value);
    };

    const filterName = useCallback((name) => {
        return Object.fromEntries(Object.entries(getUsers).filter(([id]) => getUsers[id].fullName.include(name)))
    }, [name]); 

  return (
    <>
      <div className="container-fluid mt-5">
        <input
            type="text"
            className="form-control"
            name="filterName"
            value={name}
            onChange={onChange}
        />
        <div className="row">
          <div className="col-lg-12">
           
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(filterName).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{filterName[id].fullName}</td>
                      <td>{filterName[id].mobile}</td>
                      <td>{filterName[id].email}</td>
                      <td>{filterName[id].address}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <FilterRecord />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;
