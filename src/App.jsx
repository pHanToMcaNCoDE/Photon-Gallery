import { useState } from 'react'
import Hero from './components/Hero'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Hero/> */}
      <Login/>
    </div>
  )
}

export default App
