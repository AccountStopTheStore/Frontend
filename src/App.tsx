import { Routes, Route, useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ResetPasswordPage from "./pages/PasswordResetPage";
import RecordAccountBookPage from "./pages/RecordAccountBookPage";
import RecurringPage from "./pages/RecurringPage";
import InstallmentPage from "./pages/InstallmentPage";
import RecordPage from "./pages/RecordPage";
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
import SettingAssetManagementPage from "./pages/SettingAssetManagementPage";
import SettingMainPage from "./pages/SettingMainPage";
import SettingIncomeManagementPage from "./pages/SettingIncomeManagementPage";
import SettingExpenseManagementPage from "./pages/SettingExpenseManagementPage";
import CreateAssetManagementPage from "./pages/CreateAssetManagementPage";
import SearchPage from "./pages/SearchPage";

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
        { path: "/resetpassword", element: <ResetPasswordPage /> },
        {
          path: "/recordAccountBook/recurring",
          element: <RecurringPage />,
          caseSensitive: true,
        },
        { path: "/challenge/create", element: <CreateChallengeGroupPage /> },

        {
          path: "/challenge/update/:slug",
          element: <UpdateChallengeGroupPage />,
        },
        {
          path: "/setting/asset/create",
          element: <CreateAssetManagementPage />,
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
                  caseSensitive={true}
                />
                <Route
                  path="/recordAccountBook/installment"
                  element={<InstallmentPage />}
                  caseSensitive={true}
                />
                <Route path="/challenge" element={<ChallengePage />} />
                <Route
                  path="/challenge/:slug"
                  element={<ChallengeDetailPage />}
                />
                <Route path="/saving/:slug" element={<SavingPage />} />
                <Route path="/statistics" element={<StatisticPage />} />
                <Route path="/record" element={<RecordPage />} />
                <Route path="/chatting/:slug" element={<ChattingPage />} />
                <Route path="/setting" element={<SettingMainPage />} />
                <Route
                  path="/setting/income"
                  element={<SettingIncomeManagementPage />}
                />
                <Route
                  path="/setting/expense"
                  element={<SettingExpenseManagementPage />}
                />
                <Route
                  path="/setting/asset"
                  element={<SettingAssetManagementPage />}
                />
                <Route path="/search" element={<SearchPage />} />
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
