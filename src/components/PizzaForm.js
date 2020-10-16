import React from "react";
import styled from "styled-components";
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  margin-bottom: 5%;
  background: #e03019;
  margin-left: 20%;
  margin-right: 20%;
  padding-left: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
  color: white;
  border: 4px solid black;
  font-weight: 1000;

  button {
    justify-content: center;
  }
  h3 {
    color: black;
    font-weight: 250;
    font-size: 1.85rem;
    margin-top: 5.5%;
    margin-bottom: 3.5%;
    /* justify-content: center; */
  }
  .button {
    width: 30%;
    margin-left: 25%;
    margin-top: 3%;
  }
  .special,
  .name,
  .size,
  .pep,
  .haw,
  .bbq,
  .chi {
    margin-top: 2%;
  }
  h1 {
    font-weight: 350;
  }
`;

export default function Form({
  values,
  update,
  submit,
  errors,
  inputChange,
  disabled,
}) {
  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    type === "checkbox" ? update(name, checked) : update(name, value);
    type === "checkbox" ? inputChange(name, checked) : inputChange(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      <h1>Create Your Pizza!</h1>
      <label className="name">
        Name:
        <input
          type="text"
          name="name"
          //   id="name"
          placeholder="Enter Your Name"
          value={values.name}
          onChange={onChange}
        />
      </label>

      <label className="size">
        Pizza size:
        <select
          type="text"
          //   id="size"
          name="size"
          value={values.size}
          onChange={onChange}
        >
          <option value="">Choose pizza size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <h3>Choose Your Toppings!</h3>

      <label className="pep">
        Pepperoni
        <input
          type="checkbox"
          name="pepperoni"
          checked={values.pepperoni}
          onChange={onChange}
        />
      </label>

      <label className="haw">
        Hawaiian
        <input
          type="checkbox"
          name="hawaiian"
          checked={values.hawaiian}
          onChange={onChange}
        />
      </label>

      <label className="bbq">
        BBQ Meatlovers
        <input
          type="checkbox"
          name="bbq"
          checked={values.bbq}
          onChange={onChange}
        />
      </label>

      <label className="chi">
        Chicken
        <input
          type="checkbox"
          name="chicken"
          checked={values.chicken}
          onChange={onChange}
        />
      </label>

      <label className="special">
        special instructions:
        <input
          name="textarea"
          type="text"
          value={values.textarea}
          onChange={onChange}
        />
      </label>
      <button className="button" disabled={disabled}>
        Order!
      </button>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
      </div>
    </FormStyled>
  );
}
