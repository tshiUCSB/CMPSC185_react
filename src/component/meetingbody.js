import Tasks from './tasks';
import AddTask from './addtask';
import {useState, useEffect} from 'react';

function MeetingBody() {
	const [tasks, set_tasks] = useState([]);
	const [create_mtg, set_create_mtg] = useState(false);

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

	const fetch_task = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();

		return data;
	}

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
	}

	const update_task = async (id) => {
		const up_task = await fetch_task(id);
		const upd_task = {...up_task, important: !up_task.important};

		const res = await fetch(`http://localhost:5000/tasks/${id}`, 
			{
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(upd_task),
			}
		);

		const data = await res.json();
		set_tasks(tasks.map(
				(task) => task.id === id ? {...task, important: data.important} : task
			)
		)
	}

	const delete_task = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`,
			{method: 'DELETE'});
		set_tasks(tasks.filter((task) => task.id !== id));
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
				<AddTask onAdd={add_task} /> : 
				<Tasks tasks={tasks} onDelete={delete_task} onUpdate={update_task} />
			}
		</div>
	);
}

export default MeetingBody;