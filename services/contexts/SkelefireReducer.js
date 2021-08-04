export default function SkelefireReducer(state, action) {
  switch (action.type) {
    case "SET_COURSES":
      return { ...state, courses: action.payload };
    case "SET_ACTIVITIES":
      return { ...state, activities: action.payload };
    default:
      return state;
  }
}
