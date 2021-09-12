import React from "react"

const Header = () => {
	return <h1>Click the button!</h1>;
};

function sayHello() {
	console.log("Hello!");
};


class Button extends React.Component{
	constructor(){
		super();
		this.state = { counter:0 };
	}

	handelButtonClick = () => {
		this.setState({counter:1});
	}

	render(){
		return <button onClick={this.handelButtonClick}>{this.state.counter}</button>
	}
}

class Counter extends React.Component{
	constructor(){
		super()
		this.state = {counter:0};
		this.timer = null;
	}
	componentDidMount(){
		this.timer = setInterval(() => {
			this.setState({ counter : this.state.counter+1 })
		}, 1000);
	}
	componentWillUnmount(){
		clearInterval(this.timer);
	}
	render(){
		return<h1>{this.state.counter}</h1>
	}
}

class App extends React.Component{
	render(){
		return (
			<div>
				<Header/>
				<Button />
				<Counter />
			</div>
		);
	}
}

export default App;