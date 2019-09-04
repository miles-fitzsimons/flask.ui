const dataApiReducer = (state, action) => {
  switch (action.type) {
    case "POST_BEGIN":
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case "POST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    case "POST_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return { ...state };
  }
};

export default dataApiReducer;
