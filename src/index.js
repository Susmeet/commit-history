import React from "react";
import ReactDOM from "react-dom";
import DisplayTable from "./components/DisplayTable";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <DisplayTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
