import { useReducer } from 'react'

const PAYLOAD = 'PAYLOAD'
const TOGGLE = 'TOGGLE'

function reducer(state, action) {
	switch (action.type) {
		case PAYLOAD:
			if (state.values.includes(action.payload)) {
				return {
					...state,
					value: action.payload,
					currentIndex: state.values.indexOf(action.payload),
				}
			}
			return state

		case TOGGLE:
			const index =
				state.currentIndex + 1 <= state.values.length - 1
					? state.currentIndex + 1
					: 0
			return {
				...state,
				value: state.values[index],
				currentIndex: index,
			}

		default:
			return state
	}
}

function getToggleInitialState(defaultValue) {
	return {
		values: defaultValue ? defaultValue : [false, true],
		value: defaultValue && defaultValue[0] ? defaultValue[0] : false,
		currentIndex: 0,
	}
}

export function useToggle(defaultValue) {
	const initialState = getToggleInitialState(defaultValue)
	const [state, dispatch] = useReducer(reducer, initialState)

	function toggle(payload) {
		if (payload !== undefined) {
			dispatch({ type: PAYLOAD, payload })
			return
		}

		dispatch({ type: TOGGLE })
	}

	return [state.value, toggle]
}
