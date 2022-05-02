import React from 'react';
import { useQuery } from 'react-query';
import CardCharacter from './components/CardCharacter';

async function getCharacter() {
  return await fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => data.results);
}

function Character() {
  const { data, error, isLoading, isIdle, refetch } = useQuery('character', getCharacter, {
    // enabled: false
  });

  if (isIdle) {
    return <button onClick={() => refetch()}>Get Characters</button>;
  }

  return <>{isLoading ? <span>Loading...</span> : <CardCharacter characters={data} />}</>;
}

export default Character;
