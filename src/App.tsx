import { Routes, Route, useRoutes } from "react-router-dom";
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
import UpdateChallengeGroupPage from "./pages/UpdateChallengeGroupPage";
import SavingPage from "./pages/SavingPage";

function App() {
  const isLoginPage = window.location.pathname === "/";
  const isSignUpPage = window.location.pathname === "/signup";
  const isPasswordReset = window.location.pathname === "/passwordreset";
  const isRecordAccountBook = window.location.pathname === "/recordAccountBook";
  const isCreateChallengeGroups =
    window.location.pathname === "/challenge/create";

  return (
    <Layout>
      {/* COMPLETED: NavigationItems 컴포넌트 조건에 따라 렌더링 */}
      {useRoutes([
        { path: "/", element: <LoginPage /> },
        { path: "/signUp", element: <SignUpPage /> },
        { path: "/passwordReset", element: <PasswordResetPage /> },
        { path: "/recordAccountBook/recurring", element: <RecurringPage /> },
        { path: "/challenge/create", element: <CreateChallengeGroupPage /> },
        {
          path: "/challenge/update/:slug",
          element: <UpdateChallengeGroupPage />,
        },
        {
          path: "/*",
          element: (
            <>
              <Routes>
                <Route path="/account" element={<AccountPage />} />
                <Route
                  path="/recordAccountBook"
                  element={<RecordAccountBookPage />}
                />
                <Route
                  path="/recordAccountBook/installment"
                  element={<InstallmentPage />}
                />
                <Route path="/challenge" element={<ChallengePage />} />
                <Route
                  path="/challenge/:slug"
                  element={<ChallengeDetailPage />}
                />
                <Route path="/saving/:slug" element={<SavingPage />} />
                <Route path="/statistics" element={<StatisticPage />} />
                <Route path="/record" element={<RecordPage />} />
                <Route path="/setting" element={<SettingPage />} />
                <Route path="/chatting/:slug" element={<ChattingPage />} />
              </Routes>
              {!isLoginPage &&
                !isSignUpPage &&
                !isPasswordReset &&
                !isRecordAccountBook &&
                !isCreateChallengeGroups && <NavigationItems />}
            </>
          ),
        },
      ])}
    </Layout>
  );
}

export default App;
