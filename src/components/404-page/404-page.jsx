import React from "react";
import {Link} from "react-router-dom";

const styles = {
  width: `80%`,
  margin: `0 auto`,
  h1: {
    color: `blue`,
    textDecoration: `underline`
  }
};

export const PageNotFound = () => {
  return (
    <div style = {styles}>
      <h1>Page not found</h1>
      <Link style = {styles.h1} to = "/">Go to main page</Link>
    </div>
  );
};
