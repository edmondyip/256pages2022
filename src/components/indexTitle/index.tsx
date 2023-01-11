import { useEffect, useState } from "react";
import Index3dCanvas from "./canvas";
import Index3dTitle from "./title";

export interface listItem {
	video: string;
	color: string;
	title: string;
}

export const list: listItem[] = [
	{
		video: "minecraft.mp4",
		color: "#03ff89",
		title: "... is the number of pixels on one side of a Minecraft block.",
	},
	{
		video: "pacman.mp4",
		color: "#fff307",
		title: "... is the unbeatable bugged level of the original Pac-Man game.",
	},
	{
		video: "braille.mp4",
		color: "#00b1d4",
		title: "... is the number of characters in the 8-dot Braille system.",
	},
	{
		video: "gif.mp4",
		color: "#ff615d",
		title:
			"... is the number of colors available in a GIF or a 256-color (8-bit) bitmap.",
	},
];

const index3d = () => {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			return count === 3 ? setCount(0) : setCount(count + 1);
		}, 5000);

		return () => clearTimeout(timeout);
	}, [count]);

	return (
		<>
			<Index3dCanvas index={count} />
			<Index3dTitle index={count} />
		</>
	);
};

export default index3d;
