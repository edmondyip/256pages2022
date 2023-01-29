import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Center,
	ContactShadows,
	Text3D,
	Text,
	Environment,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import {
	DepthOfField,
	EffectComposer,
	SSAO,
} from "@react-three/postprocessing";
import { list } from ".";
import Pages from "./pages";
import { isMobile } from "react-device-detect";

interface canvasProps {
	index: number;
}

const MeshComponent = ({ index }: canvasProps) => {
	return (
		<>
			<spotLight
				position={[25, 20, 25]}
				angle={0.25}
				color="white"
				castShadow
				shadow-mapSize={[512, 512]}
			/>
			<VideoTitle index={index} />
			<ContactShadows
				frames={1000}
				position={[0, -1.5, 0]}
				blur={2}
				opacity={0.5}
			/>
			<Intro />
			<EffectComposer>
				<SSAO
					samples={10}
					radius={10}
					intensity={10}
					luminanceInfluence={0.1}
					color="red"
				/>
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
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
							offset={new THREE.Vector2(0, 0.1)}
							wrapT={THREE.MirroredRepeatWrapping}
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

function Env() {
	return (
		<Environment
			preset="dawn"
			background
			blur={0.6}
		/>
	);
}

const Index3dCanvas = ({ index }: canvasProps) => {
	const fov = isMobile ? 40 : 22;

	return (
		<Canvas
			gl={{ antialias: true }}
			shadows
			camera={{ position: [0, 0, 250], fov: fov }}
			linear
		>
			<Suspense fallback={null}>
				<MeshComponent index={index} />
				<Pages />
				<Env />
			</Suspense>
		</Canvas>
	);
};

export default Index3dCanvas;
