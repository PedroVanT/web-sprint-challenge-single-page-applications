import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import PizzaForm from "./components/PizzaForm";
import PizzaCard from "./components/PizzaCard";
import * as yup from "yup";
import formSchema from "./components/formSchema";
import Home from "./Home";

const formInitialValue = {
  name: "",
  size: "",
  pepperoni: false,
  hawaiian: false,
  bbq: false,
  chicken: false,
  textarea: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};

const pizzaInitialValue = [];
const initialDisabled = true;
const App = () => {
  const [formValue, SetFormValue] = useState(formInitialValue);
  const [pizza, setPizza] = useState(pizzaInitialValue);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const pizzaOnChange = (name, value) => {
    SetFormValue({ ...formValue, [name]: value });
  };

  const pizzaSubmit = () => {
    setPizza([...pizza, formValue]);
    SetFormValue(formInitialValue);
  };

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)

      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    SetFormValue({
      ...formValue,
      [name]: value,
    });
  };
  useEffect(() => {
    formSchema.isValid(formValue).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValue]);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link>Help</Link>

      <Route path="/">
        <Home />
      </Route>

      <Route path="/pizza">
        <PizzaForm
          values={formValue}
          update={pizzaOnChange}
          submit={pizzaSubmit}
          errors={formErrors}
          inputChange={inputChange}
          disabled={disabled}
        />
      </Route>

      {pizza.map((order) => (
        <PizzaCard confirmedOrders={order} key={order.name} />
      ))}
    </div>
  );
};
export default App;
