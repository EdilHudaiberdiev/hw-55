import { useState } from 'react'
import reactLogo from './assets/react.svg'
import cheeseImg from './assets/cheese.png'
import meatImg from './assets/meat.png'
import pattyImg from './assets/patty.png'
import saladImg from './assets/salad.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={cheeseImg} className="logo" alt="Vite logo" />
          <img src={meatImg} className="logo" alt="Vite logo" />
          <img src={pattyImg} className="logo" alt="Vite logo" />
          <img src={saladImg} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
