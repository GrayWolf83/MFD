import cls from './TextInput.module.css'

const TextInput = ({
	label,
	onChange,
	type = 'text',
	required = false,
	error,
	icon,
	...rest
}) => {
	const getInputClasses = () => {
		let inputClasses = 'text-input'

		if (icon) {
			inputClasses += ' ' + cls.inputIcon
		}

		if (error) {
			inputClasses += ' ' + cls.inputError
		}

		return inputClasses
	}

	const showButtonClasses = error
		? cls.button + ' ' + cls.buttonError
		: cls.button

	const handleChange = (e) => {
		onChange({ name: [e.target.name], value: e.target.value })
	}

	return (
		<div className='input-group'>
			<label className='input-label'>
				{label} {required && <span className='required'> *</span>}
				<div className={cls.inputBlock}>
					{icon && (
						<button
							type='button'
							className={showButtonClasses}
							disabled>
							{icon}
						</button>
					)}
					<input
						className={getInputClasses()}
						onChange={handleChange}
						type={type}
						{...rest}
					/>
				</div>
			</label>
			{error && <p className='error'>{error}</p>}
		</div>
	)
}

export default TextInput
