import React, { useContext } from 'react'
import TodoItem from '../components/Todo'
import { TodosContext } from '../store/todos-context'
import classes from './Todos.module.css'

const Todos: React.FC = (props) => {

    const todosCtx = useContext(TodosContext)

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(item => <TodoItem key={item.id} text={item.text} onRemoveTodo={() => todosCtx.removeTodo(item.id)} />)}
        </ul>
    )
}

export default Todos