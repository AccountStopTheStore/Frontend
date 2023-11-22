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
// import { isHaveToken } from "./assets/util";

interface ProtectedRouteProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

function App() {
  // const isLoggedIn = isHaveToken();

  const isLoginPage = window.location.pathname === "/login";
  const isSignUpPage = window.location.pathname === "/signup";
  const isPasswordReset = window.location.pathname === "/passwordreset";
  const isRecordAccountBook = window.location.pathname === "/recordAccountBook";

  return (
    <Layout>
      <Routes>
        {/* COMPLETED: 처음 화면에 진입했을 때 */}
        <Route path="/" element={<LoginPage />} />
        {/* COMPLETED: 로그인하지 않아서, Token이 없을 때 */}
        <Route
          path="/login"
          element={
            // <UnProtectedRoute isLoggedIn={isLoggedIn}>
            <LoginPage />
          }
        />
        <Route
          path="/signUp"
          element={
            // <UnProtectedRoute isLoggedIn={isLoggedIn}>
            <SignUpPage />
          }
        />
        <Route
          path="/passwordReset"
          element={
            // <UnProtectedRoute isLoggedIn={isLoggedIn}>
            <PasswordResetPage />
          }
        />
        {/* COMPLETED: 로그인하여, Token이 주어졌을 때 */}
        <Route
          path="/account"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <AccountPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recordAccountBook"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <RecordAccountBookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recordAccountBook/recurring"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <RecurringPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recordAccountBook/installment"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <InstallmentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/challenge"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <ChallengePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/challenge/:slug"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <ChallengeDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/challenge/create"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <CreateChallengeGroupPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/statistic"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <StatisticPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/record"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <RecordPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <SettingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatting/:slug"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <ChattingPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isLoginPage &&
        !isSignUpPage &&
        !isPasswordReset &&
        !isRecordAccountBook && <NavigationItems />}
    </Layout>
  );
}

const ProtectedRoute = ({ isLoggedIn, children }: ProtectedRouteProps) => {
  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    );
  }

  return children;
};
export default App;
