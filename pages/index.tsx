import Cards from "@/components/Cards";
import { useDebouncedValue } from "@mantine/hooks";
import React, { useEffect, useState } from "react";

type Movies = {
  Search: { Title: string; Year: string; Poster: string }[];
  totalResults: string;
  Response: string;
};
const Index = () => {
  const [movies, setMovies] = useState <Movies| null>(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [debounced] = useDebouncedValue(search, 700);
  const getMovies = async (title: any) => {
    try {
      const response = await fetch(
        // Fetching api
        `${process.env.NEXT_PUBLIC_BASE_URL}&s=${title}`
      );
      const data = await response.json();
      // working with the fetched api
      if (data?.Error) {
        setError(data?.Error);
        setSearch("");
      } else {
        setMovies(data);
        console.log(data);
        setSearch("");
        setError("");
      }
      // catching error
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (debounced) {
      getMovies(debounced);
    }
  }, [debounced]);

  return (
    <div className="">
      <h1 className="text-[#905C53] text-7xl text-center mt-8 pt-8 max-[400px]:text-[24px]">
        MovieLand
      </h1>

      <div className="relative w-[70vw] mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for movies"
          className="bg-[#202124] block text-white w-[60vw] mx-auto mt-12 py-5 px-10 rounded-[30px] border-none shadow-hamburger placeholder:text-white  "
        />
        <svg
          className="absolute top-[20px] right-[5.25rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#905C53"
            d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
          ></path>
        </svg>
      </div>
      <p className="text-white">{movies?.totalResults}</p>

      <section className="w-[80vw] grid grid-cols-[1fr_1fr_1fr]  mt-20 mx-auto justify-between gap-[20px] max-[1175px]:grid-cols-[1fr_1fr] max-[746px]:grid-cols-1 ">
        {movies?.Search?.map((item, index) => (
          <Cards props={item} key={index} />
        ))}
        {error ? <p className="text-center text-white ">{error}</p> : null}
      </section>
    </div>
  );
};

export default Index

// http://www.omdbapi.com/?i=tt3896198&apikey=
// 1962bf49
