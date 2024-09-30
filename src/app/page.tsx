// app/page.tsx
"use client";

import { useDispatch } from "react-redux";
import Header from "./common/Header";
import SearchBar from "./common/SearchBar";
import { addSearch } from "./slices/recentSearchSlice";
import { SearchData } from "./types/types";
import RecentSearch from "./common/RecenetSearch";

export default function Home() {
  const dispatch = useDispatch();

  const handleSearchBar = (method: string, str: string) => {
    const searchData: SearchData = {
      method: method,
      endPoint: str,
    };
    dispatch(addSearch(searchData));
  };

  return (
    <div className="overflow-hidden h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl">
          <SearchBar onSearch={handleSearchBar} />
          <RecentSearch />
        </div>
      </div>
    </div>
  );
}
