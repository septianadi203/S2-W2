import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Robin from '../images/robin.jpg';
import ProfileImg from '../images/user2.png';
import CalenderImg from "../images/calendar.png";
import BillImg from "../images/bill.png";
import LogoutImg from "../images/logout1.png";
import '../style/style.css';

import { BsPerson, BsCalendar3 } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

import Dropdown from "react-bootstrap/Dropdown";


function DropDown(props) {
  const navigate = useNavigate();
  return (
    <>
      <Dropdown align="end" style={{ color: "white", border: "white" }} id="dropdown-basic-button" title="Dropdown button">
        <DropdownToggle className="p-0 rounded-circle" style={{ width: "50px", height: "50px" }} variant="black">
          <Image roundedCircle className="si" src={Robin} />
        </DropdownToggle>
        <DropdownMenu>
          <Dropdown.Item className="dropDownNav">
            <BsPerson />
            <span style={{ color: "black" }}> Profile</span>
          </Dropdown.Item>
          <Dropdown.Item className="dropDownNav">
            <RiNewspaperLine />
            <span style={{ color: "black" }}> My Booking</span>
          </Dropdown.Item>
          <Dropdown.Item className="dropDownNav">
            <BsCalendar3 />
            <span style={{ color: "black" }}> History</span>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={() => {
              navigate("/");
              localStorage.removeItem("UserSignIn");
              props.setUserSignIn({
                ...props.userSignIn,
                isLogin: false,
              });
            }}
            className="dropDownNav"
          >
            <FiLogOut />
            <span style={{ color: "black" }}> Logout </span>
          </Dropdown.Item>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default DropDown;