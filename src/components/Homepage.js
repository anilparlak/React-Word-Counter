import React from "react";
import Editor from "./Editor";
import Keywords from "./Keywords";

const Homepage = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Word Counter</h1>

        <div className="wrapper">
          <Editor />
          <Keywords />
        </div>
      </div>
    </>
  );
};

export default Homepage;
