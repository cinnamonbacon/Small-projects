import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState<{id: string,title: string,completed: boolean}[]>([])

  
  
  function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setTodos([...todos, 
      { id: crypto.randomUUID(), title: newItem, completed: false}])
    console.log(todos)
  }

  return (
    <>
      <form onSubmit={submit} className="form">
        <div className="row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" id="item"></input>
        </div>
        <button className="button">Add</button>
      </form>
      <h1 className="header">Todo</h1>
      <ul>
        
      </ul>
    </>
  )
}

function TodoItem(itemName: string) {
  <li>
    <label>
      <input type="checkbox"></input>
        {itemName}
    </label>
    <button className="btn btn-delete">Delete</button>        
  </li>
}

export default App
