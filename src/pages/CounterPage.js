// import { useState } from "react";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
// import useCounter from "../hooks/use-counter";


const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change_value_to_add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

// using useReducer hook
// useReducer is a hook that allows you to manage state in a more complex way
// when there are multiple state variables that need to be updated in response to the same event
const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };
      case ADD_VALUE_TO_COUNT:
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };
      case SET_VALUE_TO_ADD:
        return {
          ...state,
          valueToAdd: action.payload,
        };
      default:
        return state;
    }
}



function CounterPage({ initialCount }) {
    

    // using the custom hook defined in the hooks folder
    //   const { count, increment } = useCounter(initialCount);
    
    // using useState hook
    // const [count, setCount] = useState(initialCount);

    // using useState hook to handle the form input
    // const [valueToAdd, setValueToAdd] = useState(0);

    
    

    const [state, dispatch] = useReducer(reducer, {
      count: initialCount,
      valueToAdd: 0,
    });
    console.log(state);

    const increment = () => {
      dispatch({
        type: INCREMENT_COUNT,
      });
    };
    const decrement = () => {
      dispatch({
        type: DECREMENT_COUNT,
      });
    };
    const handleChange = (event) => {
      const value = parseInt(event.target.value) || 0;

      dispatch({
        type: SET_VALUE_TO_ADD,
        payload: value,
      });
    };
    const handleSubmit = (event) => {
      event.preventDefault();

      dispatch({
        type: ADD_VALUE_TO_COUNT,
      });
    };

  return (
    <Panel className="m-3">
      <h1 className="text-lg font-bold">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button success outline rounded className="p-4 m-2" onClick={increment}>
          Up One
        </Button>

        <Button danger outline rounded className="p-4 m-2" onClick={decrement}>
          Down One
        </Button>
          </div>
          <form onSubmit={handleSubmit}>
        <label>Add Many </label>
              <input
                  input={state.valueToAdd || ""}
                  onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-500"
          type="number"
        />
        <Button primary>Add Many</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
