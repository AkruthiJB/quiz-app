import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InputDetailsForm from "./pages/input";
import appReducer from "./context/appreducer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Questions from "./pages/questions";
import ResultsPage from "./pages/results";
import AuthLayout from "./components/authlayout";

const initContextData = { answers: {} };
const AppContext: any = React.createContext([]);

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      // main: "#5893df",
      main: "#1A132F",
    },
    secondary: {
      main: "#FDF6EC",
    },
    tertiary: {
      main: "#212121",
    },
    background: {
      default: "#E8F9FD",
      paper: "#3A3845",
    },
    text: {
      primary:"#FEE2C5",
    },
  },

  typography: {
    allVariants: {
      fontFamily: "'Lobster', cursive",
      fontWeight: "bold",
    },
    body1: {
      fontWeight: "normal",
    },
    button: {
      fontWeight: "bold",
    },
  },
});

const App = () => {
  const [appData, dispatchAppData] = useReducer(appReducer, initContextData);

  return (
    <AppContext.Provider value={[appData, dispatchAppData]}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<InputDetailsForm />} path="/" />
            <Route element={<Questions />} path="/questions" />
            <Route element={<AuthLayout />}>
              <Route element={<ResultsPage />} path="/results" />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
export { AppContext };