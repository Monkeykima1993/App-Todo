import React from "react";
import "../../styles/App.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className='events'>
      <Link className='events__link' to='/tasks'>
        События
      </Link>
    </section>
  );
};

export default Main;
