import React from "react";
import "./style.css";

function Introduction() {
  return (
    <div className="col-lg-7 mt-5 pl-5">
      <h3>About Me</h3>
      <div className="intro">
        <p>
          Welcome to my web page! This is Yuwen and currently I am a boot camp student 
          earning coding skills of full stack development. I am actively seeking career 
          opportunities as full stack developer and preparing to apply master degree in 
          the fields of web development at the same time. I am going to share all my 
          exciting projects work here and will keep update any time as my work in progress.
        </p>
        <p>
          In my spare time, I would like to visit some beautiful views and do photography.
          I am living in Seattle now and hiking is one of my favorite activities during 
          summer.If I have vacation then I would always enjoy to travel and experience the 
          different cultures. It's the best way to recharge me with full power before 
          returning to daily work!
        </p>
      </div>
    </div>
  );
}

export default Introduction;