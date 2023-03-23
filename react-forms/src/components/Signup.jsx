import { Button, Group, Box, Title } from '@mantine/core'
import { signupInitialValues } from '../utils/formInitialValues'
import { signupValidationSchema } from '../utils/validationSchemas'
import FormField from './form/FormField'
import PasswordField from './form/PasswordField'
import RadioField from './form/RadioField'
import TextField from './form/TextField'

function Signup({ onSubmit, onChangeAuthForm }) {
	return (
		<Box maw={300} mx='auto' mt='10vh'>
			<Title order={3} align='center'>
				Регистрация
			</Title>
			<FormField
				onSubmit={onSubmit}
				initialValues={signupInitialValues}
				validateSchema={signupValidationSchema}
				btnSubmitLabel='Регистрация'>
				<TextField
					withAsterisk
					label='Имя'
					placeholder='Ваше имя'
					name='name'
					my='md'
				/>
				<TextField
					withAsterisk
					label='Ник'
					placeholder='@Ваш ник'
					name='nick'
					my='md'
				/>
				<TextField
					withAsterisk
					label='Почта'
					placeholder='Ваша почта'
					name='email'
					my='md'
				/>

				<RadioField
					name='gender'
					label='Пол'
					options={[
						{ value: 'male', label: 'Мужчина' },
						{ value: 'female', label: 'Женщина' },
					]}
					styles={{ my: 'md' }}
				/>

				<PasswordField
					withAsterisk
					label='Пароль'
					placeholder='Ваш пароль'
					name='password'
					my='md'
				/>

				<PasswordField
					withAsterisk
					label='Повтор пароля'
					placeholder='Повторите пароль'
					name='repeatPassword'
					my='md'
				/>
			</FormField>

			<Group position='right' mt='md'>
				<Button onClick={() => onChangeAuthForm(true)} variant='subtle'>
					Войти
				</Button>
			</Group>
		</Box>
	)
}

export default Signup
