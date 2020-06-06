import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

export default function Formvalidation() {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const validateUserName = async (value) => {
    await sleep(1000);
    if (value !== "bill") {
      setError("username", "validate");
    } else {
      clearError("username");
    }
  };

  return (
    <div className="container">
      <div>
        <form
          className="App"
          onSubmit={handleSubmit(onSubmit)}
          id="formval"
          className="form-group"
        >
          <h1>Sign Up</h1>
          <label>First Name:</label>
          <div className="form-group">
            <input
              className="form-control"
              name="firstName"
              ref={register({
                required: true,
              })}
            />
          </div>
          <ErrorMessage error={errors.firstName} />

          <label>Last Name:</label>
          <div className="form-group">
            <input
              className="form-control"
              name="lastName"
              ref={register({
                required: true,
                minLength: 2,
              })}
            />
          </div>
          <ErrorMessage error={errors.firstName} />

          <label>Gender</label>
          <div className="form-group">
            <select
              name="gender"
              ref={register({
                required: true,
              })}
            >
              <option value="" className="form-control">
                Select...
              </option>
              <option value="male" className="form-control">
                Male
              </option>
              <option value="female" className="form-control">
                Female
              </option>
            </select>
          </div>
          <ErrorMessage error={errors.gender} />

          <label>Username</label>
          <div className="form-group">
            <input
              className="form-control"
              name="username"
              onBlur={(e) => validateUserName(e.target.value)}
              ref={register({
                required: true,
                validate: validateUserName,
              })}
            />
          </div>
          <ErrorMessage error={errors.username} />

          <label>Email</label>
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              ref={register({
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
          <ErrorMessage error={errors.email} />

          <label>Age</label>
          <div className="form-group">
            <input
              className="form-control"
              name="age"
              type="number"
              ref={register({
                required: true,
                min: 18,
              })}
            />
          </div>
          <ErrorMessage error={errors.age} />

          <label>About you</label>
          <textarea name="aboutyou" ref={register} />

          <input
            disabled={isSubmitting}
            type="submit"
            className="form-control bg bg-success text-white"
          />
        </form>
      </div>
    </div>
  );
}
