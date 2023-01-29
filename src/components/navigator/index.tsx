import { navItem } from "types/layout";
import { PageNavigatorItem } from "./navigatorItem";
import styles from "./navigator.module.scss";

interface IProps {
	nav: navItem[];
	openNav: boolean;
}

export const PageNavigator = ({ nav, openNav }: IProps) => {
	return (
		<nav className={`navigator ${styles.nav} ${openNav ? "open" : ""}`}>
			{nav.map((item: navItem, index: number) => (
				<PageNavigatorItem key={item.label} index={index} item={item} />
			))}
		</nav>
	);
};
