import React, { useState, useContext } from 'react';
import { charContext } from './Provider';

export function Form() {
  const charState = useContext(charContext);
  const { dispatch } = charState;
  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert('Things are a-happening!');
    const character = { name: name, initiative: initiative };
    dispatch({ type: 'ADD_CHAR', value: character });
    console.log(charState);
    setName('');
    setInitiative(0);
    //function goes here to push to state
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='number'
            value={initiative}
            onChange={(e) => setInitiative(e.target.value)}
          />
        </label>
        <input type='submit' value='!' />
      </form>
    </div>
  );
}
