import React from "react";

const TestimonialsItem = (props) => {
  return (
    <div className="testimonials-item">
      <img className="test-image" src={props.photo} alt="cfx logo"></img>
      <h3>{props.name}</h3>
      <p>{props.company}</p>
      <p>{props.desc}</p>
    </div>
  );
};

export default TestimonialsItem;
