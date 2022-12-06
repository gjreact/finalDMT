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
import { Navbar } from "react-bootstrap";

import BasicLayoutCopy from "./layout/BasicLayoutCopy";
import BeneficiaryCreatePage from "./pages/DMT/Beneficiary/BeneficiaryCreate/BeneficiaryCreatePage";
import BeneficiaryListPage from "./pages/DMT/Beneficiary/BeneficiaryList/BeneficiaryListPage";
import BeneficiaryDeletePage from "./pages/DMT/Beneficiary/BeneficiaryDelete/BeneficiaryDeletePage";
import SendMoneyPage from "./pages/DMT/SendMoney/SendMoney/SendMoneyPage";
import TransactionRequeryPage from "./pages/DMT/TransactionRequery/TransactionRequeryPage";

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
            path="/transaction-requery"
            element={
              <BasicLayout>
                <TransactionRequeryPage />
              </BasicLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
