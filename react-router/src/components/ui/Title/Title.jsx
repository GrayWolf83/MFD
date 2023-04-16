import cls from './Title.module.css'

const Title = ({ title }) => {
	return <h2 className={cls.title}>{title}</h2>
}

export default Title
