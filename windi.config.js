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
				big: ['"Big Shoulders Display"'],
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
	plugins: [
		require("@windicss/plugin-heropatterns")({
			// the list of patterns you want to generate a class for
			// the names must be in kebab-case
			// an empty array will generate all 87 patterns
			patterns: ["polka-dots", "signal"],

			// The foreground colors of the pattern
			colors: {
				default: "#fffff",
				"blue-dark": "#000044", // also works with rgb(0,0,205)
			},

			// The foreground opacity
			opacity: {
				default: "0.4",
				100: "1.0",
			},
		}),
	],
});
