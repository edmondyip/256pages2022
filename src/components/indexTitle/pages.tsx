import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, MathUtils, Mesh, Vector3 } from "three";

const Page = () => {
	const mesh = useRef<Mesh>(null!);

	const position = useMemo(() => {
		return new Vector3(
			MathUtils.randInt(-8, 8),
			MathUtils.randInt(-3, 3),
			MathUtils.randInt(-3, 3)
		);
	}, []);

	const timeMod = useMemo(() => MathUtils.randInt(0.1, 4), []);

	useFrame(() => {
		mesh.current.rotation.y += 0.01 * timeMod;
	});

	return (
		<mesh ref={mesh} position={position}>
			<boxGeometry attach="geometry" args={[0.02, 0.5, 0.3]} />
			<meshStandardMaterial
				attach="material"
				color={"white"}
				roughness={0.6}
				metalness={0.1}
			/>
		</mesh>
	);
};

const Pages = () => {
	const group = useRef<Group>(null!);

	useFrame(() => {
		group.current.rotation.y += 0.005;
	});

	return (
		<group ref={group}>
			{Array.apply(null, new Array(30)).map((e: any, i: number) => (
				<Page key={i} />
			))}
		</group>
	);
};

export default Pages;
