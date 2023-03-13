import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useWindowScroll() {
	const [scroll, setScroll] = useState({
		x: window.scrollX,
		y: window.scrollY,
	})

	useWindowEvent(
		'scroll',
		() => {
			setScroll({
				x: window.scrollX,
				y: window.scrollY,
			})
		},
		{},
	)

	function scrollTo(value) {
		if (value.hasOwnProperty('x') && value.hasOwnProperty('y')) {
			window.scroll(value.x, value.y)
		} else if (value.hasOwnProperty('x')) {
			window.scroll(value.x, scroll.y)
		} else if (value.hasOwnProperty('y')) {
			window.scroll(scroll.x, value.y)
		}
	}

	return [scroll, scrollTo]
}
