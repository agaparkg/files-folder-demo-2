import { useState } from "react";
import RowContainer from "./RowContainer";

function HelperFunction({ data }) {
  const [expand, setExpand] = useState(false);

  //   const toggle = () => console.log("folder");
  const toggle = () => setExpand(!expand);

  if (!data.isFolder) {
    return (
      <div className="inner1">
        <RowContainer name={data.name} type="file" />
      </div>
    );
  }

  return (
    <div className="inner1">
      <RowContainer toggle={toggle} name={data.name} type="folder" />
      <div style={{ display: expand ? "block" : "none" }}>
        {data.items &&
          data.items.map((item) => {
            return <HelperFunction data={item} />;
          })}
      </div>
    </div>
  );
}

export default HelperFunction;
