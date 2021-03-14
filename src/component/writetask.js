import {useState} from 'react';

function WriteTask({onSubmit, taskID}) {
	// const [title, set_title] = useState(task.title);
	// const [day, set_day] = useState(task.day);
	// const [url, set_url] = useState(task.textInfor);
	// const [important, set_imp] = useState(task.important);

	const [title, set_title] = useState("");
	const [day, set_day] = useState("");
	const [url, set_url] = useState("");
	const [important, set_imp] = useState(false);

	const [title_err, set_title_err] = useState("Title cannot be empty");
	const [day_err, set_day_err] = useState("Date must be set");
	const [url_err, set_url_err] = useState("Link cannot be empty");

	const [submit_valid, set_submit_valid] = useState(false);

	const on_submit = (e) => {
		e.preventDefault();

		if (title_err !== "" || day_err !== "" || url_err !== "") return;
		
		let textInfor = url;
		let task = {title, day, textInfor, important};
		if (taskID > 0) task.id = taskID;
		onSubmit(task);

		set_title("");
		set_day("");
		set_url("");
		set_imp(false);

		set_title_err("Title cannot be empty");
		set_day_err("Date must be set");
		set_url_err("Link cannot be empty");

		set_submit_valid(false);
	}

	const check_submit_valid = () => {
		if (title_err !== "" || day_err !== "" || url_err !== "") 
			set_submit_valid(false);
		else set_submit_valid(true);
	}

	const handle_title_change = (val) => {
		set_title(val);

		if (val.length === 0) 
			set_title_err("Title cannot be empty");
		else if (val.length > 30) 
			set_title_err("Title must be less than 30 characters long");
		else {
			set_title_err("");
			check_submit_valid();
		}
	}

	const handle_date_change = (val) => {
		set_day(val);

		let curr_date = Date.now();
		let mtg_date = Date.parse(val);

		if (curr_date > mtg_date)
			set_day_err("Meeting time has to be in the future");
		else {
			set_day_err("");
			check_submit_valid();
		}
	}

	const handle_url_change = (val) => {
		set_url(val);

		if (val.length === 0)
			set_url_err("Link cannot be empty");
		else if (!val.includes("zoom"))
			set_url_err("Link must be a zoom URL");
		else {
			set_url_err("");
			check_submit_valid();
		}
	}

	return (
		<form
			onSubmit={on_submit}
			className="display-flex flex-dir-col flex-align-items width-100 my-24"
		>
			<div className="width-80">
				<label>Meeting Title</label>
				<span className="accent mx-12">{title_err}</span>
				<input 
					type="text" 
					placeholder="My Meeting"
					value={title}
					onChange={(e) => handle_title_change(e.target.value)}
					className="width-100 bg-black-40 text-white my-10"
				/>
			</div>

			<div className="width-80">
				<label >Date</label>
				<span className="accent mx-12">{day_err}</span>
				<input 
					type="datetime-local" 
					value={day}
					onChange={(e) => handle_date_change(e.target.value)}
					className="width-100 bg-black-40 text-white my-10"
				/>
			</div>

			<div className="width-80">
				<label>Zoom URL</label>
				<span className="accent mx-12">{url_err}</span>
				<input 
					type="url" 
					placeholder="https://ucsb.zoom.us/j/##########"
					value={url}
					onChange={(e) => handle_url_change(e.target.value)}
					className="width-100 bg-black-40 text-white my-10"
				/>
			</div>

			<div className="width-80 my-10">
				<label >Important</label>
				<input 
					type="checkbox" 
					checked={important}
					onChange={(e) => set_imp(e.currentTarget.checked)}
					className="mx-12 cursor-pointer"
				/>
			</div>

			<input 
				type="submit" 
				value="Save Meeting" 
				className={"width-80 bg-color-accent text-white" + (submit_valid ? " cursor-pointer" : " opacity-40")}
				onSubmit={on_submit}
			/>
		</form>
	);
}

export default WriteTask;