// import logo from './logo.svg';
import './App.css';
import './style.css';

import TabList from './component/tablist';
import TabBody from './component/body';
import ScrollTopButton from './component/scrolltop';
import Overlay from './component/overlay';
import {Component} from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			active: 0,
			overlay: false,
			overlay_info: {}
		};

		this.changeTab = (id) => {
			this.setState({
				active: id,
				overlay: false,
				overlay_info: {}
			});
		};

		this.toggleOverlay = (state, info) => {
			this.setState({
				active: this.state.active,
				overlay: state,
				overlay_info: info
			});
		};
	}

	render() {
		let tabs = ["Text", "Images", "Videos", "Table", "Email", "Meetings"];

		let overlay = [];
		if (this.state.overlay) {
			overlay = (
				<Overlay
					toggle={this.toggleOverlay} 
					media={this.state.overlay_info.media} 
					path={this.state.overlay_info.path} 
					alt={this.state.overlay_info.alt}
					type={this.state.overlay_info.type}
				/>
			);
		}
		return (
			<div>
				{overlay}
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
						overlay={this.toggleOverlay}
					/>
				</section>
				<ScrollTopButton />
			</div>
		);
	}
}



export default App;
