import {Component} from 'react';

class VidBody extends Component {
	render() {
		let vid_list = [];
		for(let i = 0; i < this.props.vid_count; i++) {
			let file_name = `${process.env.PUBLIC_URL}/assets/videos/${i}.${this.props.vid_type}`;
			let tag_type = `video/${this.props.vid_type}`;
			let vid_tag = (
				<video 
					className="grid-vid" 
					key={i} 
					controls 
					onClick={(e) => this.props.overlay(true, {media: "vid", path: e.target.childNodes[0].src, type: e.target.childNodes[0].type})}
				>
					<source src={file_name} type={tag_type} />
				</video>
			);
			vid_list.push(vid_tag);
		}
		return (
			<div className="display-grid width-100 grid-col-auto grid-place-center grid-gap-10px">
				{vid_list}
			</div>
		);
	}
}

export default VidBody;