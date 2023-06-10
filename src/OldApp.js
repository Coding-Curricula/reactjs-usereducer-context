import React from 'react'

import Counter from './components/Counter'
import { CounterProvider } from './components/Counter'


export default function App() {
    return (
        <div>
            <CounterProvider>
                <Counter />
            </CounterProvider>
        </div>
    )
}
