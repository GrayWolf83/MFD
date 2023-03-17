import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { Button } from '../../ui/Button'
import { Row } from '../../ui/Row'

const FormField = ({
	onSubmit,
	initialValues,
	validateSchema,
	btnSubmitLabel,
	children,
	...rest
}) => {
	const form = useForm({
		initialValues,
		validateSchema,
	})

	const handleSubmit = (e) => {
		const values = form.onSubmit(e)
		if (values) {
			onSubmit(values)
			form.setInputsValues(initialValues)
		}
	}

	return (
		<form onSubmit={handleSubmit} {...rest}>
			{React.Children.map(children, (child) => {
				const config = {
					...child.props,
					...form.getInputProps(child.props.name),
				}

				return React.cloneElement(child, config)
			})}
			<Row>
				<Button type='submit'>{btnSubmitLabel}</Button>
			</Row>
		</form>
	)
}

export default FormField
