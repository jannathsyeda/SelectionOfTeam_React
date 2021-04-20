import "./App.css";
import React, { useState } from "react";
import Data from "./Data/Data.json";
import Teams from "./Components/Teams/Teams";
import CartPlayer from './Components/CartPlayer/CartPlayer'
function App() {
  const first8 = Data.slice(0, 8);
  const [players, setPlayers] = useState(first8);
 const [playerCart ,setPlayerCart]=useState([]);

  const AddPlayerButton=(player)=>{
    const newPlayer =[...playerCart, player];
    setPlayerCart(newPlayer);

  };

  return (
    <div className="App" style={{backgroundColor:'whitesmoke'}}>
      <h1>SELECT PLAYERS FOR TEAM</h1>
      <h1> Total:{players.length}</h1>
      <div className="team-container">
      <div className="players">
        {
        players.map((pd) => (
          <Teams player={pd} AddPlayerButton={AddPlayerButton}></Teams>
        ))
        }
      </div>

      <div className="players-added">

        <h1>Selected List</h1>
        <p> Total Selected: {playerCart.length}</p>
       <CartPlayer playerCart={playerCart}></CartPlayer>
      </div>
      </div>


    </div>
  );
}

export default App;
