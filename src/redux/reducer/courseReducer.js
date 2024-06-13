const initData = {
  course: [],
  isLoading: false,
};

export default courseReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case "GET_COURSES":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_COURSE_SUCCESS":
      return {
        ...state,
        course: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
