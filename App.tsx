import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { UserProvider } from "./src/contexts/userData";
import { AuthProvider } from "./src/contexts/useAuth";
import { NotificationProvider } from "./src/contexts/useNotification";
import { Routes } from "./src/routes";

import { navigationRef } from "./src/routes/RootNavigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <NotificationProvider>
        <AuthProvider>
          <UserProvider>
            <Routes />
          </UserProvider>
        </AuthProvider>
      </NotificationProvider>
    </NavigationContainer>
  );
}
