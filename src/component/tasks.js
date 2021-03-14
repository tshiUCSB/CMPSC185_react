import Task from './task';

function Tasks({tasks, onDelete, onUpdate}) {
	return (
		<div className="display-flex flex-dir-col flex-align-items">
			{
				tasks.map((task) => <Task key={task.id} task={task} onDelete={onDelete} />)
			}
		</div>
	);
}

export default Tasks;