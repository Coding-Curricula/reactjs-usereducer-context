import React, { useReducer, createContext } from 'react'
import CounterDisplay from './CounterDisplay'
import CounterButtons from './CounterButtons'

// define initial state
const initialState = { count: 0 };

// define reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'multiply':
            return { count: state.count * 2 };
        case 'divideByThree':
            return { count: state.count / 3 };
        default:
            throw new Error();
    }
}

// create context
export const CounterContext = createContext();

// create a provider component
export function CounterProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default function Counter() {
    return (
        <div>
                <CounterDisplay />
                <CounterButtons />
        </div>
    )
}
