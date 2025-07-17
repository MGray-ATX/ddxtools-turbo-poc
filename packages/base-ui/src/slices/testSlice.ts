import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    count: number
}
const initialState: InitialState = {
    count: 0
};

const reducerSlice = createSlice({
    name: 'store',
    initialState: initialState,
    reducers: {
        incrementCount: (state: InitialState) => {
            return {
                ...state,
                count: state.count + 1
            };
        },
    }
})

export const {
    incrementCount
} = reducerSlice.actions;

export type ReducerState = typeof reducerSlice;
export type { InitialState };
export { reducerSlice };
