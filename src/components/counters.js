import React , {useState} from "react";

const Counter = () => {
    const [clicks , setClicks] = useState(0);
    function handleOnClick(){
        setClicks(clicks+1);
    }
    return(
        <div>
            <span>You clicked! {clicks} Clicks</span>
            <br />
            <button onClick = {handleOnClick} >Click Me!</button>
        </div>
        );
} ;

export default Counter