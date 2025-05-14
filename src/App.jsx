import { useState } from 'react'
import './App.css'

function Input({ id, label, text, handleChange }) {
  return (
    <label>
      {label}
      {': '}
      <input
        value={text}
        onChange={(e) => handleChange(id,e)}
      />
    </label>
  );
}

function Experience({title}){

  let nextId = 3;
  const initialItems = {
    0: { id: 0, where: 'Walmart', title: 'cashier', start:'2022', end:'present' },
    1: { id: 1, where: 'TacoBell', title: 'cashier', start:'2020', end:'2022' },
  };

  const [items, setItems] = useState(initialItems);
  const [editMode, setEditMode] = useState(true);

  function handleButtonClick(e){
    (editMode) ? setEditMode(false): setEditMode(true);
  }

  function handleChange(id, e){
    

  }

  

  return (
    <div>
      <h2>{title} Experience 
          <button onClick={handleButtonClick}>
            {editMode ? 'Submit' : 'Edit'}
          </button>
      </h2>
      <ul>

        {
          editMode ? 
          items.map(curr => {
            return <li>
              <Input id={curr.id} label="where" text={curr.where} handleChange={handleChange}></Input>
              <Input label="title" text={curr.title}></Input>
              <Input label="start" text={curr.start}></Input>
              <Input label="end" text={curr.end}></Input>
            </li>
          })
            
          : 
          items.map(curr => {
        return <li>{
          "I was at "+curr.where+" working as "+curr.title+" from "+curr.start+" - "+curr.end
          }</li>})}
     

      </ul>
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

        <Experience title="Practical"></Experience>
    </div>
  )
}

export default App
