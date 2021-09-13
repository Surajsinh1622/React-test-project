import React, { useState } from "react";

const Form = ({addTodo}) => {
    const [inputValue , setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim() === "") return;

        addTodo({ title:inputValue, completed:false })
        setInputValue("");
    }
    return(
        <div>
            <form className = "ui container" onSubmit = {handleOnSubmit}>
                <input 
                type = "text" 
                placeholder = "Enter somthing TO DO"
                value = {inputValue}
                onChange = {handleInputChange}
                />
                <button type = "submit" className = "ui button circular icon green"><i className = "plus icon white"></i></button>
            </form>
        </div>
    );
}

export default Form;