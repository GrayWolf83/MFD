import cls from './Button.module.css'

const Button = ({ children, variant = 'primary', ...rest }) => {
	const classes = cls.button + ' ' + cls[variant]

	return (
		<button className={classes} {...rest}>
			{children}
		</button>
	)
}

export default Button
