import { useState } from 'react'

export default function AddTodo({onClickAdd}) {
  const [title, setTitle] = useState(''); // just to keep track of the input value

  //const { onClick } = props;

  return (
    <div>
      {/* spara title i input's value så vi kan använda e.target.value sen*/}
      <input placeholder="Add Todo" type="text" value={title} onChange={e => setTitle(e.target.value)}/>

      <button onClick={() => {
        setTitle(''); // nollställ
        onClickAdd(title);}}>Add</button>
    </div>
    
  )
}