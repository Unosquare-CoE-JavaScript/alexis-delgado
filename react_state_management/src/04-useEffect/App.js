import React from 'react'
import { useDarkMode } from './useDarkMode'

export const App = () => {
    let isDarkmode = useDarkMode()
    return (
        <div
            style={{
                height: 500,
                width: 500,
                color: isDarkmode ? 'white' : 'black',
                backgroundColor: isDarkmode ? 'black' : 'white',
            }}
        >
            Here´s some content
        </div>
    )
}
