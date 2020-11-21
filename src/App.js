import React, {useState} from 'react';
import './static/css/style.css'
//import './App.css';
import HeaderCharacter from './components/Header';
import CharacterChange from './components/CharacterChange.js';
import GettingCharacters from './components/GettingCharacters';


export default function App() {
  // Llamamos a nuestra funcion useState
  const [count,setCount] = useState(1);
  return (
    <div className="container-fluid text-white">
      <header>
        <HeaderCharacter/>
      </header>
      <main>
        <GettingCharacters count={1} />
      </main>
      <footer>
        <CharacterChange
          handleChange={()=> setCount(count + 1)}
        />
      </footer>
    </div>
  );
}
