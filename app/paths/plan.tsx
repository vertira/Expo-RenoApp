import { StyleSheet, ScrollView } from "react-native";
import NormalView from "@/components/NormalView";
import { Appbar } from "react-native-paper";
import { Card } from "react-native-paper";
import GradientText from "@/components/GradientText";
import { ThemedText } from "@/components/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import TopBar from "@/components/TopBar";
import { i18n } from "@/constants/Lang";
export default function Plan() {
	const router = useRouter();
	return (
		<ScrollView>
			<TopBar title={i18n.t("tabsContent1")}>
				<Ionicons
					name="arrow-back"
					size={52}
					color="#fff"
					style={{ marginLeft: 10 }}
					onPress={() => router.back()}
				/>
			</TopBar>
			<NormalView>
				<Card>
					<Card.Cover source={require("@/assets/images/papers.jpg")} />
				</Card>
				<GradientText
					lightColors={["black", "#2cbb63"]}
					style={styles.heading2}
				>
					{i18n.t("planH1")}
				</GradientText>
				<ThemedText type="subtitle">{i18n.t("planHeading1")}</ThemedText>
				<Card style={styles.cardContent}>
					<Card.Content>
						<ThemedText type="cardTextContent">
							{i18n.t("planContent1")}
						</ThemedText>
						<Card.Cover
							source={require("@/assets/images/plan1.jpg")}
							style={{ marginTop: 20 }}
						/>
					</Card.Content>
				</Card>
				<ThemedText type="subtitle">{i18n.t("planHeading2")}</ThemedText>
				<Card style={styles.cardContent}>
					<Card.Content>
						<ThemedText type="cardTextContent">
							{i18n.t("planContent2")}
						</ThemedText>
						<Card.Cover
							source={require("@/assets/images/plan2.jpg")}
							style={{ marginTop: 20 }}
						/>
					</Card.Content>
				</Card>
				<ThemedText type="subtitle">{i18n.t("planHeading3")}</ThemedText>
				<Card style={styles.cardContent}>
					<Card.Content>
						<ThemedText type="cardTextContent">
							{i18n.t("planContent3")}
						</ThemedText>
						<Card.Cover
							source={require("@/assets/images/plan3.jpg")}
							style={{ marginTop: 20 }}
						/>
					</Card.Content>
				</Card>
			</NormalView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	path: {
		height: 100,
		backgroundColor: "#11181C",
	},
	heading: {
		marginLeft: 15,
		fontSize: 48,
		lineHeight: 48,
		textAlign: "center",
		fontFamily: "Lato",
	},
	heading2: {
		marginLeft: 30,
		fontSize: 32,
		lineHeight: 40,
		textAlign: "center",
		fontFamily: "Belle",
	},
	cardContent: {
		backgroundColor: "transparent",
		opacity: 0.9,
	},
});
