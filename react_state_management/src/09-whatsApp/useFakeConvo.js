import { useFakeMessage } from './useFakeMessage'

export const useFakeConvo = (setMessages) => {
    useFakeMessage({ setMessages, message: 'That is cool', timeout: 1000 })
    useFakeMessage({
        setMessages,
        message: 'I know rigth?',
        from: 'me',
        timeout: 3000,
    })
    useFakeMessage({
        setMessages,
        message: 'So wthat should we do now...?',
        timeout: 5000,
    })
    useFakeMessage({
        setMessages,
        message: 'So wthat should we do now...?',
        timeout: 5000,
    })
    useFakeMessage({
        setMessages,
        message: 'So wthat should we do now...?',
        timeout: 5000,
    })
    useFakeMessage({
        setMessages,
        message: 'So wthat should we do now...?',
        timeout: 5000,
    })
    useFakeMessage({
        setMessages,
        message: 'I guess we should test scroll positioning',
        from: 'me',
        timeout: 7000,
    })
}
