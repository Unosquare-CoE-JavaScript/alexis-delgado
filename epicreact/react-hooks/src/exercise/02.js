// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

/**
 * Exercise 4 - Make custom hook reusable and general
 */
const useLocalStoregeState = initialValue => {
  const [value, setValue] = React.useState(
    window.localStorage.getItem('value') || JSON.stringify(initialValue),
  )

  const setStoreValue = event => {
    const values = JSON.parse(value)
    values[event.target.id] = event.target.value
    const newValues = JSON.stringify(values)
    setValue(newValues)
  }

  React.useEffect(() => {
    window.localStorage.setItem('value', value)
  }, [value])

  return [JSON.parse(value), setStoreValue]
}

function Greeting(props) {
  const [{name, age, color}, setValue] = useLocalStoregeState(props)

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={setValue} id="name" />
        <br />
        <label htmlFor="age">Age: </label>
        <input value={age} onChange={setValue} id="age" />
        <br />
        <label htmlFor="color">Color: </label>
        <input value={color} onChange={setValue} id="color" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
      <br />
      {name ? <strong>I'm {age} years old</strong> : 'Please type your age'}
      <br />
      {name ? (
        <strong>My favorite color is {color}</strong>
      ) : (
        'Please type your color'
      )}
    </div>
  )
}

function App() {
  return <Greeting name="Alexis" age={30} color={'blue'} />
}

export default App

/**
 * Exercise 1
 * useEffect hook is trigger each time the component is mounted in the DOM.
 * it receives a function callback and dependecies array as arguments.
 * 
 * When the state changes the callback function is executed everytime.
 * 
 * React.useEffect(() => {
    window.localStorage.setItem('name', name)
  })
 */

/**
   * Exercise 2 - Array dependencies.
   * To avoid the callback function get dispatch every time the state changes there is a second argument. 
   * This is an array of dependencies. This means when one of the values changes the function callback gets fire. 
   * If the array is empty it will be executed only one time. 
   * 
   * React.useEffect(() => {
      window.localStorage.setItem('name', name)
    }, [name])
   * 
   */

/**
     * Exercise 3 - Custom Hook.
     * 
     * Custom hooks allow to extract the logic from components and make them reusable.
     *  const useLocalStoregeState = () => {
        const [name, setName] = React.useState(window.localStorage.getItem('name'))

        const setStoreName = event => {
           setName(event.target.value)
         }

         React.useEffect(() => {
           window.localStorage.setItem('name', name)
         }, [name])

         return [name, setStoreName]
       }
     * 
     */
