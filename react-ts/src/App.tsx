import { useState } from 'react'

import Todos from './components/Todos'
import Todo from './models/Todo'
import NewTodo from './components/NewTodo'

function App() {

  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript')
  // ]

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos(todos => [...todos, newTodo])
  }

  const removeTodoHandler = (idItem: string) => {
    console.log(idItem)

    setTodos( prevTodos => prevTodos.filter(todo => todo.id !== idItem))
    // return todos.filter(todo => todo.id !== idItem)
  }
  
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
