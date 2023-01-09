import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Center,
	ContactShadows,
	Text3D,
	Text,
	Box,
	MeshDistortMaterial,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a, animated } from "@react-spring/three";
import {
	Bloom,
	DepthOfField,
	EffectComposer,
	SSAO,
} from "@react-three/postprocessing";
import { list } from ".";
import { Mesh, MeshDistanceMaterial, MeshStandardMaterial } from "three";

interface canvasProps {
	index: number;
}

const Index3dCanvas = ({ index }: canvasProps) => {
	return (
		<Canvas shadows camera={{ position: [0, 0, 120], fov: 20 }}>
			<Suspense fallback={null}>
				<MeshComponent index={index} />
			</Suspense>
		</Canvas>
	);
};

const MeshComponent = ({ index }: canvasProps) => {
	const myMesh = React.useRef<Mesh>(null!);
	const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);
	useFrame(({ clock }) => {
		const a = clock.getElapsedTime();
		myMesh.current.rotation.y = a;
	});
	return (
		<>
			<ambientLight intensity={0.2} />
			<spotLight
				position={[25, 20, 25]}
				penumbra={1}
				angle={0.25}
				color="white"
				castShadow
				shadow-mapSize={[512, 512]}
			/>
			<VideoTitle index={index} />
			<a.mesh ref={myMesh} rotation={[0.5,0,0]} position={[3, 1, -3]}>
				<boxBufferGeometry
					castShadow
					receiveShadow
					attach="geometry"
					args={[0.5, 0.5, 0.5]}
				/>
				<meshStandardMaterial
					roughness={0.5}
					attach="material"
					// color={"green"}
				/>
			</a.mesh>
			<a.mesh position={[4, 0, -4]}>
				<boxBufferGeometry
					castShadow
					receiveShadow
					attach="geometry"
					args={[0.3, 0.3, 0.2]}
				/>
				<meshStandardMaterial
					roughness={0.5}
					attach="material"
					// color={"#7a4900"}
				/>
			</a.mesh>
			<ContactShadows
				frames={5000}
				position={[0, -1.5, 0]}
				blur={2}
				opacity={0.5}
			/>
			<Intro />
			<EffectComposer>
				<DepthOfField
					target={[0, 0, 0]}
					focalLength={0.01}
					bokehScale={10}
					height={500}
				/>
			</EffectComposer>
		</>
	);
};

const VideoTitle = ({ index }: canvasProps) => {
	const [active, setActive] = useState<number>(0);
	const { spring } = useSpring({
		spring: active,
		config: { mass: 3, tension: 500, friction: 80, precision: 0.001 },
	});
	const oldColor = index === 0 ? list[0].color : list[index - 1].color;

	const rotation = spring.to([0, 1], [0, Math.PI * 2]);
	const color = spring.to([0, 1], [oldColor, list[index].color]);

	const [video, setVideo] = useState(() =>
		Object.assign(document.createElement("video"), {
			src: `/video/${list[0].video}`,
			crossOrigin: "Anonymous",
			loop: true,
			muted: true,
		})
	);
	useEffect(() => void video.play(), [video]);
	useEffect(() => {
		setVideo(() =>
			Object.assign(document.createElement("video"), {
				src: `/video/${list[index].video}`,
				crossOrigin: "Anonymous",
				loop: true,
				muted: true,
			})
		);
		setActive(Number(!active));
	}, [index]);

	return (
		<a.group rotation-y={rotation}>
			<Center>
				<mesh>
					<Text3D
						castShadow
						receiveShadow
						font="/font/video.json"
						size={1}
						height={0.7}
						bevelEnabled
						bevelSize={0.01}
						bevelSegments={10}
						curveSegments={128}
						bevelThickness={0.01}
						letterSpacing={0}
					>
						256
						<meshStandardMaterial color={list[index].color} roughness={0.5} />
					</Text3D>
				</mesh>

				<Text
					font="/font/video.woff"
					fontSize={1.378}
					position={[1.95, 0.42, 0.72]}
					letterSpacing={0.008}
				>
					256
					<meshBasicMaterial toneMapped={false}>
						<videoTexture
							attach="map"
							args={[video]}
							offset={new THREE.Vector2(0.1, 0.1)}
							wrapT={THREE.MirroredRepeatWrapping}
							encoding={THREE.sRGBEncoding}
						/>
					</meshBasicMaterial>
				</Text>
			</Center>
		</a.group>
	);
};

const Intro = () => {
	const [vec] = useState(() => new THREE.Vector3());
	return useFrame((state) => {
		state.camera.position.lerp(
			vec.set(state.mouse.x * 4, 3 + state.mouse.y * 2, 14),
			0.05
		);
		state.camera.lookAt(0, 0, 0);
	});
};

export default Index3dCanvas;
