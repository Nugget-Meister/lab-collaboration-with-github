import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{},[count]);
  return (
    <div>
      <header>
        <h1>Color Battle</h1>
      </header>
      <main>
        <Player id="0" turn={count} setTurn={setCount}/>
        <Player id="1" turn={count} setTurn={setCount}/>
      </main>
    </div>  
  )
}

export default App
