import { useEffect, useState, useCallback } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getCategoriesByName } from '../utils/getDataFunctions'
import { CategoriesList, Title } from '../components'
import { sortByCreated } from '../utils/convertDateFunctions'
import { Button, Row } from 'antd'
import SortAscIcon from '../icons/sortAsc'
import SortDescIcon from '../icons/sortDesc'

const Category = () => {
	const { category } = useParams()
	const [items, setItems] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()

	const loadItems = useCallback(() => {
		const data = getCategoriesByName(category)
		if (!searchParams.get('sort')) {
			setSearchParams({ sort: 'ASC' })
		}
		setItems(data)
	}, [category, setSearchParams, searchParams])

	useEffect(() => {
		loadItems()
	}, [loadItems])

	const handleChangeSort = () => {
		setSearchParams({
			sort: searchParams.get('sort') === 'ASC' ? 'DESC' : 'ASC',
		})
	}

	const sortedItems = sortByCreated(searchParams.get('sort'), items)

	return (
		<>
			<Row align={'middle'}>
				<Title>Category "{category}"</Title>
				<Button
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 10,
						marginLeft: 'auto',
					}}
					onClick={handleChangeSort}>
					Сортировка{' '}
					{searchParams.get('sort') === 'ASC' ? (
						<SortAscIcon />
					) : (
						<SortDescIcon />
					)}
				</Button>
			</Row>

			<CategoriesList items={sortedItems} category={category} />
		</>
	)
}

export default Category
