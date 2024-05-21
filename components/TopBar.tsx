import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import { useThemeColor } from "@/hooks/useThemeColor";
import GradientText from "./GradientText";

interface ThemedTopBar {
	title: string;
	lightColor?: string;
	darkColor?: string;
	children?: React.ReactNode;
	style?: any; // Adjust the type as needed
}

const TopBar = ({
	title,
	lightColor,
	darkColor,
	children,
	style,
}: ThemedTopBar) => {
	const color = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"backgroundTopBar"
	);
	return (
		<Appbar.Header style={[{ backgroundColor: color }, style]}>
            {children}
			<GradientText lightColors={["white", "#2cbb63"]} style={styles.heading}>
				{title}
			</GradientText>
		</Appbar.Header>
	);
};

const styles = StyleSheet.create({
	path: {
		height: 150,
	},
	heading: {
		marginLeft: 30,
		fontSize: 48,
		lineHeight: 48,
		textAlign: "center",
		fontFamily: "Lato",
	},
});

export default TopBar;
