import { Row } from 'antd'
import CategoryCard from './CategoryCard'

const CategoriesList = ({ items, category }) => {
	return (
		<Row gutter={16}>
			{Boolean(items?.length) &&
				items.map((item) => (
					<CategoryCard
						key={item.id}
						item={item}
						category={category}
					/>
				))}
		</Row>
	)
}

export default CategoriesList
