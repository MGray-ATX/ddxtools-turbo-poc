import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import { store } from './stores/store'
import { Provider } from 'react-redux'

const container = document.getElementById('app')

if (container) {
    const root = createRoot(container)

    root.render(
        <Provider store={store}>
            <App />
        </Provider>,
    )
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
    )
}

