import React, { useState } from "react";

const Form = (props) => {
  const [searchWord, setSearchWord] = useState("");

  const handleData = (e) => {
    e.preventDefault();
    props.searchFunc(searchWord);
    setSearchWord(" ");
  };
  return (
    <div>
      <form onSubmit={handleData}>
        <input
          id="search"
          name="search"
          type="text"
          onChange={(e) => setSearchWord(e.target.value)}
          value={searchWord}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
