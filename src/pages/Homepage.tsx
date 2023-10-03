import React, { useState, useEffect } from "react";
import axios from "axios";
import IPicture from "../interface/IPicture";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState<IPicture[]>([]);
  const authKey = "VWNxSyMOJbaY4IG26sFJGzvKYaWzuyaQNYjvx8TQXLDfpsMGf45yaTkT";

  const handleSearch = async (searchTerm: string) => {
    const data = await axios.get(
      `https://api.pexels.com/v1/search?query=${searchTerm}&page=1&per_page=15`,
      {
        headers: {
          Authorization: authKey,
        },
      }
    );
    setPictures(data.data.photos);
  };

  const getCuratedPics = async (pageNum: number) => {
    const data = await axios.get(
      `https://api.pexels.com/v1/curated?page=${pageNum}&per_page=15`,
      {
        headers: {
          Authorization: authKey,
        },
      }
    );
    setPictures(data.data.photos);
  };

  useEffect(() => {
    getCuratedPics(1);
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-178px)]">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchHandler={handleSearch}
      />

      <div className="flex flex-wrap items-center justify-center mt-10 mx-20">
        {pictures &&
          pictures.map((pic) => <Picture key={pic.id} picture={pic} />)}
      </div>
    </div>
  );
};

export default Homepage;
