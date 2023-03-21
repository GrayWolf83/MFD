import cls from './Row.module.css'

const Row = ({ children, position }) => {
	const classes = position ? cls.row + ' ' + cls[position] : cls.row

	return <div className={classes}>{children}</div>
}

export default Row
