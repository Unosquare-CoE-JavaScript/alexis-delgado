import React from 'react'
import { useAppContext } from './appContext'

export const Content = () => {
    let { theme } = useAppContext()
    return (
        <h4 style={{ color: theme === 'dark' ? 'black' : 'red' }}>
            Here´s our main content.
        </h4>
    )
}
