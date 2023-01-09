import { ReactNode } from "react";
import styles from "./frame.module.scss"

interface FrameContent {
	children: ReactNode;
}

export const FrameLayout = ({ children }: FrameContent) => {
	return <section className={styles.frame}>{children}</section>;
};
