import { createStore, combineReducers } from 'redux'

const todos = (state = { todos: [], todo: '' }, action) => {
    switch (action.type) {
        case 'TODO_TYPING':
            return {
                ...state,
                todo: action.todo,
            }

        case 'ADD_TODO': {
            return {
                ...state,
                todo: '',
                todos: [...state.todos, action.todo],
            }
        }
        default:
            return state
    }
}

export const store = createStore(combineReducers({ todos }))
