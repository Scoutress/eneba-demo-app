import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import HomePage from "../pages/homePage/HomePage.jsx";
import DemoPage from "../pages/demoPage/DemoPage.jsx";
import Routes from "./Routes.jsx";
import Root from "./Root.jsx";

const Router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.listPage.link,
        element: <HomePage />,
      },
      {
        path: Routes.demoPage.link,
        element: <DemoPage />,
      },
    ],
  },
]);

export default Router;
