import { useState } from 'react'
import './App.css'

function Input({ id, label, text, handleChange }) {
  return (
    <label>
      {label}
      {': '}
      <input
        value={text}
        onChange={(e) => handleChange(label,id,e)}
      />

    </label>
  );
}

function Experience({title}){

  let nextId = 2;
  const initialItems = [
    { id: 0, where: 'Walmart', title: 'cashier', start:'2022', end:'present' },
    { id: 1, where: 'TacoBell', title: 'cashier', start:'2020', end:'2022' },
  ];

  const [items, setItems] = useState(initialItems);
  const [editMode, setEditMode] = useState(true);

  function handleButtonClick(e){
    (editMode) ? setEditMode(false): setEditMode(true);
  }

  function handleChange(type, id, e){
    const index = items.findIndex(curr => curr.id === id);
    let copy = [...items];
    copy[index][type] = e.target.value;
    setItems([...copy]);
  }

  function handleAddClick(){
    const newInfoObj = {id: crypto.randomUUID(), where: '', title: '', start: '', end:''};
    const dataCopy = [...items];
    dataCopy.push(newInfoObj);
    setItems([...dataCopy]);
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
              <Input id={curr.id} label="title" text={curr.title} handleChange={handleChange}></Input>
              <Input id={curr.id} label="start" text={curr.start} handleChange={handleChange}></Input>
              <Input id={curr.id} label="end" text={curr.end} handleChange={handleChange}></Input>
              <button className='delete'>delete</button>
            </li>
          })
            
          : 
          items.map(curr => {
        return <li>{
          "I was at "+curr.where+" working as "+curr.title+" from "+curr.start+" - "+curr.end
          }</li>})}
     
      {editMode && <button onClick={handleAddClick}>Add</button>}

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
