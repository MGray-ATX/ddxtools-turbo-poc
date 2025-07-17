// import type { ProviderProps } from 'react-redux'
import { Provider as ToolsProvider } from 'react-redux'
import { rtkStore, type RootState, type AppDispatch } from "./src/stores/store";
import { useAppDispatch, useAppSelector } from "./src/hooks/hooks";
import { incrementCount } from "./src/slices/testSlice";
import type { InitialState, ReducerState } from "./src/slices/testSlice";

export { rtkStore, ToolsProvider, useAppDispatch, useAppSelector, incrementCount};
export type {InitialState, ReducerState, RootState, AppDispatch}
// export default Root;
