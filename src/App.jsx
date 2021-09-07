import React, { useState } from "react";
import Article from "./Article";

function App() {
  function createMarkup() {
    return { __html: "First &middot; Second" };
  }

  return (
    <div className=" bg-gray-100 text-gray-600 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-start w-100 my-5 px-3 text-2xl font-semibold">
        Find Term and Dictinary
      </h1>
      <div className="relative bg-white w-100 h-12 text-md rounded-lg">
        <span className="absolute top-3 left-5 text-blue-500 text-lg">
          <i className="fas fa-search"></i>
        </span>
        <input
          className="absolute top-2 right-2 p-1 px-2 rounded-lg w-11/12"
          type="text"
          placeholder="Search the term in article"
        ></input>
      </div>
      <article className="bg-white rounded-lg my-4 w-100 leading-10 p-6">
        {Article}
      </article>
    </div>
  );
}

export default App;
