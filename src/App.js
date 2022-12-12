import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicLayout from "./layout/BasicLayout";
// import RemitterPage from "./pages/DMT/Remitter/RemitterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./pages/DMT/Authentication/Authentication";
import RemitterInfoPage from "./pages/DMT/Remitter/RemitterInfo/RemitterInfoPage";
import SendOtpPage from "./pages/DMT/Remitter/SendOTP/SendOtpPage";
import ResendOtpPage from "./pages/DMT/Remitter/ResendOTP/ResendOtpPage";
import VerifyOtpPage from "./pages/DMT/Remitter/VerifyOTP/VerifyOtpPage";
import RemitterBalancePage from "./pages/DMT/Remitter/RemitterBalance/RemitterBalancePage";
import BeneficiaryCreatePage from "./pages/DMT/Beneficiary/BeneficiaryCreate/BeneficiaryCreatePage";
import BeneficiaryListPage from "./pages/DMT/Beneficiary/BeneficiaryList/BeneficiaryListPage";
import BeneficiaryDeletePage from "./pages/DMT/Beneficiary/BeneficiaryDelete/BeneficiaryDeletePage";
import SendMoneyPage from "./pages/DMT/SendMoney/SendMoney/SendMoneyPage";
import TransactionRequeryPage from "./pages/DMT/TransactionRequery/TransactionRequeryPage";
import Introduction from "./pages/DMT/Pan Verification/Introduction"
import Pan_verification from "./pages/DMT/Pan Verification/Pan_verification"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <BasicLayout>
                <Authentication />
              </BasicLayout>
            }
          />

          <Route
            path="/remitter"
            element={
              <BasicLayout>
                <RemitterInfoPage />
              </BasicLayout>
            }
          />
          <Route
            path="/remitter-sendotp"
            element={
              <BasicLayout>
                <SendOtpPage />
              </BasicLayout>
            }
          />
          <Route
            path="/remitter-resendotp"
            element={
              <BasicLayout>
                <ResendOtpPage />
              </BasicLayout>
            }
          />
          <Route
            path="/remitter-verifyotp"
            element={
              <BasicLayout>
                <VerifyOtpPage />
              </BasicLayout>
            }
          />
          <Route
            path="/remitter-getbalance"
            element={
              <BasicLayout>
                <RemitterBalancePage />
              </BasicLayout>
            }
          />

          <Route
            path="/beneficiary-create"
            element={
              <BasicLayout>
                <BeneficiaryCreatePage />
              </BasicLayout>
            }
          />
          <Route
            path="/beneficiary-list"
            element={
              <BasicLayout>
                <BeneficiaryListPage />
              </BasicLayout>
            }
          />
          <Route
            path="/beneficiary-delete"
            element={
              <BasicLayout>
                <BeneficiaryDeletePage />
              </BasicLayout>
            }
          />

          <Route
            path="/send-money"
            element={
              <BasicLayout>
                <SendMoneyPage />
              </BasicLayout>
            }
          />
          <Route
            path="/*"
            element={
              <BasicLayout>
                <TransactionRequeryPage />
              </BasicLayout>
            }
          />

        <Route
            path="/pan-introduction"
            element={
              <BasicLayout>
                <Introduction />
              </BasicLayout>
            }
          />
          <Route
            path="/pan-verification"
            element={
              <BasicLayout>
                <Pan_verification />
              </BasicLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
