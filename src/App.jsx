import { useState } from 'react'
import './App.css'

function Experience(){
  return (
    <div>
      <h2>Practical Experience</h2>
        <p>I was at walmart working as cashier from 2022-Present</p>
        <p>I was at Taco Bell working as cashier from 2020-2022</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Resume for Didier Longoria</h1>
        <ul>
          <li>fakeEmail@gmail.com</li> 
          <li>999-999-9999</li>
        </ul>

        <h2>Educational Experience</h2>
        <p>I was at EPCC studying for CS from 2022-2024</p>
        <p>I was at HHS studying for diploma from 2018-2022</p>

        <Experience></Experience>


        <h2>Practical Experience</h2>
        <p>I was at walmart working as cashier from 2022-Present</p>
        <p>I was at Taco Bell working as cashier from 2020-2022</p>



    </div>
  )
}

export default App
