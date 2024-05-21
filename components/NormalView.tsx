import React from "react";
import { StyleSheet, ViewProps } from "react-native";
import { ThemedView } from "@/components/ThemedView";

interface NormalViewProps extends ViewProps {
	children: React.ReactNode;
}

export default function NormalView({ children }: NormalViewProps) {
	return (
		<ThemedView style={styles.container}>
			<ThemedView style={styles.content}>{children}</ThemedView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		padding: 32,
		gap: 16,
		overflow: "hidden",
	},
});
