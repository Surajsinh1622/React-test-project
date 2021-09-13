import React from "react";
import Todo from "./TODO";

const List = ({list , remTODO}) => {
    const renderList = list.map((item) => <Todo title = {item.title} complated = {item.complated} key = {item.title} remTODO={(e) => remTODO(item.id)} /> );
    return(
        <div className = "ui grid center aligned">
            {renderList }
        </div>
    );
} 

export default List;