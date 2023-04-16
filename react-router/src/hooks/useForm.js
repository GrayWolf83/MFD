import { useState, useRef, useEffect, useCallback } from 'react'

function checkValidation(errors) {
	return !Boolean(Object.keys(errors).filter((item) => errors[item]).length)
}

export function useForm({ initialValues, validateSchema }) {
	const [values, setValues] = useState(initialValues)
	const [errors, setErrors] = useState({})
	const isStartValidation = useRef(false)

	const validation = useCallback(() => {
		let currentErrors = Object.keys(values).reduce((acc, name) => {
			return Object.assign(acc, {
				[name]: validateSchema[name](values[name]),
			})
		}, {})

		if (validateSchema?.dependencies && checkValidation(currentErrors)) {
			const depErrors = validateSchema.dependencies.reduce((acc, dep) => {
				const depValues = dep.names.map((name) => values[name])

				return Object.assign(acc, dep.cb(...depValues))
			}, {})

			currentErrors = { ...currentErrors, ...depErrors }
		}
		setErrors(currentErrors)

		return checkValidation(currentErrors)
	}, [values, validateSchema])

	// Валидация ввода каждого символа начинается после того как пользователь первый раз нажмет кнопку отправки формы
	useEffect(() => {
		if (isStartValidation.current) {
			validation()
		}
	}, [validation])

	const handleChange = ({ name, value }) => {
		setValues((prev) => ({ ...prev, [name]: value }))
	}

	const onSubmit = (e) => {
		e.preventDefault()
		const isValid = validation()
		if (!isStartValidation.current && !isValid) {
			isStartValidation.current = true
		}

		if (isValid) {
			isStartValidation.current = false
			return values
		}
	}

	const getInputProps = (name) => ({
		name,
		value: values[name] || '',
		onChange: handleChange,
		error: errors[name] || '',
	})

	const setInputsValues = (values) => {
		setValues(values)
	}

	return { getInputProps, setInputsValues, onSubmit }
}
