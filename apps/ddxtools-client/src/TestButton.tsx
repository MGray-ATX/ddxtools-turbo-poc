import { incrementCount, type RootState} from "@repo/base-ui";
import { useDispatch, useSelector } from "react-redux";

const TestButton = () => {
    const dispatch = useDispatch()
    // const useAppDispatch = useDispatch.withTypes<AppDispatch>();
    const useAppSelector = useSelector.withTypes<RootState>();
    // const useAppSelector = useSelector((state) => state);
    // const useAppSelector = useSelector.withTypes<RootState>();
    const count2 = useAppSelector((state: RootState) => {
        return state.testReducer.count
    });
    const count = useSelector((state: RootState) => {
        return state.testReducer.count
    });
    // const count = 0;
    const incrementCounter = () => {
        console.log('CLICK');
        dispatch(incrementCount());
    };

    return (<button onClick={incrementCounter}>
        RTK count is {count}
        RTK count is {count2}
    </button>);
}

export default TestButton;
