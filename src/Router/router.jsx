import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home";
import Form1 from "../Pages/Form1";
import Registration from "../Pages/Registration";
import Layout from "../components/Layout/Layout";
import Review from "../Pages/Review";
import Login from "../Pages/Login";
import Layout1 from "../components/Layout/Layout1";
import Request from "../Pages/Request";
import PackagesPage from "../Pages/PackagesPage";
import Reviews from "../components/Review/Reviews";
import Reviewws from "../components/Request/Reviewws";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/form" element={<Form1 />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/reg/review" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/admin" element={<Layout1 />}>
        <Route path="/admin/request" element={<Request />} />
        <Route path="/admin/request/review12" element={<Reviewws />} />
        <Route path="/admin/packages" element={<PackagesPage />} />
      </Route>
    </>
  )
);
