import { createContext, useContext, useEffect, useReducer } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

const SET_DATA = "SET_DATA";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch({ type: SET_DATA, payload: data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <ContextGlobal.Provider value={state}>
      {children}
    </ContextGlobal.Provider>
  );
};
