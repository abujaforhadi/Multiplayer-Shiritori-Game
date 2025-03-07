import { useState } from 'react'

import './App.css'
import axios from 'axios';

function App() {
  const [player, setPlayer] = useState(1);
  const [word, setWord] = useState([]);
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState({player1: 0 ,player2: 0});
  // console.log(word);
  const handleSubmit=async ()=>{
    if(history.includes(word)|| word.length<4){
      alert("Invalid word");
      return;
    }
    try {
      const res=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if(!res.data.length){
        setHistory(word),
        setPlayer(!player);
        setScore({...score,[`player${player}`] :score[`player${player}`]+1});

      }
      
    } catch  {
      alert("Invalid word");
    }    

  }

  return (
    <div className='grid justify-center text-center gap-2'>
      <h1 className='text-2xl  font-medium'>Multiplayer Shiritori Game</h1>
      <p className='text-xl '>Player's {player} Turn</p>
      <div className='flex gap-2'>
        <input value={word} onChange={(e) => setWord(e.target.value)} type="text" className='border p-2' />
        <button onClick={handleSubmit} type="submit" className='btn bg-gray-400 rounded-lg text-white py-1 px-2'>Submit</button>
      </div>





    </div>
  )
}

export default App
