import React from "react";
// import styled from "styled-components";

export default function PizzaCard(props) {
  const {
    name,
    size,
    pepperoni,
    hawaiian,
    bbq,
    chicken,
    textarea,
  } = props.confirmedOrders;
  return (
    <div>
      <h1> Name: {name}</h1>
      <div>Size: {size} </div>
      <h2>
        {pepperoni && hawaiian && bbq && chicken === "" ? "Toppings:" : ""}
      </h2>

      <ul>{pepperoni ? "pepperoni" : ""}</ul>
      <ul>{hawaiian ? "hawaiian" : ""}</ul>
      <ul>{bbq ? "bbq" : ""}</ul>
      <ul>{chicken ? "chicken" : ""}</ul>

      <div>{textarea === "" ? "" : `Special Instructions: ${textarea}`}</div>
    </div>
  );
}
