import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import RecordAccountBookPage from "./pages/RecordAccountBookPage";
import RecurringPage from "./pages/RecurringPage";
import InstallmentPage from "./pages/InstallmentPage";
import RecordPage from "./pages/RecordPage";
import SettingPage from "./pages/SettingPage";
import ChallengePage from "./pages/ChallengePage";
import AccountPage from "./pages/AccountPage";
import StatisticPage from "./pages/StatisticPage";
import NavigationItems from "./components/Common/NavigationItems";
import Layout from "./components/Common/Layout";
import ChattingPage from "./pages/ChattingPage";
import ChallengeDetailPage from "./pages/ChallengeDetailPage";
import CreateChallengeGroupPage from "./pages/CreateChallengeGroupPage";

function App() {
  const isLoginPage = window.location.pathname === "/login";
  const isSignUpPage = window.location.pathname === "/signup";
  const isPasswordReset = window.location.pathname === "/passwordreset";
  const isRecordAccountBook = window.location.pathname === "/recordAccountBook";

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AccountPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/passwordreset" element={<PasswordResetPage />} />
        <Route path="/recordAccountBook" element={<RecordAccountBookPage />} />
        <Route
          path="/recordAccountBook/recurring"
          element={<RecurringPage />}
        />
        <Route
          path="/recordAccountBook/installment"
          element={<InstallmentPage />}
        />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/challenge/:slug" element={<ChallengeDetailPage />} />
        <Route
          path="/challenge/create"
          element={<CreateChallengeGroupPage />}
        />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/chatting" element={<ChattingPage />} />
      </Routes>
      {!isLoginPage &&
        !isSignUpPage &&
        !isPasswordReset &&
        !isRecordAccountBook && <NavigationItems />}
    </Layout>
  );
}

export default App;
