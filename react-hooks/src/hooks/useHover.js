import { useEffect, useRef, useState } from 'react'

export function useHover() {
	const [hovered, setHovered] = useState(false)
	const ref = useRef(null)

	function setHoveredTrue() {
		setHovered(true)
	}
	function setHoveredFalse() {
		setHovered(false)
	}

	useEffect(() => {
		ref.current.addEventListener('mouseover', setHoveredTrue)
		ref.current.addEventListener('mouseout', setHoveredFalse)

		return () => {
			ref.current.removeEventListener('mouseover', setHoveredTrue)
			ref.current.removeEventListener('mouseout', setHoveredFalse)
		}
	}, [ref])

	return { hovered, ref }
}
