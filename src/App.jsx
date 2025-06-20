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

function Header({isTop, children, title, name}){
  if(isTop) return <h1>{title+" "+name} {children} </h1> 
  return <h2>{title} {children} </h2> 
}

function Experience({title, dataToString, initialItems, isTop = false}){
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
    const newInfoObj = {...initialItems[0], id: crypto.randomUUID()};
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

      <Header isTop={isTop} title={title} name={items[0].name}>
        <button onClick={handleButtonClick}>
            {editMode ? 'Submit' : 'Edit'}
        </button>
      </Header>
      
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
              { !isTop && <button className='delete' onClick={() => handleDelete(curr.id)}>delete</button>}
            </li>
          })
            
          : 
          items.map(curr => {
        return <li key={curr.id}>{ dataToString(curr)}</li>})}
     
      {editMode && !isTop && <button onClick={handleAddClick}>Add</button>}

      </ul>

    </div>
  );
}

function practicalText(data){
  return <>
   <p>{`I was at ${data.where} working as ${data.title} from ${data.start} - ${data.end}`} </p>
   <p> Description: {data.description}</p></>;
}
function educationalText(data){
  return "I was at "+data.where+" studying for "+data.title+" from "+data.start+" - "+data.end;
}
function topText(data){
  return <>
   <p>{data.email} </p>
   <p>{data.phone}</p></>;
}

const initialItemsEdu = [
  { id: crypto.randomUUID(), where: '', title: '', start:'', end:'' },
];
const initialItemsPrac = [
  { id: crypto.randomUUID(), where: '', title: '', description: '', start:'', end:'' },
];
const initialItemsTop = [
  { id: crypto.randomUUID(), name: '', email: '', phone: '' },
];

function App() {
  return (
    <div>
        <Experience title="Resume for" isTop={true} initialItems={initialItemsTop} dataToString={topText}></Experience>
        <Experience title="Educational Experience" initialItems={initialItemsEdu} dataToString={educationalText}></Experience>
        <Experience title="Practical Experience" initialItems={initialItemsPrac} dataToString={practicalText}></Experience>
    </div>
  )
}

export default App
