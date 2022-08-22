import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import {useSelector, useDispatch} from "react-redux";
import {createUserStart, updateUserStart} from "../redux/actions"

const AddEdit = () => {
  const values = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };
  const [formValue, setFormValue] = useState(values);

  const { contacts: data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const { fullName, mobile, email, address } = formValue;

  const currentId = useParams();
  const history = useHistory();

  const { id } = currentId;

  useEffect(() => {
    if (isEmpty(id)) {
      setFormValue({ ...values });
    } else {
      setFormValue({ ...data[id] });
    }
  }, [id, data]);

  const onChange = (e) => {
    let { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e, obj) => {
    e.preventDefault();
    if (isEmpty(id)) {
      dispatch(createUserStart(formValue))
    } else {
      dispatch(updateUserStart({ formValue, id }));
    }
    history.push("/");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="bmd-label-floating">Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={fullName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Mobile</label>
              <input
                type="number"
                className="form-control"
                name="mobile"
                value={mobile}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={address}
                onChange={onChange}
              />
            </div>
            <button className="btn btn-default">Cancel</button>
            <button type="submit" className="btn btn-success btn-raised">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEdit;
