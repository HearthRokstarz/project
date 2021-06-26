import React, { useContext } from 'react';
import { charContext } from './Provider';

export const Cards = () => {
  const charState = useContext(charContext);
  //we can access our array of characters on the state property of charContext vvv
  const characters = charState.state;
  //This function vvv makes a copy of the array and sorts them in descending order based on initiative
  const sortedChars = characters
    .slice()
    .sort((a, b) => b.initiative - a.initiative);

  // in our return we have conditional logic that says: if sortedChars exists iterate over the array and render boxes w/ each character's info; if sortedChars does NOT exist render and empty div
  return (
    <div>
      {sortedChars ? (
        <div class='columns'>
          {sortedChars.map((character, i) => {
            return (
              <div class='column is-narrow'>
                <div class='box' style={{ width: '200px' }}>
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
