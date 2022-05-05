import '@/styles/characterItem.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '@/router';
import { PropsCharacterItemIf } from '@/types/types';
import {
  addFavorite,
  getFavorites,
  removeFavorite,
  setSingleCharacter,
} from '@/utils/StorageService';

const CharacterItem = (props: PropsCharacterItemIf) => {
  const { character, isFavoritePage, setData } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const add_favorite = () => {
    addFavorite(character);
    setIsFavorite(getFavorites().filter((row) => row.actor === character.actor).length > 0);
  };

  const remove_favorite = () => {
    removeFavorite(character);
    setData(getFavorites());
  };

  const single_character = () => {
    setSingleCharacter(character);
    // navigate(routes.CHARACTER);
  };

  useEffect(() => {
    setIsFavorite(getFavorites().filter((row) => row.actor === character.actor).length > 0);
    // setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="character_item">
      <img src={character.image} alt="avatar" width={200} height={200} style={{ width: '100%' }} />
      <div className="container">
        <h4 className="actor" onClick={single_character} aria-hidden="true">
          <b>{character.actor}</b>
        </h4>
        {/* <Link to={routes.CHARACTER}>test</Link> */}
        <p>{character.name}</p>
      </div>
      {!isFavorite && (
        <button
          type="button"
          className="favorites"
          onClick={() => {
            add_favorite();
          }}
        >
          favorites
        </button>
      )}
      {isFavoritePage && (
        <button
          type="button"
          className="favorites"
          onClick={() => {
            remove_favorite();
          }}
        >
          remove favorite
        </button>
      )}
    </div>
  );
};

export default CharacterItem;
