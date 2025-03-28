import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { MainLayout } from "../layout/MainLayout";
import { LoginDashboard } from "../component/LoginDashboard";
import Dashboard from "../page/Dashboard";
import AddZone from "../page/AddZone";
import AddMember from "../page/AddMember";
import AddCategory from "../page/Accounting/AddCategory";
import AddSubCategory from "../page/Accounting/AddSubCategory";
import AddLedger from "../page/Accounting/AddLedger";
import ViewLedger from "../page/Accounting/ViewLedger";
import LedgerReport from "../page/Report/LedgerReport";
import AddPaymentMethod from "../page/AddPaymentMethod";
import PersonalInformation from "../page/PersonalInformation";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginDashboard />,
      },
      {
        path: "dashboard",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "zone",
        element: <MainLayout />,
        children: [
          {
            index: true,
            path: "add-zone",
            element: <AddZone />,
          },
        ],
      },
      {
        path: "member",
        element: <MainLayout />,
        children: [
          {
            index: true,
            path: "add-member",
            element: <AddMember />,
          },
        ],
      },
      {
        path: "accounting",
        element: <MainLayout />,
        children: [
          {
            index: true,
            path: "add-category",
            element: <AddCategory />,
          },
          {
            path: "add-subcategory",
            element: <AddSubCategory />,
          },
          {
            path: "add-ledger",
            element: <AddLedger />,
          },
          {
            path: "view-ledger",
            element: <ViewLedger />,
          },
        ],
      },
      {
        path: "report",
        element: <MainLayout />,
        children: [
          {
            index: true,
            path: "ledger-report",
            element: <LedgerReport />,
          },
          /*  {
            path: "member-report",
            element: <MemberReport />,
          },
          {
            path: "anniversary-report",
            element: <AnniversaryReport />,
          },*/
        ],
      },
      {
        path: "config",
        element: <MainLayout />,
        children: [
          {
            index: true,
            path: "add-payment-method",
            element: <AddPaymentMethod />,
          },
        ],
      },
      // Check The personal info page
      {
        path: "personal-info",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <PersonalInformation />,
          },
        ],
      },
    ],
  },
]);
export default AppRouter;
