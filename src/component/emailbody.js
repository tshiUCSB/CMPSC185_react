import {Component} from 'react';

class EmailBody extends Component {
	constructor() {
		super();
		this.state = {
			value: "",
			email_valid: null
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			value: e.target.value,
			email_valid: null
		});
	}

	handleSubmit(e) {
		this.setState({
			value: this.state.value,
			email_valid: this.validateEmail(this.state.value)
		});
		e.preventDefault();
	}

	validateEmail(email) {
		let suffix = email.slice(-4);
		let at = email.indexOf('@');
		let validity = at >= 0 && (suffix == ".com" || suffix == ".edu");

		return validity;
	}
	render() {
		let msg = "";
		if (this.state.email_valid === true) msg = "Email successfully recorded";
		else if (this.state.email_valid === false) msg = "Invalid email address";

		return (
			<form className="pos-absolute center-center" onSubmit={this.handleSubmit}>
				<label>Email</label>
				<input 
					id="email-input" 
					type="text" name="email" 
					placeholder="youremail@gmail.com" 
					onChange={this.handleChange} 
					value={this.state.value}
				/>
				<input type="submit" value="Submit" id="email-submit-button" />
				<p id="success-message" className="accent text-align-center">{msg}</p>
			</form>
		);
	}
}

export default EmailBody;