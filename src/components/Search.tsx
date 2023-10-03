import React from "react";

type Props = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchHandler: (message: string) => void;
};

const Search: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  searchHandler,
}) => {
  const handleSearch = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      return;
    }
    searchHandler(searchTerm);
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
