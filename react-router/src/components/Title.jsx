import { Typography } from 'antd'

const Title = ({ children, ...rest }) => {
	return (
		<Typography.Title level={3} {...rest} style={{ margin: '12px 0' }}>
			{children}
		</Typography.Title>
	)
}

export default Title
