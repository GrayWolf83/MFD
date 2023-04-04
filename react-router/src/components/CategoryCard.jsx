import { Card, Col } from 'antd'
import { Link } from 'react-router-dom'

const CategoryCard = ({ item, category }) => {
	return (
		<Col span={8} style={{ marginBottom: 10 }}>
			<Link to={`/detail/${category}/${item.id}`}>
				<Card bordered={true}>{item.name}</Card>
			</Link>
		</Col>
	)
}

export default CategoryCard
