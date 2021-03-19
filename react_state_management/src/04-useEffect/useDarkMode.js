import { useEffect, useState } from 'react'

export const useDarkMode = () => {
    let [dark, setDark] = useState()

    const listener = (event) => {
        setDark(event.matches)
    }

    useEffect(() => {
        window
            .matchMedia('(prefers-color-schema: dark)')
            .addEventListener('change', listener)

        return () =>
            window
                .matchMedia('(prefers-color-schema: dark)')
                .removeEventListener('change', listener)
    }, [])

    return dark
}
