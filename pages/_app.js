import '../styles/index.scss'
import Head from 'next/head'
import Layout from '../components/layout'
import { GlobalCanvas } from '@14islands/r3f-scroll-rig'
import { Environment, Html, Lightformer, Loader, useProgress } from '@react-three/drei'

import { Suspense } from 'react'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Layout>
                <GlobalCanvas
                    shadows
                    dpr={[1, 2]}
                    onCreated={({ gl }) => {
                        gl.toneMapping = 0
                    }}
                >
                    <Suspense fallback={null}>
                        <color attach="background" args={['#FBFBFD']} />

                        <Environment resolution={32}>
                            <group rotation={[-Math.PI / 4, -0.3, 0]}>
                                <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
                                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
                                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
                                <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
                            </group>
                        </Environment>

                        <ambientLight intensity={0.75} />
                    </Suspense>
                </GlobalCanvas>
                <Loader
                    containerStyles={{ backgroundColor: '#FBFBFD' }}
                    innerStyles={{ backgroundColor: '#FBFBFD' }}
                    dataStyles={{ color: '#4864F3', fontWeight: 'normal', fontSize: '2rem' }}
                    barStyles={{ backgroundColor: '#4864F3' }}
                    dataInterpolation={p => `${p.toFixed(2)}`}
                />

                <Component {...pageProps} />
            </Layout>
        </>
    )
}
