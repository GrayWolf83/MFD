export const signinValidationSchema = {
	email: (value) => {
		if (!value.length) {
			return 'Обязательное поле'
		}

		if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
			return 'Некорректный email'
		}
		return null
	},

	password: (value) => {
		if (!value.length) {
			return 'Обязательное поле'
		}

		if (value.length < 8) {
			return 'Длина пароля не менее 8 символов'
		}

		return null
	},
}

export const signupValidationSchema = {
	name: (value) => {
		if (!value.length) {
			return 'Обязательное поле'
		}

		return null
	},
	nick: (value) => {
		if (!value.length) {
			return 'Обязательное поле'
		}

		return null
	},
	email: (value) => {
		if (!value.length) {
			return 'Обязательное поле'
		}

		if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
			return 'Некорректный email'
		}
		return null
	},
	gender: (value) => {
		if (!value.length) {
			return 'Обязательное поле'
		}

		return null
	},

	password: (value) => {
		if (!value.length) {
			return 'Обязательное поле'
		}

		if (value.length < 8) {
			return 'Длина пароля не менее 8 символов'
		}

		return null
	},
	repeatPassword: (value) => {
		if (!value.length) {
			return 'Обязательное поле'
		}

		if (value.length < 8) {
			return 'Длина пароля не менее 8 символов'
		}

		return null
	},
	// Функции валидации для сравнения значений формы или вариантов выбора значений в зависимости от значений друг друга
	dependencies: [
		{
			names: ['password', 'repeatPassword'],
			cb: (value1, value2) => {
				return {
					repeatPassword:
						value1 === value2 ? null : 'Пароли не совпадают',
				}
			},
		},
	],
}
