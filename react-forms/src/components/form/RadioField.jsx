import { Group, Radio } from '@mantine/core'

const RadioField = ({ name, onChange, styles, options, ...rest }) => {
	const handleChange = (value) => {
		onChange({ name, value })
	}

	return (
		<Radio.Group {...rest} onChange={handleChange}>
			<Group {...styles}>
				{options.map((item) => (
					<Radio
						key={item.value}
						value={item.value}
						label={item.label}
					/>
				))}
			</Group>
		</Radio.Group>
	)
}

export default RadioField
