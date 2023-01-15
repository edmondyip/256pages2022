import { Big_Shoulders_Display, Outfit, Fira_Code, Oswald } from "@next/font/google";

export const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
	weight: "500",
	variable: "--bigShouldsDisplay-font",
});

export const outfit = Outfit({
	subsets: ["latin"],
	weight: "400",
	variable: "--outfit-font"
})

export const firaCode = Fira_Code({
	subsets: ["latin"],
	weight: "300",
	variable: "--firaCode-font"
})

export const oswald = Oswald({
	subsets: ["latin"],
	weight: "700",
	variable: "--oswald-font"
})