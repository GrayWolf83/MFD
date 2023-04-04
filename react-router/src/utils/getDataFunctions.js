import characters from '../data/characters.json'
import episode from '../data/episode.json'
import location from '../data/location.json'

const data = { characters, episode, location }

export function getCategoriesByName(category) {
	return data[category]
}

export function getItemById(id, category) {
	return data[category].find((item) => item.id === id)
}
