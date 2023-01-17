import {
	Big_Shoulders_Display,
	Outfit,
	Fira_Code,
	Oswald,
} from "@next/font/google";

export const bigShouldersDisplay = Big_Shoulders_Display({
	subsets: ["latin"],
	weight: "variable",
	variable: "--bigShouldersDisplay-font",
});

export const outfit = Outfit({
	subsets: ["latin"],
	weight: "variable",
	variable: "--outfit-font",
});

export const firaCode = Fira_Code({
	subsets: ["latin"],
	weight: "variable",
	variable: "--firaCode-font",
});

export const oswald = Oswald({
	subsets: ["latin"],
	weight: "variable",
	variable: "--oswald-font",
});
