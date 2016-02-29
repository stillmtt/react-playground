"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var elm = document.getElementById('cycle');

class Cycle extends React.Component {

	constructor(){
		super();
		this.state = {
			val: 2,
			m: 1,
			increasing: false
		};
		this.update = this.update.bind(this);
	}

	update(){
		this.setState({val: this.state.val + 1});
	}

	componentWillReceiveProps(nextProps){
		console.log('will', nextProps.val);
		console.log('will this', this.props.val);
		this.setState({increasing: nextProps.val > this.props.val});
		return false;
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('nextProps val',nextState.val);
		return nextState.val % 2 === 0;	
	}
	componentDidUpdate(prevProps, prevState){
		console.log('prevState', prevState);
	}

	componentWillMount(){
		this.setState({m: 2});
	}

	componentDidMount(){
		this.inc = setInterval(this.update, 1000);
	}

	componentWillUnmount(){
		clearInterval(this.inc);
	}

	render(){
		console.log(this.state.increasing);
		return(
			<div>
				<button onClick={this.update}>{this.state.val * this.state.m}</button>
				<p>{this.state.phase}</p>
				<p>{this.state.increasing}</p>
			</div>
		) 

	}

}

class Wrapper extends React.Component {
	constructor(){
		super();
		this.mount = this.mount.bind(this);
		this.unmount = this.unmount.bind(this);
	}
	mount(){
		ReactDOM.render(<Cycle />, document.getElementById('count'));
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('count'));
	}
	render(){
		return (
			<div>
				<button onClick={this.mount}>Mount</button>
				<button onClick={this.unmount}>Unmount</button>
				<div id='count'></div>
			</div>
		)
	}
}


ReactDOM.render(<Wrapper />, elm);


