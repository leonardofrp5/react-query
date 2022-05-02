import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export interface CardCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}

interface Props {
  characters: CardCharacter[];
}

function CardCharacter({ characters }: Props) {
  return (
    <div className="container">
      {characters.map((item: any) => (
        <Link to={`/character/${item.id}`} key={item.id}>
          <div className="section">
            <img src={item.image} alt={item.name} />
            <div className="section-content">
              <span className="item-name">Name: </span>
              <span className="item-info">{item.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardCharacter;
