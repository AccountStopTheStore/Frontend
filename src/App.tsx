import { Routes, Route } from "react-router-dom";
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
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route
          path="/auth/reset-password/:slug/t/:slug"
          element={<UpdatePasswordLogoutPage />}
        />
        <Route element={<ProtectedRoute />}>
          {/* NavigateItems바가 있는 컴포넌트 */}
          <Route element={<NavigationItems />}>
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
            <Route path="/challenge/:slug" element={<ChallengeDetailPage />} />
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
          </Route>
          {/* NavigateItems바가 없는 컴포넌트 */}
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
          <Route path="/updatepassword" element={<UpdatePasswordLoginPage />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
