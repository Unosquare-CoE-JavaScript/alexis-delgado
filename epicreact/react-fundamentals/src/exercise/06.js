// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  /** Extra credit 2 controlled value using useState hook */
  const [username, setUsername] = React.useState('')
  const [error, setError] = React.useState('')

  /*
    extra credit - Get input value by Ref
    const inputRef = React.createRef(null)
  */

  //Exercise 1
  const handleSubmit = event => {
    event.preventDefault()

    /** Solucion - Get value by raw javascript
      const value = event.target.elements[0].value 
     */

    // Extra credi - const value = inputRef.current.value
    onSubmitUsername(username)
  }

  const handleChange = event => {
    const value = event.target.value.toLocaleLowerCase()
    setUsername(value)

    const isValid = value === value.toLocaleLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        {error && (
          <div role="alert" style={{color: 'red'}}>
            {error}
          </div>
        )}
      </div>
      <button type="submit" disabled={error !== null}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
