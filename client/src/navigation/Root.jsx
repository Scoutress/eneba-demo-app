import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import ReportBtn from "../components/report/ReportBtn.jsx";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ReportBtn />
    </>
  );
};

export default Root;
