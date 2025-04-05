import { AuthProvider } from "./modules/auth/context/AuthGlobalState";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
};
