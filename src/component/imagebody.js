import {Component} from 'react';

class ImgBody extends Component {
	render() {
		let img_list = [];
		for(let i = 0; i < this.props.img_count; i++) {
			let file_name = `${process.env.PUBLIC_URL}/assets/images/${i}.${this.props.img_type}`;
			console.log(file_name);
			let img_tag = <img src={file_name} className="grid-img" alt="cat" key={i} />
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