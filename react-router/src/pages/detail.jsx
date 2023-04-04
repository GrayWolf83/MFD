import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DetailCard } from '../components'
import { getItemById } from '../utils/getDataFunctions'

const Detail = () => {
	const { id, category } = useParams()
	const [item, setItem] = useState({})
	const navigate = useNavigate()

	useEffect(() => {
		if (id && category) {
			const data = getItemById(Number(id), category)
			if (data) {
				setItem(data)
			} else {
				navigate(-1)
			}
		}
	}, [id, category, navigate])

	return <DetailCard item={item} />
}

export default Detail
