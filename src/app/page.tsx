"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import SearchBar from "./common/SearchBar";
import { addSearch } from "./slices/recentSearchSlice";
import { SearchData } from "./types/types";
import RecentSearch from "./common/RecenetSearch";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize useRouter

  const handleSearchBar = (method: string, str: string) => {
    const searchData: SearchData = {
      method: method,
      endPoint: str,
    };

    dispatch(addSearch(searchData)); // Dispatch the search action

    // Navigate to the endpoint, making sure to include the method if needed
    router.push(`/${str}`); // Modify this based on your URL structure
  };

  return (
    <div className="overflow-hidden h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl">
          <SearchBar onSearch={handleSearchBar} />
          <RecentSearch />
        </div>
      </div>
    </div>
  );
}
