import React from "react";
import { FaFolder, FaFile } from "react-icons/fa";

function RowContainer() {
  return (
    <div className="inner2">
      <FaFolder style={{ color: "red" }} /> {data.name}
    </div>
  );
}

export default RowContainer;
