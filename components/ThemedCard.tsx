import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { ThemedButton } from "./ThemedButton";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";
import { useRouter } from "expo-router";
import { i18n } from "@/constants/Lang";

interface ThemedCardProps {
	title: string;
	source: any; // Adjust type based on the actual source type (e.g., ImageSourcePropType)
	content: string;
	lightColor?: string;
	darkColor?: string;
	style?: any; // Adjust the type as needed
}

const ThemedCard = ({
	title,
	source,
	content,
	lightColor,
	darkColor,
	style,
}: ThemedCardProps) => {
	const color = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"backgroundCard"
	);
	const router = useRouter();
	return (
		<Card style={[{ backgroundColor: color }, style]}>
			<Card.Cover source={source} />
			<Card.Content style={styles.cardContent}>
				<ThemedText type="cardTextTitle">{title}</ThemedText>
				<ThemedText type="cardTextContent">{content}</ThemedText>
			</Card.Content>
			<Card.Actions>
				<ThemedButton
					title={i18n.t("exploreButton")}
					type="card"
					onPress={() => router.push("/paths/plan")}
					style={styles.button}
				/>
			</Card.Actions>
		</Card>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 150,
		height: 60,
	},
	cardContent: {
		marginTop: 15,
		gap: 15,
	},
});

export default ThemedCard;
