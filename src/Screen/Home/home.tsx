import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Home() {
  return (
    <Link className="button" to="/character">
      Go to characters
    </Link>
  );
}

export default Home;
