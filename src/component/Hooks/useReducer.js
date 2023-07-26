import React, { useReducer } from 'react'
import "../style.css"

const reducer = (state, action) =>{
    if(action.type === "INCR"){
        state++;
    }
    if(state > 0 && action.type === "DECR"){
        state--;
    }
    return state;
};

const UseReducer = () => {
    const intialData = 10;
    // const [myNum, setMyNum] = React.useState(0);

    const [state, dispatch] = useReducer(reducer, intialData);

  return (
    <>
    <div className='center_div'>
<p className='para'>{state}</p>
<div className='button2' onClick={() => dispatch({type: "INCR"})}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    INCR
</div>
    <div className="button2" onClick={() => dispatch({type: "DECR"})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
    </div>
    </div>
    </>
  )
}

export default UseReducer;