import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCommentAlt,
  faBriefcase,
  faUsers,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import "../css/navbar.css";

const SideNavBar = (props) => {
  const handleNavItem = (e) => {
    console.log("asdfdsa", e);
  };

  return (
    <>
      <Nav
        className=" d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item className="active" onClick={(e) => handleNavItem(e)}>
          <FontAwesomeIcon icon={faCaretRight} />
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faHome} />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="nonActive">
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faCommentAlt} />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="nonActive">
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faBriefcase} />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="nonActive">
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faUsers} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
const Sidebar = withRouter(SideNavBar);
export default Sidebar;
