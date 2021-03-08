import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./style.css";

function ContactList() {
    return (
      <div className="contact-list">
        <a className="icon" href="//#region" target="_black">
          <FontAwesomeIcon icon={faPhone} /> (206)235-1576
        </a>
       
        <a className="icon" href="https://www.gmail.com" target="_black">
          <FontAwesomeIcon icon={faEnvelope} /> yensonyu@gmail.com
        </a>

        <a className="icon" href="https://github.com/ywen26" target="_black">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        
        <a className="icon" href="https://www.linkedin.com/in/yuwen-yu-99319a7b/" target="_black">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    );
}

export default ContactList;