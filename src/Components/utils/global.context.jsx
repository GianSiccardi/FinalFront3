import React, { createContext, useReducer ,useEffect} from 'react';

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(initialState);


export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      // Cambiamos el tema de claro a oscuro o viceversa
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_API_DATA':
      // Actualizamos la información de la API
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  useEffect(() => {
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch({type:'SET_API_DATA',payload:data}))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};



 
  