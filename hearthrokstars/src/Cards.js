import React, { useContext } from 'react';
import { charContext } from './Provider';

export const Cards = () => {
  const charState = useContext(charContext);
  const characters = charState.state;

  return (
    <div>
      {characters ? (
        <div class='columns'>
          {characters.map((character, i) => {
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
