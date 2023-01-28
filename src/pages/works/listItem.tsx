import React, { useState } from "react";
import Image from "next/image";
import HoverVideoPlayer from "react-hover-video-player";
import { work } from "pages/api/works";

interface WorkListItemProps {
	works: work[];
}

const ListItem = (work: work) => {
	const [hover, setHover] = useState(false);
	const [ratio, setRatio] = useState(16 / 9);

	return (
		<li
			key={work.id}
			onMouseEnter={() => setHover(true)}
			onMouseOut={() => setHover(false)}
		>
			{/* <Link
				href={`/works/${work.id}`}
				onMouseEnter={() => setHover(true)}
				onMouseOut={() => setHover(false)}
			> */}
			<HoverVideoPlayer
				videoSrc={work.video}
				style={{ display: "block" }}
				pausedOverlay={
					<Image
						src={work.cover}
						width={800}
						height={600 / ratio}
						alt={work.name}
						onLoadingComplete={({ naturalWidth, naturalHeight }) =>
							setRatio(naturalWidth / naturalHeight)
						}
						style={{
							width: "100%",
						}}
					/>
				}
			/>
			{/* </Link> */}
			<h2>
				{/* <Link href={`/works/${work.id}`}> */}
				{work.name}
				{/* </Link> */}
			</h2>
			<p>{work.shortDescription}</p>
		</li>
	);
};

export const WorkListItem = ({ works }: WorkListItemProps) => {
	return (
		<>
			{works.map((work: work, index: number) => (
				<ListItem key={index} {...work} />
			))}
		</>
	);
};
