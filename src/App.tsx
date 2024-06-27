import React, { useEffect, useState } from "react";
// import { Component } from "react";
import "./App.css";
import data from "./data.json";

interface Gamer {
  id: number;
  name: string;
  favGame: string;
  hours: number;
}

function App() {
  const [gamers, setGamer] = useState<Gamer[]>([]);

  useEffect(() => {
    setGamer(data);
  }, []);

  return (
    <div className="App">
      <h1 className="text-4xl font-bold mb-4">Gamer List</h1>
      <ul className="list-disc pl-5">
        {gamers.map((gamer) => (
          <li key={gamer.id}>
            {gamer.name}, - Favourite Game: {gamer.favGame}, (total hours:{" "}
            {gamer.hours})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// class MyComponent extends Component {
//   componentDidMount() {
//     // This code runs once after the component is added to the DOM
//     console.log("Component mounted");
//     // Fetch data or perform other side effects here
//   }

//   render() {
//     return <div>Hello, world!</div>;
//   }
// }

// export default MyComponent;

// const MyComponent = () => {
//   useEffect(() => {
//     // This code runs once after the component is added to the DOM
//     console.log("Component mounted");
//     // Fetch data or perform other side effects here
//   }, []); // Empty dependency array

//   return <div>Hello, world!</div>;
// };

// export default MyComponent;
