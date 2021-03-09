import React from "react";
import "./style.css";

function WorkList() {
    return (
      <div className="d-flex flex-wrap" style={{ width: "100%" }}>
        <div className="work work-1 col-lg-4 mt-5">
          <h5 className="title title-1">NASA Image Search Engine</h5>
          <a href="https://am-white.github.io/Nasa-Search-Engine/">
            <h6 className="title title-1">Deploy Link</h6>
          </a>
          <a href="https://github.com/Am-White/Nasa-Search-Engine">
            <h6 className="title">Repository</h6>
          </a>
        </div>

        <div className="work work-2 col-lg-4 mt-5">
          <h5 className="title title-1">Weather Dashboard</h5>
          <a href="https://ywen26.github.io/Weather-Dashboard/">
            <h6 className="title title-1">Deploy Link</h6>
          </a>
          <a href="https://github.com/ywen26/Weather-Dashboard">
            <h6 className="title">Repository</h6>
          </a>
        </div>

        <div className="work work-3 col-lg-4 mt-5">
          <h5 className="title title-1"> Quiz Game</h5>
          <a href="https://ywen26.github.io/Code-Quiz/">
            <h6 className="title title-1">Deploy Link</h6>
          </a>
          <a href="https://github.com/ywen26/Code-Quiz">
            <h6 className="title">Repository</h6>
          </a>
        </div>

        <div className="work work-4 col-lg-4 mt-5">
          <h5 className="title title-1">Eat Da Burger!</h5>
          <a href="https://sleepy-sea-64053.herokuapp.com/">
            <h6 className="title title-1">Deploy Link</h6>
          </a>
          <a href="https://github.com/ywen26/Eat-Da-Burger">
            <h6 className="title">Repository</h6>
          </a>
        </div>

        <div className="work work-5 col-lg-4 mt-5">
          <h5 className="title title-1">One World Academy</h5>
          <a href="https://oneworldacademy.herokuapp.com/">
            <h6 className="title title-1">Deploy Link</h6>
          </a>
          <a href="https://github.com/TaaniBravo/One-World-Academy">
            <h6 className="title">Repository</h6>
          </a>
        </div>

        <div className="work work-6 col-lg-4 mt-5">
          <h5 className="title title-1">Employee Directory</h5>
          <a href="https://ywen26.github.io/Employee-Directory/?employees=#/">
            <h6 className="title title-1">Deploy Link</h6>
          </a>
          <a href="https://github.com/ywen26/Employee-Directory">
            <h6 className="title">Repository</h6>
          </a>
        </div>

        <div className="work work-7 col-lg-4 mt-5">
            <h5 className="title title-1">Coming soon...</h5>
        </div>
        <div className="work work-8 col-lg-4 mt-5">
            <h5 className="title title-1">Coming soon...</h5>
        </div>
      </div>
    );
}

export default WorkList;