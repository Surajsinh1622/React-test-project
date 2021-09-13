import React, { useState } from "react";

const Todo = ({title , complated ,remTODO}) => {
    const [isEditing , setIsEditing] = useState(false);
    const [value , setValue] = useState(title);
    const [tempValue , setTempValue] = useState(title);
    const [complatedState , setComplated] = useState(complated);
    const handleDoubleClick = () => {
        setIsEditing(true);
    } 
    const handleOnKeyDown = (e) =>{
        const key = e.keyCode;
        if(key === 13) {
            setValue(tempValue);
            setIsEditing(false);
        }
        else if(key === 27){
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleOnChange = (e) =>{
        setTempValue(e.target.value);
    }
    const handleButtonClick = () => {
        setComplated((oldComplet) => !oldComplet);
    }

    return(
         isEditing ?
            <div className = "row">
                <div className = "column seven wide">
                    <div className = "ui input fluid">
                        <input 
                        onChange ={handleOnChange} 
                        onKeyDown = {handleOnKeyDown} 
                        autoFocus = {true}
                        value = {tempValue}
                        />
                    </div>
                </div>
            </div> :
            <div className = "ui grid center aligned">
                <div className = "row" >
                    <div className = "column five wide" onDoubleClick = {handleDoubleClick}>
                        <h2 className = {"ui header" + (complatedState ? " green" : "")}>{value}</h2>
                    </div>
                    <div className = "column one wide">
                        <button type = "" className = {"ui button circular icon" + (complatedState ? " blue" : " green")} onClick = {handleButtonClick}><i className = "white check icon"></i></button>
                    </div>
                    <div className = "column one wide">
                        <button type = "" onClick = {remTODO} className = "ui button circular icon red" ><i className = "white remove icon"></i></button>
                    </div>
                </div>
            </div>
        
    );
}

export default Todo;