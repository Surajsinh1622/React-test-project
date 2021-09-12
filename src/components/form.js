import React from "react";

class Form extends React.Component{
    handleFormSubmit = (event) => {
        event.preventDefault();
        let value = document.querySelector("#name").value;
        alert(value); 
    }
    render(){
        return(
            <form onSubmit = {this.handleFormSubmit}>
                <input id = "name" type = "text"/>
                <input type = "submit" />
            </form>
        );
    }
}

export default Form;