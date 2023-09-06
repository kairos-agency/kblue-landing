/* eslint-disable @next/next/no-img-element */
import Link from 'next/link.js'
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

import { Canvas, useFrame } from '@react-three/fiber'

import { SmoothScrollbar, UseCanvas, ScrollScene } from '@14islands/r3f-scroll-rig'
import { useRef, useEffect, useState } from 'react'
import { Float, MeshTransmissionMaterial, useAnimations, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

import Form from './Form.js'

export default function Showcase() {
	return (
		<>
			<SmoothScrollbar>
				{(bind) => (
					<section {...bind}>
						<div className='container'>
							<FadeInBottom>
								<h2>
									Manage all your web assets <span>on a single dashboard</span>
								</h2>
							</FadeInBottom>
							<FadeIn>
								<p className='medium grey'>
									Imagine that google drive, wordpress and crossknowledge had a eco-build baby together. One place to
									manage all of your business content, one login portal.
								</p>
							</FadeIn>
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
												Ask for your <span>demo</span>
											</h2>
											<p className='small grey'>
												Our revolutionary platform skillfully combines a content management system (CMS), a learning
												management system (LMS), and an enterprise data management system (EMS).
											</p>
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
		texture.encoding = THREE.sRGBEncoding
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
		action.time = THREE.MathUtils.damp(action.time, reverseTime, 100, delta)

		state.camera.lookAt(0, 0, 0)
	})

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
