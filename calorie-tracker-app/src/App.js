import { useReducer } from "react";
import spinnerReducer from "./Reducers/SpinnerReducer";
import Loader from "./Components/Loader";

const App = () => {
  const [state, dispatch] = useReducer(spinnerReducer, { loading: false });

  return (
    <div>
      {state.loading ? <Loader loading={state.loading} /> : <h1>Welcome!</h1>}
      <button onClick={() => dispatch({ type: "START_LOADING" })}>Start Loading</button>
      <button onClick={() => dispatch({ type: "STOP_LOADING" })}>Stop Loading</button>
    </div>
  );
};

export default App;

