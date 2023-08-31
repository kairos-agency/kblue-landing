/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

import { Canvas, useFrame } from '@react-three/fiber'

import { SmoothScrollbar, UseCanvas, ScrollScene } from '@14islands/r3f-scroll-rig'
import { useRef, useEffect, useState } from 'react'
import { Float, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function OpenSource() {
	return (
		<>
			<SmoothScrollbar>
				{(bind) => (
					<section {...bind}>
						<div className='container'>
							<FadeInBottom>
								<p className='overtitle'>It's all</p>
							</FadeInBottom>
							<FadeInBottom>
								<h2>Open Source</h2>
							</FadeInBottom>
							<FadeIn>
								<p className='medium grey'>
									Because we believe that together we go further, we have decided to open source the basic version of
									Kairos Blue. More than just a methodology, our philosophy embraces freedom, collaboration and
									innovation.
								</p>
							</FadeIn>
							<div className='staggered-container'>
								<div className='staggered-row'>
									<div className='staggered-col'>
										<h4>It's about trust, transparency, breaking down barriers and creating together.</h4>
										<p className='medium grey'>
											It allows everyone to understand, modify and improve the code, thus creating a dynamic of constant
											innovation. By opting for open source, Kairos blue gains in flexibility and independence. You are
											no longer limited by the constraints of a single supplier. You can tailor the code to your
											specific needs, creating bespoke solutions that perfectly match your vision
										</p>
									</div>
									<MarkupTouchDevice />
								</div>
								<div className='staggered-row reverse'>
									<div className='staggered-col'>
										<h4>
											Open source is an adventure, a journey to a world where technology is open, shared and constantly
											improved.
										</h4>
										<p className='medium grey'>
											Embark with Kairos Blue on this journey and discover the true power of open source.
										</p>
									</div>
									<GlobeTouchDevice />
								</div>
							</div>
						</div>
					</section>
				)}
			</SmoothScrollbar>
		</>
	)
}

function MarkupTouchDevice() {
	const [isTouch, setTouch] = useState(false)
	useEffect(() => {
		const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
		setTouch(isTouch)
		console.log(isTouch)
	}, [])
	return isTouch ? <img src='/images/markup.jpg' alt='hero image' /> : <MarkupSection />
}

function MarkupSection() {
	const ref = useRef()
	return (
		<>
			<div ref={ref} className='Placeholder ScrollScene'></div>
			<UseCanvas>
				<ScrollScene track={ref}>{(props) => <Markup {...props} />}</ScrollScene>
			</UseCanvas>
		</>
	)
}

function Markup({ scale, scrollState, ...props }) {
	const { nodes } = useGLTF('/markup-test.glb')

	const albedoChart = useTexture('/tex/chart.png', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
	})

	const albedoGraph = useTexture('/tex/graph.png', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
	})
	return (
		<Float floatIntensity={4} rotationIntensity={0.5}>
			<group {...props} dispose={null} scale={75}>
				<group name='Markup'>
					<mesh name='Markup_1' castShadow receiveShadow geometry={nodes.Markup_1.geometry}>
						<meshPhysicalMaterial color={'#ffffff'} roughness={0} clearcoat={1} clearcoatRoughness={0} />
					</mesh>
					<mesh
						name='MarkupWindow03'
						castShadow
						receiveShadow
						geometry={nodes.MarkupWindow03.geometry}
						position={[1.405, -1.058, 1.36]}
					>
						<meshPhysicalMaterial color={'#3F65FC'} />
					</mesh>
					<group name='MarkupWindow02' position={[2.627, 0.655, -1.811]}>
						<mesh name='window04002_1' castShadow receiveShadow geometry={nodes.window04002_1.geometry}>
							<meshBasicMaterial map={albedoChart} />
						</mesh>
					</group>
					<mesh
						name='MarkupWindow01'
						castShadow
						receiveShadow
						geometry={nodes.MarkupWindow01.geometry}
						position={[-2.523, 0.471, -0.516]}
					>
						<meshPhysicalMaterial color={'#2854ff'} />
					</mesh>
					<group name='MarkupWindow04' position={[-2.334, -1.638, 0.602]}>
						<mesh name='window04003_1' castShadow receiveShadow geometry={nodes.window04003_1.geometry}>
							<meshBasicMaterial map={albedoGraph} />
						</mesh>
					</group>
				</group>
			</group>
		</Float>
	)
}

useGLTF.preload('/markup-test.glb')

function GlobeTouchDevice() {
	const [isTouch, setTouch] = useState(false)
	useEffect(() => {
		const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
		setTouch(isTouch)
		console.log(isTouch)
	}, [])
	return isTouch ? <img src='/images/globe.jpg' alt='hero image' /> : <GlobeSection />
}

function GlobeSection() {
	const ref = useRef()
	return (
		<>
			<div ref={ref} className='Placeholder ScrollScene'></div>
			<UseCanvas>
				<ScrollScene track={ref}>{(props) => <Globe {...props} />}</ScrollScene>
			</UseCanvas>
		</>
	)
}

function Globe({ scale, scrollState, ...props }) {
	const ref = useRef()
	const { nodes } = useGLTF('/planet.glb')

	useFrame((state, delta) => (ref.current.rotation.y += delta / 4))
	return (
		<Float floatIntensity={4} rotationIntensity={0.5}>
			<group {...props} dispose={null} scale={75}>
				<mesh castShadow receiveShadow geometry={nodes.PlanetWindow03.geometry} position={[2.787, -0.7, -2.313]}>
					<meshToonMaterial color={'#2854ff'} />
				</mesh>
				<mesh castShadow receiveShadow geometry={nodes.PlanetWindow02.geometry} position={[-2.182, -1.161, 1.475]}>
					<meshPhysicalMaterial color={'#2854ff'} />
				</mesh>
				<mesh castShadow receiveShadow geometry={nodes.PlanetWindow01.geometry} position={[-2.299, 0.36, -1.471]}>
					<meshToonMaterial color={'#3F65FC'} />
				</mesh>
				<group ref={ref}>
					{/* OCEAN */}
					<mesh castShadow receiveShadow geometry={nodes.Mesh001.geometry}>
						<meshPhysicalMaterial color={'#3F65FC'} roughness={1} clearcoat={1} clearcoatRoughness={1} />
					</mesh>
					{/* LAND */}
					<mesh castShadow receiveShadow geometry={nodes.Mesh001_1.geometry}>
						<meshPhysicalMaterial color={'#ffffff'} roughness={0} clearcoat={1} clearcoatRoughness={0} />
					</mesh>
				</group>
			</group>
		</Float>
	)
}

useGLTF.preload('/planet.glb')
