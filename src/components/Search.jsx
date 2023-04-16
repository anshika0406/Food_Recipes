import React from "react";
import { useState } from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
    //console.log(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchText);
    navigate("/searched/" + searchText);
    setSearchText("");
  }

  return (
    <div className="centring">
      <div className="box">
        <BsFillSearchHeartFill />
        <form onSubmit={handleSubmit}>
          <input
            className="textInput"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
