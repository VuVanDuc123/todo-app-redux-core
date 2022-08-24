const initialState = {
  search: "",
  status: "All",
  priorities: [],
};
const filtersReducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/statusFilterChanges":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/priorityFilterChanges":
      return {
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
