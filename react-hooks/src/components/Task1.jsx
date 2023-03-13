import { useFetch } from '../hooks/useFetch'

const Task1 = () => {
	const { data, isLoading, error, refetch } = useFetch(
		'https://jsonplaceholder.typicode.com/posts',
	)

	return (
		<div className='block'>
			<h4 className='title'>Задание 1 useFetch</h4>
			<div>
				<button
					onClick={() =>
						refetch({
							params: {
								_limit: 3,
							},
						})
					}>
					Перезапросить
				</button>
			</div>
			{isLoading && 'Загрузка...'}
			{error && 'Произошла ошибка'}
			{data &&
				!isLoading &&
				data.map((item) => <div key={item.id}>{item.title}</div>)}
			<hr />
		</div>
	)
}

export default Task1
