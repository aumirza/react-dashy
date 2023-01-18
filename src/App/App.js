import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Auth } from "../pages/Auth";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { theme } from "../styles";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="" element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Route>

      </Routes>
    </ThemeProvider>
  );
}