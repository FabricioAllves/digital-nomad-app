import { Icon } from "@/src/components/Icon"
import { useAppTheme } from "@/src/theme/useAppTheme"
import { Tabs } from "expo-router"
import React from "react"

export default function TabLayout() {
  const { colors } = useAppTheme()
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray2,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Poppins-Regular",
          color: colors.text,
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          paddingTop: 10,
          height: 90,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? "Home-fill" : "Home-outline"}
                color={focused ? "primary" : "gray2"}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon name={"Explore"} color={focused ? "primary" : "gray2"} />
            )
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? "Person-fill" : "Person-outline"}
                color={focused ? "primary" : "gray2"}
              />
            )
          },
        }}
      />
    </Tabs>
  )
}
