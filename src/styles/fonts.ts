import { Big_Shoulders_Display, Outfit } from "@next/font/google";

export const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
	weight: "100",
	variable: "--bigShouldsDisplay-font",
});

export const outfit = Outfit({
	subsets: ["latin"],
	weight: "400",
	variable: "--outfit-font"
})