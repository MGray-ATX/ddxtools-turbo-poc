import { Provider as ToolsProvider } from 'react-redux'
import { rtkStore } from "./stores/store";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { incrementCount } from "./slices/testSlice";


// const BaseUI = ({ children }: Readonly<PropsWithChildren>) => {
//     return (
//     <Provider store={store}>
//         <div>BASE UI index wrapped in provider</div>
//         {children}
//     </Provider>)
// }
export { rtkStore, ToolsProvider, useAppDispatch,useAppSelector, incrementCount};
// export default ToolsProvider
