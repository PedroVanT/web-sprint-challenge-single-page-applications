import React from "react";

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
    <form onSubmit={onSubmit}>
      <label>
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

      <label>
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
      <h3>choose your toppings</h3>

      <label>
        Pepperoni
        <input
          type="checkbox"
          name="pepperoni"
          //   id="pepperoni"
          checked={values.pepperoni}
          onChange={onChange}
        />
      </label>

      <label>
        Hawaiian
        <input
          type="checkbox"
          name="hawaiian"
          //   id="hawaiian"
          checked={values.hawaiian}
          onChange={onChange}
        />
      </label>

      <label>
        BBQ Meatlovers
        <input
          type="checkbox"
          name="bbq"
          //   id="bbq"
          checked={values.bbq}
          onChange={onChange}
        />
      </label>

      <label>
        Chicken
        <input
          type="checkbox"
          name="chicken"
          //   id="chicken"
          checked={values.chicken}
          onChange={onChange}
        />
      </label>

      <label>
        special instructions:
        <input
          name="textarea"
          type="text"
          //   id="textarea"
          value={values.textarea}
          onChange={onChange}
        />
      </label>
      <button disabled={disabled}> Order !</button>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
      </div>
    </form>
  );
}
