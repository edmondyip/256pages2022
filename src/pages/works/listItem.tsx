import Link from "next/link";
import dynamic from "next/dynamic";
import { work } from "pages/api/works";
import React, { useEffect, useRef, useState } from "react";
import styles from "./works.module.scss";
import Image from "next/image";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import HoverVideoPlayer from "react-hover-video-player";

interface WorkListItemProps {
	works: work[];
}

const ListItem = (work: work) => {
	const [hover, setHover] = useState(false);

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
						height={600}
						alt={work.name}
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
		</li>
	);
};

export const WorkListItem = ({ works }: WorkListItemProps) => {
	return (
		<>
			{works.map((work: work, index: number) => (
				<ListItem {...work} />
			))}
		</>
	);
};
