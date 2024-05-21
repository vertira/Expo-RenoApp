import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
	lightColor?: string;
	darkColor?: string;
	type?:
		| "default"
		| "title"
		| "defaultSemiBold"
		| "subtitle"
		| "link"
		| "button"
		| "cardTextTitle"
		| "cardTextContent";
};

export function ThemedText({
	style,
	lightColor,
	darkColor,
	type = "default",
	...rest
}: ThemedTextProps) {
	const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

	return (
		<Text
			style={[
				{ color },
				type === "default" ? styles.default : undefined,
				type === "title" ? styles.title : undefined,
				type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
				type === "subtitle" ? styles.subtitle : undefined,
				type === "link" ? styles.link : undefined,
				type === "button" ? styles.button : undefined,
				type === "cardTextTitle" ? styles.cardTextTitle : undefined,
				type === "cardTextContent" ? styles.cardTextContent : undefined,
				style,
			]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	default: {
		fontSize: 18,
		lineHeight: 24,
	},
	defaultSemiBold: {
		fontSize: 16,
		lineHeight: 24,
		fontWeight: "600",
	},
	title: {
		fontSize: 32,
		lineHeight: 36,
		textAlign: "center",
		fontFamily: "Lato",
	},
	subtitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	link: {
		lineHeight: 30,
		fontSize: 16,
		color: "#0a7ea4",
	},
	button: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#0a7ea4",
	},
	cardTextTitle: {
		fontSize: 28,
		lineHeight: 36,
		textAlign: "center",
		fontFamily: "Belle",
	},
	cardTextContent: {
		fontSize: 18,
		lineHeight: 28,
		textAlign: "left",
		fontFamily: "Belle",
	},
});
