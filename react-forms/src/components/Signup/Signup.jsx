import { signupInitialValues } from '../../utils/formInitialValues'
import { signupValidationSchema } from '../../utils/validationSchemas'
import { FormField } from '../form/FormField'
import PasswordInput from '../form/PasswordInput/PasswordInput'
import RadioInput from '../form/RadioInput/RadioInput'
import TextInput from '../form/TextInput/TextInput'
import { Box } from '../ui/Box'
import { Button } from '../ui/Button'
import { Row } from '../ui/Row'
import { Title } from '../ui/Title'

function Signup({ onSubmit, onChangeAuthForm }) {
	return (
		<Box>
			<Title title='Регистрация' />
			<FormField
				onSubmit={onSubmit}
				initialValues={signupInitialValues}
				validateSchema={signupValidationSchema}
				btnSubmitLabel='Регистрация'>
				<TextInput
					label='Имя'
					placeholder='Ваше имя'
					name='name'
					required
				/>
				<TextInput
					label='Ник'
					placeholder='Ваш ник'
					name='nick'
					icon={'@'}
					required
				/>
				<TextInput
					label='Почта'
					placeholder='Ваша почта'
					name='email'
					type='email'
					required
				/>

				<RadioInput
					name='gender'
					label='Пол'
					required
					options={[
						{ value: 'male', label: 'Мужчина' },
						{ value: 'female', label: 'Женщина' },
					]}
				/>

				<PasswordInput
					label='Пароль'
					placeholder='Ваш пароль'
					name='password'
				/>

				<PasswordInput
					label='Повтор пароля'
					placeholder='Повторите пароль'
					name='repeatPassword'
				/>
			</FormField>

			<Row position='right'>
				<Button onClick={() => onChangeAuthForm(true)} variant='subtle'>
					Войти
				</Button>
			</Row>
		</Box>
	)
}

export default Signup
