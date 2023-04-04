export function convertDate(date) {
	return new Date(date).toLocaleString()
}

export function sortByCreated(type, items) {
	if (type === 'ASC') {
		return [...items].sort((a, b) =>
			Date.now(a.created) > Date.now(b.created) ? -1 : 1,
		)
	}

	if (type === 'DESC') {
		return [...items].sort((a, b) =>
			Date.now(a.created) > Date.now(b.created) ? 1 : -1,
		)
	}
}
