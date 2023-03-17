import { signinInitialValues } from '../../utils/formInitialValues'
import { signinValidationSchema } from '../../utils/validationSchemas'
import { FormField } from '../form/FormField'
import PasswordInput from '../form/PasswordInput/PasswordInput'
import TextInput from '../form/TextInput/TextInput'
import Box from '../ui/Box/Box'
import { Button } from '../ui/Button'
import { Row } from '../ui/Row'
import { Title } from '../ui/Title'

function Signin({ onSubmit, onChangeAuthForm }) {
	return (
		<Box>
			<Title title='Авторизация' />
			<FormField
				onSubmit={onSubmit}
				initialValues={signinInitialValues}
				validateSchema={signinValidationSchema}
				btnSubmitLabel='Войти'>
				<TextInput
					label='Почта'
					name='email'
					type='email'
					placeholder='Ваша почта'
					required
				/>

				<PasswordInput
					label='Пароль'
					placeholder='Ваш пароль'
					name='password'
				/>
			</FormField>
			<Row position='right'>
				<Button
					onClick={() => onChangeAuthForm(false)}
					variant='subtle'>
					Регистрация
				</Button>
			</Row>
		</Box>
	)
}

export default Signin
