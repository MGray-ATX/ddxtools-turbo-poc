import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Counter, Header } from "@repo/ui";
// import ToolsProvider, { store } from "@repo/base-ui";

const App = () => (

        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo"/>
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
                <img
                    src={typescriptLogo}
                    className="logo vanilla"
                    alt="TypeScript logo"
                />
            </a>
            <Header title="Web"/>
            <div className="card">
                <Counter/>
            </div>
        </div>

);

export default App;
