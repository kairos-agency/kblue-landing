/* eslint-disable @next/next/no-img-element */
import { Canvas, useFrame } from '@react-three/fiber'
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

import { SmoothScrollbar, UseCanvas, ScrollScene } from '@14islands/r3f-scroll-rig'
import { useRef, useEffect, useState } from 'react'
import { Float, MeshTransmissionMaterial, useAnimations, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function HeroHome() {
	useEffect(() => {
		const handleScroll = () => {
			const title = document.querySelector('.title')
			title.style.transform = `translateY(-${window.scrollY / 2}px)`
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<SmoothScrollbar>
				{(bind) => (
					<header className='hero' {...bind}>
						<section>
							<div className='container-sm'>
								<FadeInBottom>
									<div className='title'>
										<h1>
											The all-in-one <span>backoffice</span>
										</h1>
										<p className='medium grey'>One place to manage all of your business content, one login portal.</p>
									</div>
								</FadeInBottom>
							</div>
							<TouchDevice />
						</section>
					</header>
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
	return isTouch ? <img src='/images/hero.png' alt='hero image' /> : <KeyAnimationSection />
}

function KeyAnimationSection() {
	const ref = useRef()
	return (
		<>
			<div ref={ref} className='Placeholder ScrollScene'></div>
			<UseCanvas>
				<Float rotationIntensity={0.5} floatIntensity={2}>
					<ScrollScene track={ref}>{(props) => <SpinningBoxWebGL {...props} />}</ScrollScene>
				</Float>
			</UseCanvas>
		</>
	)
}

function SpinningBoxWebGL({ scale, scrollState, ...props }) {
	const group = useRef()

	const { nodes, animations } = useGLTF('/windows-animated.glb')
	const { actions } = useAnimations(animations, group)

	useEffect(() => {
		void (actions['windowAnimation'].play().paused = true)
	}, [actions])

	useFrame((state, delta) => {
		const action = actions['windowAnimation']
		const scroll = scrollState.progress * 1

		const clipDuration = action.getClip().duration
		const reverseTime = clipDuration - clipDuration * scroll
		action.time = THREE.MathUtils.damp(action.time, reverseTime, 100, delta)

		state.camera.lookAt(0, 0, 0)
	})

	return (
		<group ref={group} {...props} dispose={null} scale={100}>
			<group name='Scene'>
				<mesh
					name='Window01'
					castShadow
					receiveShadow
					geometry={nodes.Window01.geometry}
					position={[-8.018, 3.022, -1.224]}
					rotation={[0, 0, 0.32]}
				>
					<meshPhysicalMaterial color={'#3F65FC'} />
				</mesh>
				<mesh
					name='Window02'
					castShadow
					receiveShadow
					geometry={nodes.Window02.geometry}
					position={[-6.715, 2.953, -1.503]}
					rotation={[0, 0, 0.124]}
				>
					<meshPhysicalMaterial color={'#2854ff'} />
				</mesh>
				<mesh
					name='Window03'
					castShadow
					receiveShadow
					geometry={nodes.Window03.geometry}
					position={[-8.075, -3.184, 0.774]}
					rotation={[0, 0, -0.408]}
				>
					<meshPhysicalMaterial color={'#3F65FC'} />
				</mesh>
				<mesh
					name='Window04'
					castShadow
					receiveShadow
					geometry={nodes.Window04.geometry}
					position={[7.324, 3.338, -1.031]}
					rotation={[0, 0, -0.38]}
				>
					<meshPhysicalMaterial color={'#3F65FC'} />
				</mesh>

				<mesh
					name='Window05'
					castShadow
					receiveShadow
					geometry={nodes.Window05.geometry}
					position={[8.232, 0.494, -1.696]}
					rotation={[0, 0, -0.459]}
				>
					<meshToonMaterial color={'#3F65FC'} />
				</mesh>
				<group name='Empty' position={[0, 4.55, 0]} rotation={[-0.271, 0.127, 1.406]}>
					<mesh name='Rounded_Key' castShadow receiveShadow geometry={nodes.Rounded_Key.geometry}>
						<MeshTransmissionMaterial
							backside
							backsideThickness={0.44}
							samples={16}
							resolution={512}
							transmission={1}
							clearcoat={0.1}
							clearcoatRoughness={0}
							thickness={1.85}
							chromaticAberration={0}
							anisotropy={0.3}
							roughness={0.3}
							distortion={0}
							distortionScale={0}
							temporalDistortion={0}
							ior={1.5}
							color={'#ffffff'}
						/>
					</mesh>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/windows-animated.glb')
