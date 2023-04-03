import cls from './Container.module.css'

const Container = ({ children }) => {
	return <div className={cls.container}>{children}</div>
}

export default Container
