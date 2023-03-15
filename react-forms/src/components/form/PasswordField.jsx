import { PasswordInput } from '@mantine/core'

const PasswordField = ({ onChange, ...rest }) => {
	const handleChange = (e) => {
		onChange({ name: [e.target.name], value: e.target.value })
	}

	return <PasswordInput onChange={handleChange} {...rest} />
}

export default PasswordField
