import React, { useContext } from 'react'
import { CounterContext } from './Counter'

export default function CounterButtons() {
    const { dispatch } = useContext(CounterContext);

    return (
        <div>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'multiply' })}>*2</button>
            <button onClick={() => dispatch({ type: 'divideByThree' })}>/3</button>
        </div>
    )
}