import {Component} from 'react';

class TextBody extends Component {
	render() {
		return (
			<div className="pos-absolute center-center">
				<div className="my-10">
					<label>Last game you've played?</label>
					<input type="text" name="last-game" placeholder="Terraria" />
				</div>

				<div className="my-24">
					<label>Favorite game you've played?</label>
					<input type="text" name="fav-game" placeholder="Hollow Knight" />
				</div>

				<h3>Press <span className="accent">F</span> to pay respect or press <span className="accent">X</span> to Shaun</h3>
				<input type="radio" name="press-button" id="respect" value="pay-respect" />
				<label>F</label>
				<input type="radio" name="press-button" id="shaun" value="shaun" />
				<label>X</label>

				<div className="text-align-center">
					<button>Press</button>
				</div>
			</div>
		);
	}
}

export default TextBody;