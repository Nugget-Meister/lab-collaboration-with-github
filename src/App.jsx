import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'

function App() {
  const [count, setCount] = useState(0);
  const [hp1, setHp1] = useState(30);
  const [hp2, setHp2] = useState(30);
  
  useEffect(()=>{
    let answer = "";
    if(hp1 <= 0){
      alert("player2 has won.");
      answer = prompt('If you wish to replay, type Yes');
    }
    else if(hp2 <= 0){
      alert("player1 has won.");
      answer = prompt('If you wish to replay, type Yes');
    }

    if(answer.toLowerCase() == 'yes'){
      setCount(0);
      setHp1(30);
      setHp2(30);
    }
  },[hp1,hp2]);

  useEffect(()=>{},[count]);
  return (
    <div>
      <header>
        <h1>Color Battle</h1>
      </header>
      <main>
        <Player id="0" turn={count} setTurn={setCount} hp={hp1} enemysHp={hp2} setHp={setHp2}/>
        <Player id="1" turn={count} setTurn={setCount} hp={hp2} enemysHp={hp1} setHp={setHp1}/>
      </main>
    </div>  
  )
}

export default App
