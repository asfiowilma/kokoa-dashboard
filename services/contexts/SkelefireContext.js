import React, { createContext, useReducer } from "react";
import SkelefireReducer from "./SkelefireReducer";

const INITIAL_STATE = {
  courses: [],
  activities: [],
};

const SkelefireContext = createContext(INITIAL_STATE);

const SkelefireProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SkelefireReducer, INITIAL_STATE);

  const setCourses = (courses) => {
    dispatch({
      type: "SET_COURSES",
      payload: courses,
    });
  };

  const setActivities = (activities) => {
    dispatch({
      type: "SET_ACTIVITIES",
      payload: activities,
    });
  };

  return (
    <SkelefireContext.Provider value={{ state, setCourses, setActivities }}>
      {children}
    </SkelefireContext.Provider>
  );
};

export { SkelefireContext, SkelefireProvider };
