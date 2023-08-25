import React from 'react'

function FadeInBottom(props) {
	const [isVisible, setVisible] = React.useState(false)
	const domRef = React.useRef()
	const handleObserver = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setVisible(true)
			}
		})
	}
	React.useEffect(() => {
		const observer = new IntersectionObserver(handleObserver, {
			threshold: 0.5,
		})
		observer.observe(domRef.current)
		return () => observer.disconnect()
	}, [])
	return (
		<div className={`fade-in-bottom ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
			{props.children}
		</div>
	)
}

function SwipeInBottom(props) {
	const [isVisible, setVisible] = React.useState(false)
	const domRef = React.useRef()

	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setVisible(entry.isIntersecting))
		})

		observer.observe(domRef.current)
		return () => observer.unobserve(domRef.current)
	}, [])

	return (
		<div className={`fade-in-bottom ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
			<div className='fade-in-bottom-content'>{props.children}</div>
		</div>
	)
}

export default FadeInBottom

function FadeInLeft(props) {
	const [isVisible, setVisible] = React.useState(false)
	const domRef = React.useRef()
	const handleObserver = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setVisible(true)
			}
		})
	}
	React.useEffect(() => {
		const observer = new IntersectionObserver(handleObserver, {
			threshold: 0.5,
		})
		observer.observe(domRef.current)
		return () => observer.disconnect()
	}, [])
	return (
		<div className={`fade-in-left ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
			{props.children}
		</div>
	)
}

function FadeInRight(props) {
	const [isVisible, setVisible] = React.useState(false)
	const domRef = React.useRef()
	const handleObserver = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setVisible(true)
			}
		})
	}
	React.useEffect(() => {
		const observer = new IntersectionObserver(handleObserver, {
			threshold: 0.5,
		})
		observer.observe(domRef.current)
		return () => observer.disconnect()
	}, [])
	return (
		<div className={`fade-in-right ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
			{props.children}
		</div>
	)
}

function FadeIn(props) {
	const [isVisible, setVisible] = React.useState(false)
	const domRef = React.useRef()
	const handleObserver = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setVisible(true)
			}
		})
	}
	React.useEffect(() => {
		const observer = new IntersectionObserver(handleObserver, {
			threshold: 0.5,
		})
		observer.observe(domRef.current)
		return () => observer.disconnect()
	}, [])
	return (
		<div className={`fade-in ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
			{props.children}
		</div>
	)
}

export { FadeInBottom, SwipeInBottom, FadeInLeft, FadeInRight, FadeIn }
