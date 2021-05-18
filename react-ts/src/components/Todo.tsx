import React, { FC } from 'react'
import classes from './Todo.module.css'

const Todo: FC<{text: string, onRemoveTodo: (event: React.MouseEvent) => void }> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
    )
}

export default Todo