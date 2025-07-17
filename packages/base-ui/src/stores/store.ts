import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { reducerSlice } from "../slices/testSlice";

const rootReducer = combineSlices({
    testReducer: reducerSlice.reducer
});

const makeStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

const rtkStore = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof rtkStore.getState>
type RootState = ReturnType<typeof rootReducer>;
// Infer the type of `store`
type AppStore = typeof rtkStore;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof rtkStore.dispatch
//export type AppDispatch = AppStore["dispatch"];

export {
rtkStore,
}
export type {
    RootState, AppStore, AppDispatch
}
