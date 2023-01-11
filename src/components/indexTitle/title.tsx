import React, { useEffect, useState } from "react";
import { useTrail, a } from "@react-spring/web";
import { list } from "./index";
import styles from "./indexTitle.module.scss";

interface titleProps {
	index: number;
}

const Index3dTitle = ({ index }: titleProps) => {
	const [open, set] = useState<boolean>(true);
	const [videoTitle, setTitle] = useState<string>();
	const mappedList: (string|number)[] = [list[index].title, 5000]


	const change = () => {
		set((state) => !state);
		setTimeout(() => setTitle(list[index].title), 200);
	};

	useEffect(() => {
		change();
		setTimeout(change, 500);
	}, [index]);

	

	return (
		<div className={styles.container}>
			<Trail open={open}>
				<h1 className={styles.title}>{videoTitle}</h1>
			</Trail>
		</div>
	);
};

const Trail: React.FC<{ open: boolean; children: any }> = ({
	open,
	children,
}) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 10, tension: 2000, friction: 200 },
		opacity: open ? 1 : 0,
		y: open ? 0 : 10,
		height: open ? 110 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});
	return (
		<div>
			{trail.map(({ height, ...style }, index) => (
				<a.div key={index} className={styles.trailsText} style={style}>
					<a.div style={{ height }}>{items[index]}</a.div>
				</a.div>
			))}
		</div>
	);
};

export default Index3dTitle;
