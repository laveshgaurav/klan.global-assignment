const initialState = {
  following: [],
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FOLLOWING":
      return {
        ...state,
        following: state?.following?.includes(action.payload)
          ? state?.following?.filter((id) => id !== action.payload)
          : [...state?.following, action.payload],
      };
    default:
      return state;
  }
};
