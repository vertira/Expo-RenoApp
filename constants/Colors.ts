/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#2cbb63";
const tintColorDark = "#fff";

export const Colors = {
	light: {
		text: "#11181C",
		background: "#fff",
		tint: tintColorLight,
		icon: "#687076",
		tabIconDefault: "#687076",
		tabIconSelected: tintColorLight,
		backgroundCard: "#fff",
		backgroundTopBar: "#121212",
		overlay: "rgba(0, 0, 0, 0.5)",
	},
	dark: {
		text: "#F4F7FB",
		background: "#11181C",
		tint: tintColorDark,
		icon: "#3A5364",
		tabIconDefault: "#3A5364",
		tabIconSelected: tintColorDark,
		backgroundCard: "#09090b",
		backgroundTopBar: "#121212",
		overlay: "rgba(0, 0, 0, 0.7)",
	},
};
