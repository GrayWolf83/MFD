import { useViewportSize } from '../hooks/useViewportSize'

const Task4 = () => {
	const { height, width } = useViewportSize()

	return (
		<div className='block'>
			<h4 className='title'>Задание 4 useViewportSize</h4>
			<div>
				<h4 className='title'>
					Width: {width}, height: {height}
				</h4>
			</div>
			<hr />
		</div>
	)
}

export default Task4
