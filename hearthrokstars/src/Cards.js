import React, { useContext } from 'react';
import { charContext } from './Provider';

export const Cards = () => {
  const charState = useContext(charContext);
  const characters = charState.state;

  return (
    <div>
      {characters ? (
        characters.map((character, i) => {
          return (
            <p key={i}>
              {character.name}, {character.initiative}
            </p>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};
