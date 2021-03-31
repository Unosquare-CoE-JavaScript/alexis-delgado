import React from 'react'
import { RecoilRoot } from 'recoil'
import { usePageState } from './usePageState'

const pages = ['Home', 'About', 'Featured']

const Navbar = () => {
    let [page, setPage] = usePageState()

    return (
        <ul>
            {pages.map((name) => (
                <li
                    key={name}
                    onClick={() => setPage(name)}
                    style={{ color: name === page ? 'red' : 'black' }}
                >
                    {name}
                </li>
            ))}
        </ul>
    )
}

const BlogPost = () => {
    console.log('rerendering blog post')
    return <div>The current blog post</div>
}

const Footer = () => {
    let [page] = usePageState()

    return <div>The current page is {page}</div>
}

export const App = () => {
    return (
        <div>
            <Navbar />
            <BlogPost />
            <Footer />
        </div>
    )
}

export const AppContainer = () => {
    return (
        <RecoilRoot>
            <App />
        </RecoilRoot>
    )
}
