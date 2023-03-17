import cls from './RadioInput.module.css'

const RadioInput = ({ name, label, value, required, onChange, options }) => {
	const handleChange = (e) => {
		onChange({ name, value: e.target.value })
	}

	return (
		<div className='input-group'>
			<p className='input-label'>
				{label}
				{required && <span className='required'> *</span>}
			</p>
			<div className={cls.inputBlock}>
				{options.map((item) => (
					<label key={item.value} className={cls.inputLabel}>
						<input
							className={cls.input}
							type='radio'
							name={name}
							value={item.value}
							onChange={handleChange}
							checked={value === item.value}
						/>

						{item.label}
					</label>
				))}
			</div>
		</div>
	)
}

export default RadioInput
