import React from "react";
import "./style.css";
import myPicture from "../../images/mypic2.JPG";

function Picture() {
    return (
        <div className="col-lg-5 mt-5 pl-5">
            <img className="pic" alt="Yuwen Yu" src={myPicture} />
        </div>
    );
}

export default Picture;