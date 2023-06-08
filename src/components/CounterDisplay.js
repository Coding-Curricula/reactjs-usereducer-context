import React, { useContext } from 'react'
import { CounterContext } from './Counter'

export default function CounterDisplay() {
    const { state } = useContext(CounterContext);

    return (
        <div>
            <p>Count: {state.count}</p>
        </div>
    )
}