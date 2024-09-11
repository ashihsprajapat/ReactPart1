 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Title';
import Explain from './Explain';
import Card from './mid/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title/>
      
      <Card/>
    </>
  )
}

export default App
