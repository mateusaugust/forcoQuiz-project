import { useState } from 'react'

import './App.css'
import { MenuInitial } from './assets/MenuInitial'
import { About } from './assets/About'
import { Points } from './assets/Points'
import { TypePlay } from './assets/TypePlay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About/>
    </>
  )
}

export default App
