/* eslint-disable @next/next/no-img-element */
import Link from 'next/link.js'
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

import { Canvas, useFrame } from '@react-three/fiber'

import { SmoothScrollbar, UseCanvas, ScrollScene } from '@14islands/r3f-scroll-rig'
import { useRef, useEffect, useState } from 'react'
import { Float, MeshTransmissionMaterial, useAnimations, useGLTF, useTexture } from '@react-three/drei'

import { useRouter } from 'next/router.js'

import Form from './Form.js'
import AnimatedText from '../../utils/anims/anims.js'

import { enShowcase } from '../../lang/en.js'
import { frShowcase } from '../../lang/fr.js'

export default function Showcase() {
	const content = useRouter().locale === 'en' ? enShowcase : frShowcase
	return (
		<>
			<SmoothScrollbar>
				{(bind) => (
					<section {...bind}>
						<div className='container'>
							<FadeInBottom>
								<h2>
									{content.title} <span>{content.altTitle}</span>
								</h2>
							</FadeInBottom>
							<div>
								<AnimatedText classname='medium grey animated animated_centered' text={content.description1} />
							</div>
							<FadeIn>
								<div className='canvas-container'>
									<TouchDevice />
								</div>
							</FadeIn>
							<div className='demo-container'>
								<div className='demo-wrapper'>
									<FadeInBottom>
										<div>
											<h2>
												{content.title2} <span>{content.altTitle2}</span>
											</h2>
											<div>
												<AnimatedText classname='small grey animated' text={content.description2} />
											</div>
										</div>
									</FadeInBottom>
									<FadeInRight>
										<Form />
									</FadeInRight>
								</div>
							</div>
						</div>
					</section>
				)}
			</SmoothScrollbar>
		</>
	)
}

function TouchDevice() {
	const [isTouch, setTouch] = useState(false)
	useEffect(() => {
		const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
		setTouch(isTouch)
		console.log(isTouch)
	}, [])
	return isTouch ? <img src='/images/showcase.png' alt='hero image' /> : <PlaneAnimationSection />
}

function PlaneAnimationSection() {
	const ref = useRef()
	return (
		<>
			<div ref={ref} className='Placeholder ScrollScene'></div>
			<UseCanvas>
				<ScrollScene track={ref}>{(props) => <SpinningBoxWebGL {...props} />}</ScrollScene>
			</UseCanvas>
		</>
	)
}

function SpinningBoxWebGL({ scale, scrollState, ...props }) {
	const group = useRef()

	const { nodes, animations } = useGLTF('/plane.glb')

	const albedo = useTexture('/tex/home.jpg', (texture) => {
		texture.flipY = false
	})

	const { actions } = useAnimations(animations, group)

	useEffect(() => {
		void (actions['PlaneAction'].play().paused = true)
	}, [actions])

	useFrame((state, delta) => {
		const action = actions['PlaneAction']
		const scroll = scrollState.progress * 1

		const clipDuration = action.getClip().duration
		const reverseTime = clipDuration - clipDuration * scroll
		action.time = damp(action.time, reverseTime, 100, delta)

		state.camera.lookAt(0, 0, 0)
	})

	function damp(value, target, smoothing, deltaTime) {
		return value + (target - value) * (1 - Math.exp(-smoothing * deltaTime))
	}

	return (
		<group {...props} ref={group} dispose={null}>
			<group name='Plane'>
				<group name='PlaneParent' scale={2}>
					<group name='Plane_1' scale={100}>
						<mesh castShadow receiveShadow geometry={nodes.Plane_2.geometry}>
							<meshBasicMaterial color={'#ffffff'} roughness={0} clearcoat={1} clearcoatRoughness={0} />
						</mesh>
						<mesh castShadow receiveShadow geometry={nodes.Plane_3.geometry}>
							<meshBasicMaterial map={albedo} />
						</mesh>
					</group>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/windows-animated.glb')
