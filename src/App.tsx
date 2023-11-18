import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import LoadingPage from "./pages/LoadingPage";
import SignUpPage from "./pages/SignUpPage";
import PasswordResetPage from "./pages/PasswordResetPage";
// import AccountPage from "./pages/AccountPage";
import RecordAccountBookPage from "./pages/RecordAccountBookPage";
import RecurringPage from "./pages/RecurringPage";
import InstallmentPage from "./pages/InstallmentPage";
import RecordPage from "./pages/RecordPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/passwordreset" element={<PasswordResetPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      {/* <Route path="/account" element={<AccountPage />} /> */}
      <Route path="/recordAccountBook" element={<RecordAccountBookPage />} />
      <Route path="/recordAccountBook/recurring" element={<RecurringPage />} />
      <Route
        path="/recordAccountBook/installment"
        element={<InstallmentPage />}
      />
      <Route path="/record" element={<RecordPage />} />
    </Routes>
  );
}

export default App;
