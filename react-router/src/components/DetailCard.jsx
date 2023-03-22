import { Avatar, Card } from 'antd'
import { convertDate } from '../utils/convertDateFunctions'
import Title from './Title'

const DetailCard = ({ item }) => {
	// Убираю поля, не нужные для отображения в цикле и поля с пустыми значениями
	const keys = Object.keys(item).filter(
		(key) => !['id', 'name', 'image'].includes(key) && item[key],
	)

	return (
		<>
			{Boolean(keys.length) && (
				<>
					<Card
						title={
							<Title>
								{item?.image && <Avatar src={item.image} />}{' '}
								{item.name}
							</Title>
						}>
						{keys.map((key) => (
							<Card.Grid
								key={key}
								hoverable={false}
								style={{
									width: '25%',
								}}>{`${key}: ${
								key === 'created'
									? convertDate(item[key])
									: item[key]
							}`}</Card.Grid>
						))}
					</Card>
				</>
			)}
		</>
	)
}

export default DetailCard
