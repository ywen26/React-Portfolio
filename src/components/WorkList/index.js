import React from "react";
import "./style.css";

function WorkList() {
    return (
      <div className="d-flex flex-wrap" style={{ width: "100%" }}>
        <div className="work work-1 col-lg-4 mt-5">
          <a href="https://am-white.github.io/Nasa-Search-Engine/">
            <h5 class="title">NASA Image Search Engine</h5>
          </a>
        </div>
        <div className="work work-2 col-lg-4 mt-5">
          <a href="https://ywen26.github.io/Weather-Dashboard/">
            <h5 className="title">Weather Dashboard</h5>
          </a>
        </div>
        <div className="work work-3 col-lg-4 mt-5">
          <a href="https://ywen26.github.io/Code-Quiz/">
            <h5 className="title">Quiz Game</h5>
          </a>
        </div>
        <div className="work work-4 col-lg-4 mt-5">
          <a href="https://sleepy-sea-64053.herokuapp.com/">
            <h5 className="title">Eat Da Burger!</h5>
          </a>
        </div>
        <div className="work work-5 col-lg-4 mt-5">
          <a href="https://oneworldacademy.herokuapp.com/">
            <h5 className="title">One World Academy</h5>
          </a>
        </div>
        <div className="work work-6 col-lg-4 mt-5">
            <h5 className="title">Coming soon...</h5>
        </div>
        <div className="work work-7 col-lg-4 mt-5">
            <h5 className="title">Coming soon...</h5>
        </div>
        <div className="work work-8 col-lg-4 mt-5">
            <h5 className="title">Coming soon...</h5>
        </div>
      </div>
    );
}

export default WorkList;