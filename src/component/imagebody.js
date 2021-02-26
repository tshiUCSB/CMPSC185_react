import {Component} from 'react';

class ImgBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			overlay_path: undefined,
			alt: ""
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({
			overlay_path: e.target.src,
			alt: e.target.alt
		});
	}

	render() {
		let img_list = [];
		for(let i = 0; i < this.props.img_count; i++) {
			let file_name = `${process.env.PUBLIC_URL}/assets/images/${i}.${this.props.img_type}`;
			let img_tag = (
				<img 
					src={file_name} 
					className="grid-img" 
					alt="cat" 
					key={i} 
					onClick={(e) => this.props.overlay(true, {media: "img", path: e.target.src, alt: e.target.alt})} />
			);
			img_list.push(img_tag);
		}

		return (
			<div className="display-grid width-100 grid-col-auto grid-place-center grid-gap-10px">
				{img_list}
			</div>
		);
	}
}

export default ImgBody;