import React, { useContext } from 'react';
import { charContext } from './Provider';

export const Cards = () => {
  const charState = useContext(charContext);
  //we can access our array of characters on the state property of charContext vvv
  const characters = charState.state;

  // in our return we have conditional logic that says: if Characterss exists iterate over the array and render boxes w/ each character's info; if Characters does NOT exist render and empty div
  return (
    <div>
      {characters ? (
        <div class='columns'>
          {characters.map((character, i) => {
            !character.isTurn ? (
              <div class='column is-narrow'>
                <div class='box' style={{ width: '200px' }}>
                  <p key={i} class='bd-notification is-primary'>
                    {character.name} {character.initiative}
                  </p>
                </div>
              </div>
            ) : (
              <div class='column is-narrow'>
                <div
                  class='box'
                  style={{ width: '200px', background: '#FF33CA' }}
                >
                  <p key={i} class='bd-notification is-primary'>
                    {character.name} {character.initiative}
                  </p>
                </div>
              </div>
            );
          })}{' '}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
