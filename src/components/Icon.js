import React from "react";
import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icons" size="40px" />;
    case "cross":
      return <FaTimes className="icons" size="40px" />;
    default:
      return <FaPen className="icons" size="20px" />;
  }
};

export default Icon;
