import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import './index.css';

async function getCharacterById(id: string | undefined) {
  return await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => data);
}

function DetailsCharacter() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery(['characterById', id], () => getCharacterById(id));

  return (
    <>
      <div className="container">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <div className="content">
            <img src={data.image} alt={data.name} />
            <span>{data.name}</span>
            <span>{data.species}</span>
            <span>{data.type}</span>
            <span>{data.origin.name}</span>
            <span>{data.gender}</span>
          </div>
        )}
      </div>
      <Link className="button" to="/character">
        Go to all characters
      </Link>
    </>
  );
}

export default DetailsCharacter;
