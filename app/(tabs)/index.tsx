import { Image, StyleSheet, View, useColorScheme } from "react-native";
import * as React from "react";
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
import { ThemedButton } from "@/components/ThemedButton";
import GradientText from "@/components/GradientText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { i18n } from "@/constants/Lang";
import LanguageContext from "@/components/LanguageContext";
i18n.enableFallback = true;
interface ThemedHomeScreen {
	lightColor?: string;
	darkColor?: string;
	style?: any; // Adjust the type as needed
}

export default function HomeScreen({
	lightColor,
	darkColor,
}: ThemedHomeScreen) {
	const color = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"overlay"
	);
	const theme = useColorScheme(); // Pobierz aktualny motyw
	const textColor = theme === "light" ? `#fff` : "#fff";
	const router = useRouter();
	const languageContext = React.useContext(LanguageContext);

	if (!languageContext) {
		throw new Error("LanguageContext must be used within a LanguageProvider");
	}

	const { language } = languageContext;

	React.useEffect(() => {
		// Ta funkcja zostanie wywołana za każdym razem, gdy zmieni się język
		i18n.locale = language;
	}, [language]);

	return (
		<View style={styles.container}>
			<Image
				source={require("@/assets/images/workers.jpg")}
				style={styles.reactLogo}
			/>
			<View style={[{ backgroundColor: color }, styles.overlay]} />
			<Image
				source={require("@/assets/images/hammer.png")}
				style={styles.logo}
			/>
			<View style={styles.titleContainer}>
				<GradientText style={styles.heading}>{i18n.t("indexH1")}</GradientText>
			</View>
			<View style={styles.stepContainer}>
				<GradientText style={styles.heading2}>
					{i18n.t("indexSubtitle1")}
				</GradientText>
				<ThemedText style={{ color: textColor }}>
					{i18n.t("indexContent1")}
				</ThemedText>
				<GradientText style={styles.heading2}>
					{i18n.t("indexSubtitle2")}
				</GradientText>
				<ThemedText style={{ color: textColor }}>
					{i18n.t("indexContent1")}
				</ThemedText>
			</View>
			<ThemedButton
				title="START"
				onPress={() => router.push("/explore")}
				type="default"
				style={styles.button}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 0, // Upewnij się, że nakładka jest nad obrazkiem
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		paddingHorizontal: 80,
	},
	stepContainer: {
		gap: 12,
		marginTop: 35,
		marginBottom: 8,
		marginHorizontal: 20,
	},
	reactLogo: {
		height: "100%",
		width: "100%",
		position: "absolute",
	},
	button: {
		marginTop: 50,
		width: 150,
		height: 150,
	},
	logo: {
		width: 200,
		height: 200,
	},
	heading: {
		fontSize: 32,
		lineHeight: 36,
		textAlign: "center",
		fontFamily: "Lato",
	},
	heading2: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
