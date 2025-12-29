import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import List from "../pages/listPage/List.jsx";
import Routes from "./Routes.jsx";
import Root from "./Root.jsx";

const Router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.listPage.link,
        element: <List />,
      },
    ],
  },
]);

export default Router;
