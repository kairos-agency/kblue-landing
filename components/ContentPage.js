'use client'

import { Suspense } from 'react'
import Footer from './footer/Footer'
import Nav from './nav/Nav'
import { ReactLenis } from '@studio-freight/react-lenis'
import { GlobalCanvas } from '@14islands/r3f-scroll-rig'
import { Environment, Lightformer, Loader } from '@react-three/drei'

export default function ContentPage({ children }) {
    return (
        <ReactLenis root>
            <div>
                <GlobalCanvas
                    shadows
                    dpr={[1, 2]}
                    onCreated={({ gl }) => {
                        gl.toneMapping = 0
                    }}
                >
                    <Suspense fallback={null}>
                        <color attach="background" args={['#FFFFFF']} />

                        <Environment resolution={32}>
                            <group rotation={[-Math.PI / 4, -0.3, 0]}>
                                <Lightformer
                                    intensity={20}
                                    rotation-x={Math.PI / 2}
                                    position={[0, 5, -9]}
                                    scale={[10, 10, 1]}
                                />
                                <Lightformer
                                    intensity={2}
                                    rotation-y={Math.PI / 2}
                                    position={[-5, 1, -1]}
                                    scale={[10, 2, 1]}
                                />
                                <Lightformer
                                    intensity={2}
                                    rotation-y={Math.PI / 2}
                                    position={[-5, -1, -1]}
                                    scale={[10, 2, 1]}
                                />
                                <Lightformer
                                    intensity={2}
                                    rotation-y={-Math.PI / 2}
                                    position={[10, 1, 0]}
                                    scale={[20, 2, 1]}
                                />
                                <Lightformer
                                    type="ring"
                                    intensity={2}
                                    rotation-y={Math.PI / 2}
                                    position={[-0.1, -1, -5]}
                                    scale={10}
                                />
                            </group>
                        </Environment>

                        <ambientLight intensity={2} />
                    </Suspense>
                </GlobalCanvas>

                <Loader
                    containerStyles={{ backgroundColor: '#FBFBFD' }}
                    innerStyles={{ backgroundColor: '#FBFBFD' }}
                    dataStyles={{ color: '#4864F3', fontWeight: 'normal', fontSize: '2rem' }}
                    barStyles={{ backgroundColor: '#4864F3' }}
                    dataInterpolation={p => `${p.toFixed(2)}`}
                />

                <Nav />
                <main>{children}</main>
                <Footer />
            </div>
        </ReactLenis>
    )
}
