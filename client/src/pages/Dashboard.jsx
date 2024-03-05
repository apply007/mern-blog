import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";

export default function DashBoard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
   if (tabFromUrl) {
    setTab(tabFromUrl)
   }


  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* side bar */}
      <div className="md:w-56">
        <DashSideBar />
      </div>
      {/* profile */}
      <div className="">{tab === "profile" && <DashProfile />}</div>
    </div>
  );
}
