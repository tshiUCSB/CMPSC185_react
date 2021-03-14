import Task from './task';

function Tasks({tasks, onDelete, onUpdate}) {
	if (tasks.length === 0)
		return <p className="text-white text-align-center">No Available Meeting</p>
	return (
		<div className="display-flex flex-dir-col flex-align-items">
			{
				tasks.map((task) => <Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />)
			}
		</div>
	);
}

export default Tasks;