import viteLogo from '/vite.svg'
import './App.css'
import { rtkStore } from "@repo/base-ui";
import { Provider as ToolsProvider } from "react-redux";
import reactLogo from './assets/react.svg'
import TestButton from "./TestButton";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <ToolsProvider store={rtkStore}>
            <>
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                </div>
                <h1>Vite + React (DDXTools Client)</h1>
                <div className="card">
                    <TestButton/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </>
        </ToolsProvider>

    )
}

export default App
