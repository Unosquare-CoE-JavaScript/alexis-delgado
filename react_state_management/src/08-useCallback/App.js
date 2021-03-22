import React, { useState, useCallback } from 'react'
import { useComplete } from './useComplete'

export const App = () => {
    let [clicked, setClicked] = useState(false)
    let completeCallback = useCallback((data) => console.log(data), [])
    useComplete(completeCallback)

    return (
        <button onClick={() => setClicked(!clicked)}>
            Hello {clicked ? 'clicked' : 'not clicked'}!
        </button>
    )
}
