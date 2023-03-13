import { useToggle } from '../hooks/useToggle'

const TaskAdd2 = () => {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

	return (
		<div className='block'>
			<h4 className='title'>Дополнительное задание 2 useWindowScroll</h4>
			<div>
				<h4 className='title'>{value.toString()}</h4>

				<button onClick={() => toggle()}>Toggle</button>
				<button onClick={() => toggle('cyan')}>Set Cyan</button>
			</div>
			<hr />
		</div>
	)
}

export default TaskAdd2
