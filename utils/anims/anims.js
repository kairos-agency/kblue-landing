import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedText({ text, classname }) {
	const words = text.split(' ')

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.05 }
		})
	}

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				ease: 'easeOut',
				duration: 0.5
			}
		},
		hidden: {
			opacity: 0,
			x: 10,
			transition: {
				ease: 'easeOut',
				duration: 0.5
			}
		}
	}
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	return (
		<motion.div
			ref={ref}
			className={classname}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			variants={container}
			style={{ overflow: 'hidden' }}
		>
			{words.map((word, index) => (
				<motion.span variants={child} key={index} style={{ marginRight: '5px' }}>
					{word}
				</motion.span>
			))}
		</motion.div>
	)
}

export default AnimatedText
