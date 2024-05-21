import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import NormalView from "@/components/NormalView";
import { Appearance } from "react-native";
import { Divider, Switch, Modal, RadioButton } from "react-native-paper";
import { ThemedText } from "@/components/ThemedText";
import TopBar from "@/components/TopBar";
import { i18n } from "@/constants/Lang";
import { useLanguage } from "@/components/LanguageContext";

export default function Settings() {
	const [isSwitchOn, setIsSwitchOn] = useState<boolean>(
		Appearance.getColorScheme() === "dark" ? true : false
	);
	const onToggleSwitch = () => {
		setIsSwitchOn(!isSwitchOn);
		Appearance.setColorScheme(isSwitchOn ? "light" : "dark");
	};
	const [visible, setVisible] = useState<boolean>(false);
	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);
	const { language, changeLanguage } = useLanguage();
	const containerStyle = {
		backgroundColor: "black",
		padding: 30,
		color: "white",
		gap: 30,
	};
	return (
		<View style={{ flex: 1 }}>
			<TopBar title={i18n.t("tabsSettings")} />
			<NormalView>
				<View style={styles.view}>
					<ThemedText
						type="cardTextTitle"
						onPress={onToggleSwitch}
						style={{ width: "80%", height: "100%", textAlign: "left" }}
					>
						Dark Mode
					</ThemedText>
					<Switch
						value={isSwitchOn}
						onValueChange={onToggleSwitch}
						color="#2cbb63"
					/>
				</View>
				<Divider />
				<View style={styles.view}>
					<ThemedText
						type="cardTextTitle"
						onPress={showModal}
						style={{ width: "100%", height: "100%", textAlign: "left" }}
					>
						{i18n.t("settingsLang")}
					</ThemedText>
				</View>
				<Divider />
				<Modal
					visible={visible}
					onDismiss={hideModal}
					contentContainerStyle={containerStyle}
				>
					<View style={styles.radio}>
						<RadioButton
							value="en"
							status={language === "en" ? "checked" : "unchecked"}
							onPress={() => {
								changeLanguage("en");
								hideModal();
							}}
							color="#2cbb63"
						/>
						<ThemedText
							type="cardTextTitle"
							lightColor="#fff"
							onPress={() => {
								changeLanguage("en");
								hideModal();
							}}
							style={{ width: "100%", height: "100%", textAlign: "left" }}
						>
							English
						</ThemedText>
					</View>
					<Divider />
					<View style={styles.radio}>
						<RadioButton
							value="pl"
							status={language === "pl" ? "checked" : "unchecked"}
							onPress={() => {
								changeLanguage("pl");
								hideModal();
							}}
							color="#2cbb63"
						/>
						<ThemedText
							type="cardTextTitle"
							lightColor="#fff"
							onPress={() => {
								changeLanguage("pl");
								hideModal();
							}}
							style={{ width: "100%", height: "100%", textAlign: "left" }}
						>
							Polish
						</ThemedText>
					</View>
				</Modal>
			</NormalView>
		</View>
	);
}

const styles = StyleSheet.create({
	path: {
		height: 50,
		backgroundColor: "#11181C",
	},
	heading: {
		marginLeft: 0,
		fontSize: 48,
		lineHeight: 48,
		textAlign: "center",
		fontFamily: "Lato",
	},
	option: {
		marginLeft: 10,
		fontSize: 28,
		lineHeight: 28,
		fontFamily: "Lato",
	},
	view: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 30,
	},
	radio: {
		flexDirection: "row",
		gap: 15,
	},
});
