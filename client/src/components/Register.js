import React from "react";
import { useFormik } from "formik";
import { auth } from "../firebase/firebase";

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Please fill out this field!";
  } else if (values.password.length < 6) {
    errors.password = "Password is too short!";
  }
  if (!values.confPassword) {
    errors.confPassword = "Please fill out this field!";
  } else if (values.confPassword !== values.password) {
    errors.confPassword = "Passwords are not the same!";
  }
  if (!values.email) {
    errors.email = "Please fill out this field!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email address is not correct!";
  }

  return errors;
};

const Register = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confPassword: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      createUser(values);
    },
  });
  const createUser = async (values) => {
    try {
      const credential = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      console.log(credential);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="login-form-div">
      <main className="login-form-content">
        <div className="login-header">
          <h2>Register</h2>
        </div>
        <span className="horizontal-line">
          <hr></hr>
        </span>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div className="form-element login-element">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className={
                formik.touched.email && formik.errors.email ? "error" : "input"
              }
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-element login-element">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className={
                formik.touched.password && formik.errors.password
                  ? "error"
                  : "input"
              }
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="form-element login-element">
            <input
              id="confPassword"
              name="confPassword"
              type="password"
              placeholder="Repeat password"
              onChange={formik.handleChange}
              value={formik.values.confPassword}
              onBlur={formik.handleBlur}
              className={
                formik.touched.confPassword && formik.errors.confPassword
                  ? "error"
                  : "input"
              }
            />
            {formik.touched.confPassword && formik.errors.confPassword ? (
              <div className="error-message">{formik.errors.confPassword}</div>
            ) : null}
          </div>
          <button className="form-control-button" type="submit">
            Register
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
