import { useHover } from '../hooks/useHover'

const Task3 = () => {
	const { hovered, ref } = useHover()

	return (
		<div className='block'>
			<h4 className='title'>Задание 3 useHover</h4>
			<div>
				<p ref={ref} className='hover'>
					{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
				</p>
			</div>
			<hr />
		</div>
	)
}

export default Task3
