// slices/recentSearchSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the search item
interface RecentSearch {
  method: string;
  endPoint: string;
}

// Define the initial state
interface RecentSearchState {
  searches: RecentSearch[];
}

const initialState: RecentSearchState = {
  searches: [],
};

const recentSearchSlice = createSlice({
  name: "searches",
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<RecentSearch>) => {
      state.searches.push(action.payload);
    },
  },
});

// Export actions
export const { addSearch } = recentSearchSlice.actions;

// Export the reducer
export default recentSearchSlice.reducer;
