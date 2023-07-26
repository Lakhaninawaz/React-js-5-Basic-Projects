import React, {useState, useEffect} from 'react'
import "../style.css"

const UseEffect = () => {
    // const intialData = 10;
    const [myNum, setMyNum] = useState(0);

    useEffect(() => {
      document.title = `Chats(${myNum})`;
    });
    

  return (
    <>
    <div className='center_div'>
<p className='para'>{myNum}</p>
<div className='button2' onClick={() => setMyNum(myNum + 1)}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    INCR
</div>
    </div>
    </>
  )
}

export default UseEffect