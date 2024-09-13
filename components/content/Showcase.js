import { FadeInBottom, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import { useFrame } from '@react-three/fiber'
import { SmoothScrollbar, UseCanvas, ScrollScene } from '@14islands/r3f-scroll-rig'
import { useRef, useEffect, useState } from 'react'
import { useAnimations, useGLTF, useTexture } from '@react-three/drei'
import Form from './Form.js'
import AnimatedText from '../../utils/anims/anims.js'
import Image from 'next/image.js'
import localFont from 'next/font/local'
const requila = localFont({ src: '../../fonts/Requila.woff' })

export default function Showcase({ index, bloc }) {
    return (
        <div key={index}>
            <SmoothScrollbar>
                {bind => (
                    <section {...bind}>
                        <div className="container">
                            <FadeInBottom>
                                <h2>
                                    {bloc.title1} <span className={requila.className}>{bloc.alt_title1}</span>
                                </h2>
                            </FadeInBottom>
                            <div>
                                <AnimatedText
                                    classname="medium grey animated animated_centered"
                                    text={bloc.description1}
                                />
                            </div>
                            <FadeIn>
                                <div className="canvas-container">
                                    <TouchDevice />
                                </div>
                            </FadeIn>
                            <div className="demo-container" id="Demo">
                                <div className="demo-wrapper">
                                    <FadeInBottom>
                                        <div>
                                            <h2>
                                                {bloc.title2}{' '}
                                                <span className={requila.className}>{bloc.alt_title2}</span>
                                            </h2>
                                            <AnimatedText classname="grey medium animated" text={bloc.description2} />
                                        </div>
                                    </FadeInBottom>
                                    <FadeInRight>
                                        <Form content={bloc.form} />
                                    </FadeInRight>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </SmoothScrollbar>
        </div>
    )
}

function TouchDevice() {
    const [isTouch, setTouch] = useState(false)
    useEffect(() => {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
        setTouch(isTouch)
        // console.log(isTouch)
    }, [])
    return isTouch ? (
        <Image
            src="/images/showcase.png"
            alt="Kairos-Blue backoffice homepage"
            width={1}
            height={1}
            sizes="80vw"
            quality="70"
            priority
        />
    ) : (
        <PlaneAnimationSection />
    )
}

function PlaneAnimationSection() {
    const ref = useRef()
    return (
        <>
            <div ref={ref} className="Placeholder ScrollScene"></div>
            <UseCanvas>
                <ScrollScene track={ref}>{props => <SpinningBoxWebGL {...props} />}</ScrollScene>
            </UseCanvas>
        </>
    )
}

function SpinningBoxWebGL({ scale, scrollState, ...props }) {
    const group = useRef()

    const { nodes, animations } = useGLTF('/plane.glb')

    const albedo = useTexture('/tex/home.jpg', texture => {
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
            <group name="Plane">
                <group name="PlaneParent" scale={2}>
                    <group name="Plane_1" scale={100}>
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

// useGLTF.preload('/windows-animated.glb')
