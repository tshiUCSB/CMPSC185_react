import delete_icon from '../icons/delete_icon.png';

function Task({task, onDelete, onUpdate}) {
	let imp_class = "";
	if (task.important) imp_class = " border-highlight";

	return (
		<div 
			onDoubleClick={(e) => onUpdate(task)}
			className={"width-90 border-radius-15px bg-black-40 hover-bg-black-60 my-10 p-12 cursor-pointer" + imp_class}
		>
			<img
				onClick={() => onDelete(task.id)}
				className="float-right width-24px hover-scale-110"
				src={delete_icon}
				alt="delete meeting"
			/>

			<div className="width-60 text-white">
				<h3>{task.title}</h3>
				<p className="opacity-80">{task.day}</p>
				<a className="accent opacity-80 hover-opacity-100" href={task.textInfor}>{task.textInfor}</a>
			</div>
		</div>
	);
}

export default Task;