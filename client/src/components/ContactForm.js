import React from "react";
import { useFormik } from "formik";
import { emailVars } from "../emailkey/emailkey";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Please fill out this field!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email address is not correct!";
  }
  if (!values.name) {
    errors.name = "Please fill out this field!";
  } else if (values.name.length < 1) {
    errors.name = "Name is too short!";
  }
  if (!values.surname) {
    errors.surname = "Please fill out this field!";
  } else if (values.surname.length < 1) {
    errors.surname = "Last name is too short!";
  }
  if (!values.company) {
    errors.company = "Please fill out this field!";
  } else if (values.company.length < 1) {
    errors.company = "Name is too short!";
  }
  if (values.size === "") {
    errors.company = "Please fill out this field!";
  }
  if (!values.message) {
    errors.message = "Please fill out this field!";
  }
  return errors;
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      company: "",
      message: "",
      email: "",
      size: "",
      addInfo: "",
    },
    validate,
    onSubmit: (values) => {
      init("user_boT2wbyNcmDFmtabg2Uet");
      sendEmail(values);
      formik.resetForm();
    },
  });
  const sendEmail = (values) => {
    emailjs.send(emailVars.SERVICE_ID, emailVars.TEMPLATE_ID, values).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <div className="contact-form-content ">
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div className="form-first-row">
          <div className="form-element login-element">
            <label htmlFor="name">FIRST NAME*</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              className={
                formik.touched.name && formik.errors.name ? "error" : "input"
              }
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error-message">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-element login-element">
            <label htmlFor="surname">LAST NAME*</label>
            <input
              id="surname"
              name="surname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.surname}
              onBlur={formik.handleBlur}
              className={
                formik.touched.surname && formik.errors.surname
                  ? "error"
                  : "input"
              }
            />
            {formik.touched.surname && formik.errors.surname ? (
              <div className="error-message">{formik.errors.surname}</div>
            ) : null}
          </div>
        </div>
        <div className="form-first-row">
          <div className="form-element login-element">
            <label htmlFor="company">COMPANY NAME*</label>
            <input
              id="company"
              name="company"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.company}
              onBlur={formik.handleBlur}
              className={
                formik.touched.company && formik.errors.company
                  ? "error"
                  : "input"
              }
            />
            {formik.touched.company && formik.errors.company ? (
              <div className="error-message">{formik.errors.company}</div>
            ) : null}
          </div>
          <div className="form-element login-element">
            <label htmlFor="size">COMPANY SIZE*</label>
            <select
              id="size"
              name="size"
              onChange={formik.handleChange}
              value={formik.values.size}
              onBlur={formik.handleBlur}
              className={
                formik.touched.size && formik.errors.size ? "error" : "input"
              }
            >
              <option value="" label="Select size" />
              <option value="<=5" label="<=5" />
              <option value="6-10" label="6-10" />
              <option value=">10" label=">10" />
            </select>
            {formik.touched.size && formik.errors.size ? (
              <div className="error-message">{formik.errors.size}</div>
            ) : null}
          </div>
        </div>

        <div className="form-element login-element">
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            name="email"
            type="email"
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
          <label htmlFor="message">MESSAGE*</label>
          <input
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
            className={
              formik.touched.message && formik.errors.message
                ? "error"
                : "input"
            }
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error-message">{formik.errors.message}</div>
          ) : null}
        </div>
        <div className="form-element login-element">
          <label htmlFor="addInfo">ADDITIONAL DETAILS</label>
          <input
            component="textarea"
            id="addInfo"
            name="addInfo"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.addInfo}
            onBlur={formik.handleBlur}
            className={
              formik.touched.addInfo && formik.errors.addInfo
                ? "error"
                : "input"
            }
          />
          {formik.touched.addInfo && formik.errors.addInfo ? (
            <div className="error-message">{formik.errors.addInfo}</div>
          ) : null}
        </div>
        <button className="form-control-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
