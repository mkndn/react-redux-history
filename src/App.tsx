import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useMemento} from "./hooks/useMemento.ts";

function App() {
    const [count, setCount, {undo, redo}] = useMemento<number>(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <label>Count is {count}</label>
                <div className="actions">
                    <button onClick={increaseCount}>
                        Increase Count
                    </button>
                    <button onClick={decreaseCount}>
                        Decrease Count
                    </button>
                    <button onClick={undo}>
                        Undo
                    </button>
                    <button onClick={redo}>
                        Redo
                    </button>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
