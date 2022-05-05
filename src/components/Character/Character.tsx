import '@/styles/character.css';
import React, { useState } from 'react';
import { CharacterIf } from '@/types/types';
import { getSingleCharacter } from '@/utils/StorageService';

const Character = () => {
  const [character, setCharacter] = useState<CharacterIf>(getSingleCharacter());
  return (
    <div className="character">
      <img src={character.image} alt={character.actor} width={300} height={300} />
      <h1>{character.actor}</h1>
      <p className="title">{character.name}</p>
      <p>{character.alive}</p>
      {/* <p>
        <button type="button">Contact</button>
      </p> */}
    </div>
  );
};

export default Character;
