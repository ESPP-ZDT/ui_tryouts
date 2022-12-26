import React, { useState } from "react";
import { Button, Nav, NavItem, NavLink, Navbar, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: #333;
  color: #fff;
  transition: all 0.3s;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  display: flex;
  align-items: flex-start;
`;

const StyledToggleButton = styled(Button)`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  display: ${(props) => (props.isOpen ? "none" : "block")};
`;

const StyledCloseButton = styled(Button)`
  position: absolute;
  right: -120px;
  top: 10px;
  z-index: 1;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <StyledToggleButton onClick={toggle} isOpen={isOpen}>
        <FontAwesomeIcon icon={faBars} />
      </StyledToggleButton>

      <StyledSidebar isOpen={isOpen}>
        <Navbar>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <StyledCloseButton onClick={toggle} isOpen={isOpen}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </StyledCloseButton>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
