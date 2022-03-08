import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sky, Stars, OrbitControls, CycleRaycast, BakeShadows, useCursor, softShadows } from '@react-three/drei';

export default function TreeStage() {
    const [{ objects, cycle }, set] = useState({ objects: [], cycle: 0 });
    return (
        <>
            {/* CycleRaycast's status data can now be turned into informative HTML */}
            <Canvas shadows dpr={1.5} camera={{ position: [-10, 10, 10], fov: 100 }}>
                <Stars />
                <OrbitControls
                    makeDefault
                    rotateSpeed={2}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2}
                    minDistance={10}
                    maxDistance={30}
                />
                <Stage />
                {Array.from({ length: 5 }, (_, i) => (
                    <Stair key={i} name={'section-' + (i + 1)} position={[0, -10 + i * 3, 1]} args={[2, 3, 2]} />
                ))}
                {/* This component cycles through the raycast intersections, combine it with event.stopPropagation! */}
                <CycleRaycast onChanged={(objects, cycle) => set({ objects, cycle })} />
            </Canvas>
        </>
    );
}

function Stair(props) {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    useFrame((state) => ref.current.scale.setScalar(hovered ? 1 + Math.sin(state.clock.elapsedTime * 10) / 50 : 1));
    // Sets document.body.style.cursor: useCursor(flag, onPointerOver = 'pointer', onPointerOut = 'auto')
    useCursor(hovered);
    return (
        <mesh
            key={props.key}
            name={props.name}
            position={props.position}
            rotation={[-Math.PI / 2, 0, 1 / Math.PI / 2]}
            ref={ref}
            receiveShadow
            castShadow
            onClick={(e) => (e.stopPropagation(), setClicked(!clicked))}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={(e) => setHovered(false)}
        >
            <boxGeometry args={props.args} />
            <meshStandardMaterial
                roughness={1}
                transparent
                opacity={0.6}
                color={clicked ? 'lightblue' : hovered ? 'aquamarine' : 'white'}
            />
        </mesh>
    );
}

function Stage() {
    return (
        <>
            {/* Fill */}
            <ambientLight intensity={0.5} />
            {/* Main */}
            <directionalLight
                position={[1, 10, -2]}
                intensity={1}
                shadow-camera-far={70}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-mapSize={[512, 512]}
                castShadow
            />
            {/* Strip */}
            <directionalLight position={[-10, -10, 2]} intensity={3} />
            {/* Ground */}
            <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -10.75, 0]}>
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.2} />
            </mesh>
            {/* This freezes the shadow map, which is fast, but the model has to be static  */}
            <BakeShadows />
        </>
    );
}

// Percentage closer soft shadows, normally *very* expensive
softShadows();