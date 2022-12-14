import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";

export default defineConfig({
	darkMode: "media",
	theme: {
		extend: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			colors: {
				blue: colors.sky,
				red: colors.rose,
				pink: colors.fuchsia,
				dark: colors.zinc,
			},
			fontFamily: {
				big: ["\"Big Shoulders Display\""],
				sans: ["Graphik", "sans-serif"],
				serif: ["Merriweather", "serif"],
			},
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	extract: {
		include: ["**/*.{jsx,tsx,css}"],
		exclude: ["node_modules", ".git", ".next"],
	},
});
