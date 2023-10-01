import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    console.log("here:", searchTerm);
  };

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <p className="py-6 text-center font-bold text-2xl">
        Find the picture you want!
      </p>
      <form className="flex items-center justify-center ">
        <input
          type="search"
          value={searchTerm}
          placeholder="Keyword"
          className="border-l border-t border-b border-solid border-blue-400/60 rounded-tl-lg rounded-bl-lg p-3"
          onChange={handleSearchTermChange}
        />
        <button
          onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
            handleSearch(e)
          }
          className="bg-blue-400 border border-solid border-blue-400 rounded-tr-lg rounded-br-lg text-white text-center font-bold p-[15.25px] h-full"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
