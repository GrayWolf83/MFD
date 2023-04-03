import cls from './Box.module.css'

const Box = ({ children }) => {
	return <div className={cls.box}>{children}</div>
}

export default Box
