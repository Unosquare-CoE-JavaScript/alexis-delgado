import React, { useState } from 'react'
import { usePicture } from './usePicture'

export const App = () => {
    const [date, setDate] = useState('2020-05-05')
    const { picture, loading } = usePicture(date)

    if (loading) return <div>Loading...</div>

    return (
        <div>
            <input
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <h5>{picture.title}</h5>
            <div>{picture.explanation}</div>
            <img src={picture.url} alt={picture.title} />
        </div>
    )
}
