import Link from "next/link";
import { navItem } from "types/layout";
import styles from "./navigator.module.scss";
import { firaCode } from "styles/fonts";

interface pageProps {
	item: navItem;
	index: number;
}

export const PageNavigatorItem = ({ item }: pageProps) => {
	return (
		<li className={styles.items}>
			<Link className={firaCode.className} href={item.path}>
				{item.label}
			</Link>
		</li>
	);
};
