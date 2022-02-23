import React, { useState } from "react";
import Form from "./Form";
function App() {
  const [dataArr, setdataArr] = useState([]);

  const searchFunc = (param) => {
    console.log(param);
    fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&search=${param}&format=json&origin=*&limit=20`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res[3]);
        setdataArr(res[3]);
      });
  };

  return (
    <div className="container">
      <h1>Wikipedia Search with Function Component</h1>
      <Form searchFunc={searchFunc} />
      <div className="liste">
        {dataArr?.map((i, index) => (
          <p key={index}>
            <a href={i}>{i}</a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
