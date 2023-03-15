import { TextInput } from '@mantine/core'

const TextField = ({ onChange, ...rest }) => {
	const handleChange = (e) => {
		onChange({ name: [e.target.name], value: e.target.value })
	}

	return <TextInput onChange={handleChange} {...rest} />
}

export default TextField
