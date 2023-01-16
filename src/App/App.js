import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Auth } from "../pages/Auth";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";

export function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="" element={<Layout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
      </Route>

      {/* <Route path="/billing" element={<Billing />} />
      <Route path="/billing/*" element={<Billing />} />
      <Route path="/billing/plan" element={<Plan />} />
      <Route path="/billing/payment" element={<Payment />} />
      <Route path="/billing/invoice" element={<Invoice />} />
      <Route path="/billing/invoice/*" element={<Invoice />} /> */}
    </Routes>
  );
}