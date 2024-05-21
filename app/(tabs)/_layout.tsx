import { Tabs } from "expo-router";
import React, { useContext, useEffect } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { i18n } from "@/constants/Lang";
import LanguageContext from "@/components/LanguageContext";
export default function TabLayout() {
	const languageContext = useContext(LanguageContext);

	if (!languageContext) {
		throw new Error("LanguageContext must be used within a LanguageProvider");
	}

	const { language } = languageContext;

	useEffect(() => {
		// Ta funkcja zostanie wywołana za każdym razem, gdy zmieni się język
		i18n.locale = language;
	}, [language]);
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: i18n.t("tabsHome"),
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "home" : "home-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: i18n.t("tabsPaths"),
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "hammer" : "hammer-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: i18n.t("tabsSettings"),
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "settings" : "settings-outline"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
