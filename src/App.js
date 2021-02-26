// import logo from './logo.svg';
import './App.css';
import './style.css';

import TabList from './component/tablist';
import TabBody from './component/body';
import {Component} from 'react';


// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

class App extends Component {
	constructor() {
		super();
		this.state = {
			active: 0
		};
		this.changeTab = (id) => {
			console.log(id);
			this.setState({
				active: id
			});
		}
	}

	render() {
		let tabs = ["Text", "Images", "Videos", "Table", "Email"];
		return (
			<div>
				<div className="navbar width-screen display-flex">
					<TabList 
						tabs={tabs} 
						activeTab={this.state.active} 
						changeTab={this.changeTab} 
					/>
				</div>
				<section>
					<TabBody 
						activeTab={this.state.active}
					/>
				</section>
			</div>
		);
	}
}



export default App;
