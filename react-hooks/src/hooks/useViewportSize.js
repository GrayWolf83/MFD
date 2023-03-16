import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useViewportSize() {
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)

	useWindowEvent(
		'resize',
		() => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		},
		{},
	)

	return { width, height }
}
