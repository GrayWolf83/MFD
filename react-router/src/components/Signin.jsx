import { signinInitialValues } from './../utils/formInitialValues'
import { signinValidationSchema } from './../utils/validationSchemas'
import { FormField } from './form/FormField'
import TextInput from './form/TextInput/TextInput'
import Box from './ui/Box/Box'
import { Title } from './ui/Title'

function Signin({ onSubmit }) {
	return (
		<Box>
			<Title title='Авторизация' />
			<FormField
				onSubmit={onSubmit}
				initialValues={signinInitialValues}
				validateSchema={signinValidationSchema}
				btnSubmitLabel='Войти'>
				<TextInput
					label='Имя'
					name='username'
					placeholder='Ваше имя'
					required
				/>
			</FormField>
		</Box>
	)
}

export default Signin
