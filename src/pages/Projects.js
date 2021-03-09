import React from "react";
import Row from "../components/Row";
import Work from "../components/WorkList";

function Projects() {
    return (
      <Row>
        <h3 className="col-lg-12 text-center" style={{ marginTop: "20px" }}>
          Explore My Works!
        </h3>
        <Work />
      </Row>
    );
}

export default Projects;

