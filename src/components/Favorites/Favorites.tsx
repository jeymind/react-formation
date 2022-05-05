import React, { FC, useEffect, useState } from 'react';
import CharacterItem from '@/common/CharacterItem';
import { CharacterIf } from '@/types/types';
import { getFavorites } from '@/utils/StorageService';

const Favorites: FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(getFavorites());
  }, []);

  return (
    <div className="home">
      <div className="characters">
        {data.map((item: CharacterIf, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <CharacterItem character={item} key={index} isFavoritePage={true} setData={setData} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
