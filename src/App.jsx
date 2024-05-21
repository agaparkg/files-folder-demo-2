import "./App.css";
import HelperFunction from "./components/HelperFunction";
import data from "./assets/data";

function App() {
  return (
    <div className="wrapper">
      <HelperFunction data={data} />
    </div>
  );
}

export default App;
