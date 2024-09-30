import React from "react";
import { useSelector } from "react-redux";
import { Clock, ChevronRight } from "lucide-react";

const RecentSearch = () => {
  const history = useSelector((state: any) => state.recentSearch.searches);

  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case "GET":
        return "bg-blue-500 text-white";
      case "POST":
        return "bg-green-500 text-white";
      case "PUT":
        return "bg-yellow-500 text-white";
      case "DELETE":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-4">
      {/* Separate Heading for Recent Searches */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <Clock className="mr-2" size={20} />
          Recent Searches
        </h2>
      </div>

      {/* History Section with margin and separation */}
      <div className="px-4 pb-4">
        {history.length === 0 ? (
          <div className="text-center text-gray-500">
            No recent searches available.
          </div>
        ) : (
          <div className="space-y-4">
            {" "}
            {/* Apply space between list items */}
            <ul className="divide-y divide-gray-200">
              {history.map((search: any, index: number) => (
                <li
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-150 ease-in-out my-4"
                >
                  <div className="flex items-center p-4 border rounded-md shadow-sm">
                    <span
                      className={`${getMethodColor(
                        search.method
                      )} px-2 py-1 rounded-md text-xs font-bold mr-3`}
                    >
                      {search.method.toUpperCase()}
                    </span>
                    <span className="flex-grow font-mono text-sm text-gray-700">
                      {search.endPoint}
                    </span>
                    <ChevronRight className="text-gray-400" size={18} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentSearch;
