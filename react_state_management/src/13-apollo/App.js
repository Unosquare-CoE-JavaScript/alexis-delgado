import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './client'
import { useExchangeRates } from './useExchangeRates'

export const App = () => {
    let { data, loading } = useExchangeRates()

    if (loading) return 'Loading...'
    if (!data) return 'No results'
    return data.rates.map((rate) => (
        <div key={rate.currency}>
            {rate.currency}:{rate.rate}
        </div>
    ))
}

export const AppContainer = () => {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
}
