export const signinValidationSchema = {
	username: (value) => {
		if (!value.length) {
			return 'Обязательное поле'
		}

		return null
	},
}
