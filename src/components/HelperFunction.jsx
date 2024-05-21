import RowContainer from "./RowContainer";

function HelperFunction({ data }) {
  if (!data.isFolder) {
    return (
      <div className="inner1">
        <FaFile /> {data.name}
      </div>
    );
  }

  return (
    <div className="inner1">
      <RowContainer />
      <div>
        {data.items &&
          data.items.map((item) => {
            return <HelperFunction data={item} />;
          })}
      </div>
    </div>
  );
}

export default HelperFunction;
