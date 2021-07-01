import React from 'react';

//Our initall state creates an array that will hold all of our "character" objects
const initialState = [];

//create context allows us to use the Provider component to wrap around our children components and pass data on line 30
const charContext = React.createContext(initialState);
const { Provider } = charContext;

//Action Types allows us to pass an object that carries an action type and a data that we need to use to modify the state or initial state ex {action: 'ADD_CHAR' value: {name: Finn, initiative: 15}}
const ADD_CHAR = 'ADD_CHAR';

//This Reducer allows us to pass in state (see below) and an action object (above) and will make/rerturn changes to state based on the action type
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CHAR:
      console.log('adding character');
      //This uses the "..." spread operator to insert the current contents of state and add our new value to the array
      return [...state, action.value];
    default:
      console.log('something went wrong');
      return state;
  }
};

//Finally this is the component that we're exporting into index.js
const StateProvider = ({ children }) => {
  //use reducer takes our reudcer & initial state from above and returns a function, dispatch, which passes action objects into our reducer and our state
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = { state, dispatch };
  //by setting value to ^^this object we can pass state and dispatch down to our children components

  return <Provider value={value}>{children}</Provider>;
};

export { charContext, StateProvider };
