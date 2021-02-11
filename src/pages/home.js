import React, { useState } from "react";
import SideNavBar from "./sideNavBar";
import PathBar from "./pathBar";
import EventsPage from "./eventsPage";
import RegistrationsPage from "./registrationsPage";

import "../css/home.scss";

export default function Home() {
  const [page, setPage] = useState("1");

  const updatePage = (page) => {
    setPage(page);
  };

  const renderPage = () => {
    if (page === "1") {
      return (
        <div className="eventContent">
          <EventsPage />
        </div>
      );
    }
    if (page === "2") {
      return (
        <div className="registrationContent">
          <RegistrationsPage />
        </div>
      );
    }

    if (page === "3") {
      return <div>This is material page</div>;
    }
  };

  return (
    <>
      <div className="homeContainer">
        <div className="row">
          <div className="col-md-1" id="sidebar-wrapper">
            <SideNavBar />
          </div>
          <div className="col-md-11" id="page-content-wrapper">
            <div className="pathBar">
              <PathBar handleButtonClick={(data) => updatePage(data)} />
            </div>

            {renderPage()}
          </div>
        </div>
      </div>
    </>
  );
}
