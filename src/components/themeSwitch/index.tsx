import { useTheme } from "next-themes";
import { DarkModeToggle, Mode } from "@anatoliygatt/dark-mode-toggle";
import styles from "./themeSwitch.module.scss";
import { useState } from "react";

const ThemeSwitch = () => {
	const [mode, setMode] = useState<Mode>("dark");
	const { setTheme } = useTheme();

	return (
		<div className={`switch ${styles.switch}`}>
			<DarkModeToggle
				mode={mode}
				size="sm"
				onChange={(mode) => {
					setMode(mode);
					setTheme(mode);
				}}
			/>
		</div>
	);
};

export default ThemeSwitch;
