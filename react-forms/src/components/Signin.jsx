import { Button, Group, Box, Title } from '@mantine/core'
import { signinInitialValues } from '../utils/formInitialValues'
import { signinValidationSchema } from '../utils/validationSchemas'
import FormField from './form/FormField'
import PasswordField from './form/PasswordField'
import TextField from './form/TextField'

function Signin({ onSubmit, onChangeAuthForm }) {
	return (
		<Box maw={300} mx='auto' mt='10vh'>
			<Title order={3} align='center'>
				Авторизация
			</Title>
			<FormField
				onSubmit={onSubmit}
				initialValues={signinInitialValues}
				validateSchema={signinValidationSchema}
				btnSubmitLabel='Войти'>
				<TextField
					withAsterisk
					label='Почта'
					name='email'
					placeholder='Ваша почта'
					my='md'
				/>

				<PasswordField
					withAsterisk
					label='Пароль'
					placeholder='Ваш пароль'
					name='password'
					my='md'
				/>
			</FormField>
			<Group position='right' mt='md'>
				<Button
					onClick={() => onChangeAuthForm(false)}
					variant='subtle'>
					Регистрация
				</Button>
			</Group>
		</Box>
	)
}

export default Signin
