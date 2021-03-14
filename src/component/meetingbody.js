import Tasks from './tasks';
import WriteTask from './writetask';
import {useState, useEffect} from 'react';

function MeetingBody() {
	const [tasks, set_tasks] = useState([]);
	const [create_mtg, set_create_mtg] = useState(false);
	const [up_task, set_up_task] = useState({});
	const [last_up_task_id, set_last_up_task_id] = useState(-1);

	useEffect(() => {
		const get_tasks = async () => {
			const server_tasks = await fetch_tasks();
			set_tasks(server_tasks);
		};
		get_tasks();
	}, []);

	const fetch_tasks = async () => {
		const res = await fetch("http://localhost:5000/tasks");
		const data = await res.json();
		return data;
	};

	const add_task = async (task) => {
		const res = await fetch("http://localhost:5000/tasks",
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(task),
			}
		);
		const data = await res.json();
		set_tasks([...tasks, data]);

		set_create_mtg(false);
	}

	const update_task = async (upd_task) => {
		await fetch(`http://localhost:5000/tasks/${upd_task.id}`, 
			{
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(upd_task),
			}
		);

		set_tasks(tasks.map(
				(task) => task.id === upd_task.id ? upd_task : task
			)
		)

		set_up_task({});
	}

	const delete_task = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`,
			{method: 'DELETE'});
		set_tasks(tasks.filter((task) => task.id !== id));
	}

	const req_update = (task) => {
		set_last_up_task_id(up_task.id);
		if (up_task.id === task.id)
			set_up_task({});
		else
			set_up_task(task);
	}

	return (
		<div className="pos-absolute width-60 py-12 min-width-300px bg-black-70 horiz-center border-radius-15px text-white">
			<p className="m-24">Zoom Meeting Manager</p>
			<button 
				onClick={(e) => set_create_mtg(!create_mtg)}
				className="width-25 m-24 pos-absolute top-right-corner"
			>
				{create_mtg ? "Full Schedule" : "Create Meeting"}
			</button> 

			{create_mtg ?
				<WriteTask onSubmit={add_task} taskID={-1} /> : 
				<Tasks tasks={tasks} onDelete={delete_task} onUpdate={req_update} />
			}

			{!create_mtg && up_task.id && up_task.id > 0 && last_up_task_id !== up_task.id ? <WriteTask onSubmit={update_task} taskID={up_task.id} /> : null}
		</div>
	);
}

export default MeetingBody;