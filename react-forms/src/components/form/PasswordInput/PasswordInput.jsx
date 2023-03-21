import { useState } from 'react'
import Visible from '../../../icons/Visible'
import Hide from '../../../icons/Hide'
import cls from './PasswordInput.module.css'

const PasswordInput = ({ label, onChange, error, ...rest }) => {
	const [isShow, setShow] = useState(false)
	const inputClasses = error
		? 'text-input ' + cls.input + ' ' + cls.inputError
		: 'text-input ' + cls.input

	const showButtonClasses = error
		? cls.button + ' ' + cls.buttonError
		: cls.button

	const handleChange = (e) => {
		onChange({ name: [e.target.name], value: e.target.value })
	}

	return (
		<div className='input-group'>
			<label className='input-label'>
				{label} <span className='required'> *</span>
				<div className={cls.inputBlock}>
					<input
						type={isShow ? 'text' : 'password'}
						className={inputClasses}
						onChange={handleChange}
						{...rest}
					/>
					<button
						type='button'
						className={showButtonClasses}
						onClick={() => setShow((prev) => !prev)}>
						{isShow ? (
							<Hide className={cls.icon} />
						) : (
							<Visible className={cls.icon} />
						)}
					</button>
				</div>
			</label>
			{error && <p className='error'>{error}</p>}
		</div>
	)
}

export default PasswordInput
