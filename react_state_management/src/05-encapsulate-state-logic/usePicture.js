import { useEffect, useState } from 'react'

export const fetchPicture = async (date, setPicture) => {
    try {
        let response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
        )
        let json = await response.json()
        setPicture(json)
    } catch (e) {
        console.log(e)
    }
}

export const usePicture = (date) => {
    let [picture, setPicture] = useState()

    useEffect(() => {
        fetchPicture(date, setPicture)
    }, [date])

    return picture
}
