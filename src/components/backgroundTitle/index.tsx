import styles from "./backgroundTitle.module.scss";

interface BackgroundTitleProps {
	title: string;
}

const BackgroundTitle = ({ title }: BackgroundTitleProps) => {
	return (
		<h1 className={styles.title}>
			{title}
		</h1>
	);
};

export default BackgroundTitle;
