import { type } from 'os';
import { CharacterIf } from '@/types/types';

export const favorites_characters = 'favorites_characters';
export const single_character = 'single_character';

export function getFavorites(): CharacterIf[] {
  const favorites = localStorage.getItem(favorites_characters);
  if (typeof favorites === 'string') return JSON.parse(favorites);
  return [];
}

const setFavorite = (favorites: CharacterIf[]) => {
  localStorage.setItem(favorites_characters, JSON.stringify(favorites));
};

export const addFavorite = (character: CharacterIf) => {
  const favorites: CharacterIf[] = getFavorites();
  if (!favorites.find((row) => row.actor === character.actor)) favorites.push(character);
  setFavorite(favorites);
};

export const removeFavorite = (character: CharacterIf) => {
  let favorites: CharacterIf[] = getFavorites();
  favorites = favorites.filter((row) => row.actor !== character.actor);
  setFavorite(favorites);
};

export function getSingleCharacter(): any {
  const character = localStorage.getItem(single_character);
  if (typeof character === 'string') return JSON.parse(character);
  return '';
}

export const setSingleCharacter = (character: CharacterIf) => {
  localStorage.setItem(single_character, JSON.stringify(character));
};
