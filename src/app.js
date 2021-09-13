import React, { useState } from "react"
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";

const appTitle = "To-Do-List APP";

const list = [
	{ id : 1 , title : "Test #1" , complated : false },
	{ id : 2 , title : "Test #2" , complated : false },
	{ id : 3 , title : "Test #3" , complated : false } 
];

const App  = () => {
	const [todoList , setTodoList] = useState(list);
	const addTodo = (item) => {
		setTodoList((oldList) => [...oldList,item]);
	}
	const remTODO = (id) => {
		setTodoList((oldlist) => oldlist.filter((item) => item.id !== id));
	}
	return(
		<div className = "ui container center aligned">
			<Section>
				<h1>{appTitle}</h1>
			</Section>
			<Section>
				<Form addTodo = { addTodo }/>
			</Section>
			<Section>
				<List remTODO = {remTODO} list = { todoList }/>
			</Section>
		</div>
	);
}

export default App;