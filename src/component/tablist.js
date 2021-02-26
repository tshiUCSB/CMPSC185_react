import Tab from './tab';
import {Component} from 'react';

class TabList extends Component {
	render() {
		let navbar = [];
		for(let i = 0; i < this.props.tabs.length; i++) {
			let props = {};
			props["title"] = this.props.tabs[i];
			if (this.props.activeTab === i) props["active"] = true;
			else props.["active"] = false;
			let tab = <Tab title={props.title} active={props.active} onClick={() => this.props.changeTab(i)} key={props.title} />;
			
			navbar.push(tab);
		}
		return navbar;
	}
}

export default TabList;