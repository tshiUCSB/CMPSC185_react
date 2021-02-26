import {Component} from 'react';

class EmailBody extends Component {
	render() {
		return (
			<div className="pos-absolute center-center">
				<label>Email</label>
				<input id="email-input" type="text" name="email" placeholder="youremail@gmail.com" />
				<button id="email-submit-button">Submit</button>
				<p id="success-message" className="accent text-align-center"></p>
			</div>
		);
	}
}

export default EmailBody;