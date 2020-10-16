import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/pizza">Make Order</Link>
      </nav>
    </div>
  );
};

export default Home;
