import TextBody from './textbody';
import ImgBody from './imagebody';
import VidBody from './videobody';
import TableBody from './tablebody';
import EmailBody from './emailbody';
import {Component} from 'react';

class TabBody extends Component {
	render() {
		let count = 0;
		let file_type = "";
		switch(this.props.activeTab) {
			case 0:
				return <TextBody />;
			case 1:
				count = 12;
				file_type = "jpg";
				return (
					<ImgBody 
						img_count={count} 
						img_type={file_type} 
						overlay={this.props.overlay}
					/>
				);
			case 2:
				count = 5;
				file_type = "mp4";
				return (
					<VidBody
						vid_count={count}
						vid_type={file_type} 
						overlay={this.props.overlay}
					/>
				);
			case 3:
				return (
					<TableBody />
				);
			case 4:
				return <EmailBody />;
			default:
				return null;
		}
	}
}

export default TabBody;