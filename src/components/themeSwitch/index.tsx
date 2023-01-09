import { useTheme } from "next-themes";
import styles from "./themeSwitch.module.scss"

const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={styles.switch}>
			{theme === "dark" ? (
				<button onClick={() => setTheme("light")}>Light</button>
			) : (
				<button onClick={() => setTheme("dark")}>Dark</button>
			)}
		</div>
	);
};

export default ThemeSwitch;
