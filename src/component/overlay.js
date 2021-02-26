import {Component} from 'react';

class Overlay extends Component {
	render() {
		let content = [];
		if (this.props.media === "img") {
			content = (
				<img 
					src={this.props.path} 
					alt={this.props.alt} 
					className="width-max-100 height-max-100" 
				/>
			);
		}
		else if (this.props.media === "vid") {
			content = (
				<video className="width-max-100 height-max-100" autoPlay controls>
					<source src={this.props.path} type={this.props.type} />
				</video>
			);
		}
		return (
			<div id="overlay" className="width-screen height-screen pos-fixed">
				<div 
					className="width-100 height-100 bg-black-60 pos-absolute" 
					onClick={() => this.props.toggle(false, {})}
				>
				</div>
				<div
					className="overlay-content center-center"
				>
					{content}
				</div>

			</div>
		);
	}
}

export default Overlay;