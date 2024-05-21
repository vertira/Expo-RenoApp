import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedButtonProps = {
	lightColor?: string;
	darkColor?: string;
	type?: "default" | "card";
	title: string;
	onPress: () => void;
	style?: object;
};

export function ThemedButton({
	style,
	lightColor,
	darkColor,
	type,
	title,
	onPress,
	...rest
}: ThemedButtonProps) {
	const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

	return (
		<TouchableOpacity
			style={[
				styles.button,
				type === "default" ? styles.default : undefined,
				type === "card" ? styles.card : undefined,
				style,
			]}
			onPress={onPress}
			{...rest}
		>
			<Text style={[styles.buttonText]}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	default: {
		backgroundColor: "#000",
		borderRadius: 100,
		shadowColor: "#2cbb63",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.15,
		shadowRadius: 8,
		elevation: 20,
		paddingVertical: 7,
		paddingHorizontal: 30,
		borderWidth: 0,
	},
	card: {
		backgroundColor: "#040D12",
		borderRadius: 50,
		shadowColor: "#2cbb63",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.15,
		shadowRadius: 8,
		elevation: 8,
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderWidth: 0,
	},
	buttonText: {
		color: "#2cbb63",
		fontFamily: "SpaceMono",
		fontSize: 28,
		textAlign: "center",
		textDecorationLine: "none",
		userSelect: "none",
	},
});
