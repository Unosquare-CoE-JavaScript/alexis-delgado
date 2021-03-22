import { useEffect } from 'react'

export const useComplete = (completedRequest) => {
    //network request

    useEffect(() => {
        completedRequest('test data')
    }, [completedRequest])
}
