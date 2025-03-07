import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [player, setPlayer] = useState(1);
  const [word, setWord] = useState('');
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [time, setTime] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        if (prev === 1) {
          setScore(prevScore => ({
            ...prevScore,
            [`player${player}`]: prevScore[`player${player}`] - 1 
          }));
          setPlayer(player === 1 ? 2 : 1);
          return 20;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [player]);

  const handleSubmit = async () => {
    if (word.length < 4 || history.includes(word)) {
      alert("Invalid word");
      setScore(prevScore => ({
        ...prevScore,
        [`player${player}`]: prevScore[`player${player}`] - 1
      }));
      return;
    }

    if (history.length > 0) {
      const lastWord = history[history.length - 1];
      if (word[0].toLowerCase() !== lastWord[lastWord.length - 1].toLowerCase()) {
        alert("Word must start with the last letter of the previous word");
        setScore(prevScore => ({
          ...prevScore,
          [`player${player}`]: prevScore[`player${player}`] - 1
        }));
        return;
      }
    }

    try {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (res.data.length > 0) {
        setHistory([...history, word]); 
        setScore(prevScore => ({
          ...prevScore,
          [`player${player}`]: prevScore[`player${player}`] + 1 
        }));
        setPlayer(player === 1 ? 2 : 1);
        setTime(20); 
        setWord('');
      }
    } catch {
      alert("Invalid word");
      setScore(prevScore => ({
        ...prevScore,
        [`player${player}`]: prevScore[`player${player}`] - 1 // Deduct score for invalid word
      }));
    }
  };

  return (
    <div className='grid justify-center text-center gap-2'>
      <h1 className='text-2xl font-medium'>Multiplayer Shiritori Game</h1>
      <p className='text-xl'>Player {player}'s Turn | Time Left: {time}s</p>
      
      <div className='flex gap-2'>
        <input value={word} onChange={(e) => setWord(e.target.value)} type="text" className='border p-2' />
        <button onClick={handleSubmit} className='btn bg-gray-400 rounded-lg text-white py-1 px-2'>Submit</button>
      </div>
      
      <h3>History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h3>Score</h3>
      <p>Player 1: {score.player1} | Player 2: {score.player2}</p>
    </div>
  );
}

export default App;
