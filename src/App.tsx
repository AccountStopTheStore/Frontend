import { Routes, Route, useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
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
import { ProtectedRoute } from "./hooks/Routes/ProtectedRoute";
import UpdatePasswordLogoutPage from "./pages/UpdatePasswordLogoutPage";
import UpdatePasswordLoginPage from "./pages/UpdatePasswordLoginPage";

function App() {
  const isLoginPage = window.location.pathname === "/";
  const isSignUpPage = window.location.pathname === "/signup";
  const isPasswordReset = window.location.pathname === "/passwordreset";
  const isRecordAccountBook = window.location.pathname === "/recordAccountBook";
  const isCreateChallengeGroups =
    window.location.pathname === "/challenge/create";

  return (
    <Layout>
      {/* COMPLETED: NavigationItems 컴포넌트를 UI에 따라 렌더링 */}
      {useRoutes([
        // 사용자 전용 페이지가 아닌 페이지 컴포넌트
        { path: "/", element: <LoginPage /> },
        { path: "/signup", element: <SignUpPage /> },
        { path: "/resetpassword", element: <LoginPage /> },
        {
          path: "/auth/reset-password/:slug/t/:slug",
          element: <UpdatePasswordLogoutPage />,
        },
        {
          path: "/*",
          element: (
            <Routes>
              <Route element={<ProtectedRoute />}>
                {/* NavigationItems가 있는 컴포넌트 페이지 */}
                <Route path="/account" element={<AccountPage />} />
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
                {/* NavigationItems가 없는 컴포넌트 페이지 */}
                <Route
                  path="/setting/asset"
                  element={<SettingAssetManagementPage />}
                />
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
                <Route
                  path="/recordAccountBook/recurring"
                  element={<RecurringPage />}
                  caseSensitive
                />
                <Route
                  path="/challenge/create"
                  element={<CreateChallengeGroupPage />}
                />
                <Route
                  path="/challenge/update/:slug"
                  element={<UpdateChallengeGroupPage />}
                />
                <Route
                  path="/setting/asset/create"
                  element={<CreateAssetManagementPage />}
                />
                <Route
                  path="/updatepassword"
                  element={<UpdatePasswordLoginPage />}
                />
              </Route>
            </Routes>
          ),
        },
      ])}
      {!isLoginPage &&
        !isSignUpPage &&
        !isPasswordReset &&
        !isRecordAccountBook &&
        !isCreateChallengeGroups && <NavigationItems />}
    </Layout>
  );
}

export default App;
