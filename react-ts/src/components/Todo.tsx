import { FC } from 'react'

const Todo: FC<{text: string}> = (props) => {
    return (
        <li>{props.text}</li>
    )
}

export default Todo