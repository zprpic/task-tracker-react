import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let data;
  const handleClick = () => {
    axios.get("http://localhost:5000/tasks").then((response) => {
      const { data } = response;
      console.log(data);
    });
  };

  return (
    <>
      <div>
        <h1>hello world</h1>
        <button onClick={handleClick}>GET</button>
      </div>
    </>
  );
}

export default App;
