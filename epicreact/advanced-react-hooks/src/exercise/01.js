// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

/** useReducer hook - Allow us to manage state in better way
 * than useState hook. Avoiding re-render when there are many
 * states.
 */

/** a reducers is a dispatch/action/reducer that returns the new state and is passed as first argument */
const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.step,
      }
    default:
      return
  }
}

function Counter({initialCount = 0, step = 1}) {
  /** Initial state  that receives useReducer as second argument */
  const initialState = {
    count: initialCount,
  }

  const [state, dispatch] = React.useReducer(countReducer, initialState)
  const {count} = state

  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
