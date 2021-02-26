// referenced https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js
// for using ComponentDidMount and ComponentWillUnmount for window onScroll event

import {Component} from 'react';

class ScrollTopButton extends Component {
	constructor() {
		super();
		this.state = {
			show_button: false
		}

		this.handleScroll = this.handleScroll.bind(this);
	}

	calcScrollLength() {
		let window_height = window.innerHeight;
		let doc_height = Math.max(document.body.scrollHeight,
			document.body.offsetHeight, 
			document.body.clientHeight,
			document.documentElement.scrollHeight,
			document.documentElement.offsetHeight,
			document.documentElement.clientHeight);

		return doc_height - window_height;
	}

	handleScroll(e) {
		let scroll_length = this.calcScrollLength();
		let scroll_percent = window.pageYOffset / scroll_length * 100;
		let show = false;
		if (scroll_percent > 25) show = true;
		
		this.setState({
			show_button: show
		})
	}

	scrollTop(e) {
		window.scroll(0, 0);
	}

	componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}

	render() {
		let scroll_button = null;
		if (this.state.show_button) {
			scroll_button = (
				<button 
					id="scroll-button" 
					className="horiz-center pos-fixed bottom-24px" 
					onClick={this.scrollTop}
				>
					Back to top
				</button>
			);
		}

		return scroll_button;
	}
}

export default ScrollTopButton;