import React, { useState } from "react";
import "../Component/HomeStyles.css";

const Home = () => {
  return (
    <div className="container">
      {/* webpage heading */}
      <div className="heading">
        <h1>Webpage Scrapper</h1>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Enter or Paste URL"
        />
        <button className="btn">Submit</button>
      </div>
    </div>
  );
};

export default Home;
