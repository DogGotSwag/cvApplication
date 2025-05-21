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

function Experience({title, dataToString, initialItems}){
  const [items, setItems] = useState(initialItems);
  const [editMode, setEditMode] = useState(false);

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

  function handleDelete(id){
    const index = items.findIndex(curr => curr.id === id);
    let copy = [...items];
    copy.splice(index, 1);
    setItems([...copy]);
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
            const arrayOfInputs =[];
            Object.keys(curr).forEach( key => {
              if(key === 'id') return ;
              arrayOfInputs.push(<Input id={curr.id} label={key} text={curr[key]} handleChange={handleChange}></Input>);
            });

            return <li>
              {arrayOfInputs}
              <button className='delete' onClick={() => handleDelete(curr.id)}>delete</button>
            </li>
          })
            
          : 
          items.map(curr => {
        return <li key={curr.id}>{ dataToString(curr.where, curr.title, curr.start, curr.end)}</li>})}
     
      {editMode && <button onClick={handleAddClick}>Add</button>}

      </ul>

    </div>
  );
}

function practicalText(where, title, start, end){
  return "I was at "+where+" working as "+title+" from "+start+" - "+end;
}
function educationalText(where, title, start, end){
  return "I was at "+where+" studying for "+title+" from "+start+" - "+end;
}

const initialItemsEdu = [
  { id: 0, where: '', title: '', start:'', end:'' },
];
const initialItemsPrac = [
  { id: 0, where: '', title: '', description: '', start:'', end:'' },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Resume for Didier Longoria</h1>
        <ul>
          <li>fakeEmail@gmail.com</li> 
          <li>999-999-9999</li>
        </ul>

        <Experience title="Educational" initialItems={initialItemsEdu} dataToString={educationalText}></Experience>
        <Experience title="Practical" initialItems={initialItemsPrac} dataToString={practicalText}></Experience>
    </div>
  )
}

export default App
