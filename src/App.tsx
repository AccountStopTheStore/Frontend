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
  const isLoggedIn = isHaveToken();

  const isLoginPage = window.location.pathname === "/login";
  const isSignUpPage = window.location.pathname === "/signup";
  const isPasswordReset = window.location.pathname === "/passwordreset";
  const isRecordAccountBook = window.location.pathname === "/recordAccountBook";

  return (
    <Layout>
      <Routes>
        {/* COMPLETED: 처음 화면에 진입했을 때 */}
        <Route
          path="/"
          element={isLoggedIn ? <AccountPage /> : <LoginPage />}
        />
        {/* COMPLETED: 로그인하지 않아서, Token이 없을 때 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/passwordReset" element={<PasswordResetPage />} />
        {/* COMPLETED: 로그인하여, Token이 주어졌을 때 */}
        <Route path="/account" element={<AccountPage />} />
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
        <Route path="/chatting/:slug" element={<ChattingPage />} />
      </Routes>
      {!isLoginPage &&
        !isSignUpPage &&
        !isPasswordReset &&
        !isRecordAccountBook && <NavigationItems />}
    </Layout>
  );
}

/** COMPLETED: Cookie에 Token이 존재하는지 확인하기 */
const isHaveToken = () => {
  const COOKIE_VALUE = `${document.cookie}`;
  console.log("COOKIE_VALUE: ", COOKIE_VALUE);

  if (!COOKIE_VALUE) return false;

  const PARTS = COOKIE_VALUE.split(";");
  const ACCESS_TOKEN = PARTS[5].split("=")[1];

  if (ACCESS_TOKEN) {
    return true;
  } else {
    return false;
  }
};

export default App;
