import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function CoinMesh() {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.01));
    return (
        <mesh ref={mesh} scale={2}>
            <cylinderBufferGeometry args={[1, 1, 0.3, 50]} />
            <meshLambertMaterial attach="material" color="#ff9800" />
        </mesh>
    );
}

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    );
}

function Sphere(props) {
    return (
        <mesh {...props} visible userData={{ hello: 'world' }} rotation={[Math.PI / 2, 0, 0]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="hotpink" transparent />
        </mesh>
    );
}

const Cube = () => {
    return (
        <>
            <Box position={[-1, 0, 0]} />
            <Sphere position={[1, 0, 0]} />
        </>
    );
};

export default Cube;
