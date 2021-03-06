import React, {useState,useEffect} from 'react'
import TodoList from './TodoList'

export default function App ()  {
  // state = {
  //   todos: [
  //     {id: 1, title: 'First todo', completed: false},
  //     {id: 2, title: 'Second todo', completed: true},
  //   ]
  // }

  const[todos, setTodos]=useState([
    // {id: 1, title: 'First task', completed: false},
    //   {id: 2, title: 'Second task', completed: true},


  ])
  
  const[todoTitle,setTodoTitle]=useState('')

// useEffect(()=>{
//   const row=localStorage.getItem('todos')||[]
//   setTodos(JSON.parse(raw))
// },[])
const handleClick=()=>console.log('click')
useEffect(()=>{
  document.addEventListener('click',handleClick)
  localStorage.setItem('todos',JSON.stringify([todos]))
  return()=>{
    document.removeEventListener('click',handleClick)
  }
},[todos])


  const addTodo=event=>{
if(event.key==='Enter'){
  setTodos([
    ...todos,{
      id:Date.now(),
      title:todoTitle,
      completed:false
    }
  ])
  setTodoTitle('')
}
  }


    return (
      <div className="container">
        <h1> Tasks</h1>

          <div className="input-field">
            <label> Введите задание </label>
            <input
             type="text" 
             value={todoTitle}
             onChange={event=>setTodoTitle(event.target.value)}
             onKeyPress={addTodo}/>
            
          </div>

          <TodoList todos={todos} />
      </div>
    );
  
}