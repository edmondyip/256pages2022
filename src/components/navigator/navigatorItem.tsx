import Link from "next/link";
import { navItem } from "types/layout";
import styles from "./navigator.module.scss";
import { firaCode } from "styles/fonts";
import { useRouter } from "next/router";

interface pageProps {
	item: navItem;
	index: number;
}

export const PageNavigatorItem = ({ item }: pageProps) => {
	const router = useRouter()
	const currentRoute = router.pathname
	const isUrl = item.path.match(/https?:\/\//g)

	return (
		<li className={`${styles.items} ${currentRoute === item.path ? styles.active : ""}`}>
			<Link className={`${firaCode.className}`} target={isUrl ? "_blank" : ""} href={item.path}>
				{item.label}
			</Link>
		</li>
	);
};
