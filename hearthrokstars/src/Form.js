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
    <div class='columns is-vcentered'>
      <div class='column is-half is-offset-one-quarter'>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              class='input'
              type='text'
              value={name}
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              class='input'
              type='number'
              value={initiative}
              onChange={(e) => setInitiative(e.target.value)}
            />
          </label>
          <div class='column is-4 is-offset-5'>
            <input class='button is-primary' type='submit' value='Submit' />
          </div>
        </form>
      </div>
    </div>
  );
}
