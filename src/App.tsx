import React, {useEffect, useState} from "react";
import'./App.css';
import data from './data.json';

interface Gamer{
  id: number;
  name: string;
  favGame: string;
  hours: number;
}

function App(){

  const [gamers, setGamer] = useState<Gamer[]>([]);

  useEffect(() => {
    setGamer(data);
  }, []);

  return (
    <div className="App">
      <h1>Gamer List</h1>
      <ul>
        {gamers.map(gamer => (
          <li key={gamer.id}>
            {gamer.name}, - Favourite Game: {gamer.favGame}, (total hours: {gamer.hours})
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App;