import React from "react";
import "./Home.style.scss";
import {Jumbotron, Button} from "react-bootstrap"

export const Home = () => {
  return (
    <>
      <div className="jumbotron animated fadeIn">
        <h1>Hello, Home!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
    </>
  );
};
