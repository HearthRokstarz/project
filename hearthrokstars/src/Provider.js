import React from 'react';

//Need 1.) Initial state 2.) Actions 3.) reducer
const initialState = [];
const charContext = React.createContext(initialState);
const { Provider } = charContext;

//Action Types
const ADD_CHAR = 'ADD_CHAR';

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CHAR:
      console.log('adding character');
      return [...state, action.value];
    default:
      console.log('something wrong');
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  //update vals here
  const value = { state, dispatch };

  return <Provider value={value}>{children}</Provider>;
};

export { charContext, StateProvider };
