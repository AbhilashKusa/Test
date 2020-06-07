import React, { useState } from "react";

export default function Formvalidation() {
  const submit=()=>{
    alert(formdata.name);
  }
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
  });

  return (
    <>
      <h3 className="bold pt-3 text-center">ENTER DETAILS</h3>
      <div className="container">
        <div className="form-group">
          <input
            class="form-control m-2"
            type="text"
            placeholder="Type yo see Name✔"
            onChange={(e) => {
              setformdata({
                name: e.target.value,
              });
            }}
          />
          <p className="text-center">{formdata.name}</p>
          <input
            class="form-control m-2"
            type="email"
            placeholder="Enter your 📨 to 👁"
            onChange={(e) => {
              setformdata({
                email: e.target.value,
              });
            }}
          />
          <p className="text-center">{formdata.email}</p>
          <button className="btn btn-success " type="submit" onClick={submit}>SUBMIT</button>
        </div>
      </div>
    </>
  );
}
