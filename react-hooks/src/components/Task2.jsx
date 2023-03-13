import { useLocalStorage } from '../hooks/useLocalStorage'

const Task2 = () => {
	const [token, { setItem, removeItem }] = useLocalStorage('token')

	return (
		<div className='block'>
			<h4 className='title'>Задание 2 useLocalStorage</h4>
			<p>Твой токен: {token}</p>
			<div>
				<button onClick={() => setItem('new-token')}>
					Задать токен
				</button>
				<button onClick={() => removeItem()}>Удалить токен</button>
			</div>

			<hr />
		</div>
	)
}

export default Task2
