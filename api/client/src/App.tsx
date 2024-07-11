// @ts-nocheck
import authProvider from "@middlewares/auth/auth.middleware";
import AnalyticsIcon from "@mui/icons-material/BarChart";
import CustomerIcon from "@mui/icons-material/People";
import { CredentialsProvider } from "@providers/api/core/credentials.provider";
import originProvider from "@providers/api/core/origin.provider";
import { Admin, Resource } from "react-admin";
import i18nProvider from "./i18nProvider";
import { radiantDarkTheme, radiantLightTheme } from "./themes/themes";
// USERS IMPORTS
import CustomMenu from "@components/menu/menu";
import { UserCreate } from "@components/users/create/users.create";
import { EditUser } from "@components/users/edit/users.edit";
import { UserList } from "@components/users/list/users.list";
import { Analytics } from "@views/analytics/analytics.views";
import { DashboardList } from "@views/dashboard/dashboard.views";

const themes = {
  darkTheme: radiantDarkTheme,
  lightTheme: radiantLightTheme,
};

const scrollbarStyle = `
body::-webkit-scrollbar, .RaDatagrid-root::-webkit-scrollbar, .recharts-responsive-container::-webkit-scrollbar, .MuiBox-root::-webkit-scrollbar {
  width: 10px;
}
body::-webkit-scrollbar-track, .RaDatagrid-root::-webkit-scrollbar-track, .recharts-responsive-container::-webkit-scrollbar-track, .MuiBox-root::-webkit-scrollbar-track {
  background: ${themes.lightTheme.palette.background.paper};
}
body::-webkit-scrollbar-thumb, .RaDatagrid-root::-webkit-scrollbar-thumb, .recharts-responsive-container::-webkit-scrollbar-thumb, .MuiBox-root::-webkit-scrollbar-thumb {
  background: ${themes.lightTheme.palette.primary.main};
}
`;

const App = () => (
  <>
    <style>{scrollbarStyle}</style>
    <Admin
      authProvider={authProvider}
      dataProvider={originProvider}
      i18nProvider={i18nProvider}
      menu={CustomMenu}
      defaultTheme={CredentialsProvider.getTheme()}
      theme={radiantDarkTheme}
      darkTheme={radiantLightTheme}
    >
      <Resource
        options={{ label: "Analytics" }}
        name="analytics"
        list={Analytics}
        icon={AnalyticsIcon}
      />
    </Admin>
  </>
);

export default App;
