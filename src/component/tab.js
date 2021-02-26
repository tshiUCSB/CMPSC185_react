import { Component } from 'react';

class Tab extends Component {
	render() {
		if (this.props.active) {
			return (
				<div className="navbar-item accent" onClick={this.props.onClick}>
					{this.props.title}
				</div>
			);
		}
		else {
			return (
				<div className="navbar-item" onClick={this.props.onClick}>
					{this.props.title}
				</div>
			);
		}
	}
}

export default Tab;