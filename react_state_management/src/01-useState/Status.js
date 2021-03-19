import React, { useState } from 'react'

export const Status = ({ onEnter }) => {
    let [message, setMessage] = useState('')

    return (
        <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={(e) => {
                if (e.keyCode === 13) {
                    onEnter(message)
                    setMessage('')
                }
            }}
        />
    )
}
