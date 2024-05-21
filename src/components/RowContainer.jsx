import React from "react";
import { FaFolder, FaFile } from "react-icons/fa";

function RowContainer({ type, name, toggle }) {
  return (
    <div className="inner2" onClick={toggle ? toggle : null}>
      {type === "folder" ? <FaFolder style={{ color: "red" }} /> : <FaFile />}
      {name}
    </div>
  );
}

export default RowContainer;
