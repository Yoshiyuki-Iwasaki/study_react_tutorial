import React, { useLayoutEffect, useReducer, useRef, useState } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { a, useSpring, useTransition } from "react-spring-three";
import * as THREE from "three";

const palette = ["#D1D646", "#F97068", "#212738", "#EDF2EF", "#57C4E5"];
const colorMap = i => palette[(i + palette.length) % palette.length];
const sharedDelay = 2000;

export default function App() {
  const [index] = useReducer(x => x + 1, 0);
  const transition = useTransition(colorMap(index), {
    from: { size: 0 },
    enter: { size: 1 },
    leave: { size: 0 },
  });
  const transitionItems = transition(({}, item) => (
    <a.group>
      <Blob color={item} />
    </a.group>
  ));
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Lighting />
      <Background color={colorMap(index + 2)} />
      {transitionItems}
    </Canvas>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 5]} />
    </>
  );
}

function Blob({ color = "white" }) {
  return (
    <mesh>
      <sphereBufferGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial color={color} distort={0.5} />
    </mesh>
  );
}

function Background({ color = "white" }) {
  const { scene } = useThree();
  useLayoutEffect(() => {
    scene.background = new THREE.Color(color);
  }, []);
  useSpring({
    background: color,
    onChange: ({ background }) => scene.background?.set(background),
    delay: sharedDelay,
  });
  return null;
}
