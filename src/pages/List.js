import React, { useState } from 'react';
import axios from 'axios';

function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState([]);

  useState(() => {
    axios.get('https://swapi.dev/api/planets').then((response) => {
      const planets = response.data.results;
      console.log(planets);
      setPlanets(planets);
      setIsLoading(false);
    });
  }, []);

  return (
    isLoading 
      ? <p>Carregando</p>
      : (<ul>
        {planets.map((planet => (
          <li key={planet.name}>{planet.name}</li>
        )))}
      </ul>)

  );
}

export default List;