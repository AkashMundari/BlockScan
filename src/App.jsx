import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import AccountPage from "./pages/AccountPage";
import BlockInfoPage from "./pages/BlockInfoPage";
import TransactionDetailsPage from "./pages/TransactionDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/account/:account" element={<AccountPage />} />
      <Route path="/block/:block" element={<BlockInfoPage />} />
      <Route
        path="/transaction/:transaction"
        element={<TransactionDetailsPage />}
      />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
