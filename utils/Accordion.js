/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

export function Accordion(props) {
	const [isShowing, setIsShowing] = useState(false)

	function toggle(e) {
		const element = e.currentTarget.querySelector('.accordion__pulltab')

		element.offsetHeight === 0 ? (element.style.maxHeight = `${element.scrollHeight}px`) : (element.style.maxHeight = 0)
		setIsShowing(!isShowing)
	}

	return (
		<div className='accordion' onClick={toggle}>
			<div className='accordion__title'>
				<p>{props.title}</p>
				<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
			</div>
			<div className='accordion__pulltab'>
				<div>
					<p
						dangerouslySetInnerHTML={{
							__html: props.content
						}}
					/>
				</div>
			</div>
		</div>
	)
}
