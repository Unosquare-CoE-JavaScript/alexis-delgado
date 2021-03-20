import { useEffect, useState } from 'react'

export const useStorage = (key, initialState) => {
    let [state, setState] = useState(initialState)

    useEffect(() => {
        let existingState = localStorage.getItem(key)
        if (existingState) setState(JSON.parse(existingState))
    }, [key])

    return [
        state,
        (key, state) => {
            setState(state)
            localStorage.setItem(key, state)
        },
    ]
}
