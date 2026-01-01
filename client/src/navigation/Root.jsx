import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import ReportBtn from "../components/report/ReportBtn.jsx";

const Root = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Outlet context={{ searchValue, setSearchValue }} />
      <ReportBtn />
    </>
  );
};

export default Root;
