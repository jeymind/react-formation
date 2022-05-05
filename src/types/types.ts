export interface CharacterIf {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: Date;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: [];
  alive: string;
  image: string;
}

export interface PropsCharacterItemIf {
  character: CharacterIf;
  isFavoritePage: boolean;
  key: number;
  setData: any;
}
