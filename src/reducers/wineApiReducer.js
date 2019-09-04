const wineApiReducer = (state, action) => {
  switch (action.type) {
    case "GET_BEGIN":
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case "GET_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    case "GET_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return { ...state };
  }
};

export default wineApiReducer;
