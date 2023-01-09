import { useTheme } from "next-themes";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import styles from "./themeSwitch.module.scss";

const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={styles.switch}>
			<DarkModeToggle
				mode={theme}
				size="sm"
				onChange={(theme) => {
					setTheme(theme);
				}}
			/>
		</div>
	);
};

export default ThemeSwitch;
