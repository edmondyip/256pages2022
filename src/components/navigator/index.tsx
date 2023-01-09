import { navItem } from "types/layout";
import { PageNavigatorItem } from "./navigatorItem";
import styles from "./navigator.module.scss";

interface IProps {
	nav: navItem[];
}

export const PageNavigator = ({ nav }: IProps) => {
	return (
		<nav className={styles.nav}>
			{nav.map((item: navItem, index: number) => (
				<PageNavigatorItem key={item.label} index={index} item={item} />
			))}
		</nav>
	);
};
