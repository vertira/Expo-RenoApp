import { StyleSheet, ScrollView } from "react-native";
import ThemedCard from "@/components/ThemedCard";
import NormalView from "@/components/NormalView";
import { Divider } from "react-native-paper";
import TopBar from "@/components/TopBar";
import { i18n } from "@/constants/Lang";
import { useContext, useEffect } from "react";
import LanguageContext from "@/components/LanguageContext";
export default function TabTwoScreen() {
	const languageContext = useContext(LanguageContext);

	if (!languageContext) {
		throw new Error("LanguageContext must be used within a LanguageProvider");
	}

	const { language } = languageContext;

	useEffect(() => {
		// Ta funkcja zostanie wywołana za każdym razem, gdy zmieni się język
		i18n.locale = language;
	}, [language]);
	return (
		<ScrollView>
			<TopBar title={i18n.t("tabsPaths")} />
			<NormalView>
				<ThemedCard
					title={i18n.t("exploreTitle1")}
					content={i18n.t("exploreContent1")}
					source={require("@/assets/images/papers.jpg")}
				/>
				<Divider />
				<ThemedCard
					title={i18n.t("exploreTitle2")}
					content={i18n.t("exploreContent2")}
					source={require("@/assets/images/house.jpg")}
				/>
				<Divider />
				<ThemedCard
					title={i18n.t("exploreTitle3")}
					content={i18n.t("exploreContent3")}
					source={require("@/assets/images/finish.jpg")}
				/>
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
		marginLeft: 30,
		fontSize: 48,
		lineHeight: 48,
		textAlign: "center",
		fontFamily: "Lato",
	},
});
