import React from "react";
import styled,{css} from "styled-components";
import logo from "../../assets/images/best.png";
import { Menu } from "antd";
import {NavLink} from 'react-router-dom';
const AppHeader = () => {
  return (
    <div className="container">
      <HeadreWrap>
        <div className="logo">
          <a href="#">
            <AppLogo src={logo}/>
          </a>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={["/"]}>
          <Menu.Item key="/"><NavLink exact to="/">Home</NavLink></Menu.Item>
          <Menu.Item key="/about"><NavLink exact to="/about">About Us</NavLink></Menu.Item>
          <Menu.Item key="/contact"><NavLink exact to="/contact">Contact Us</NavLink></Menu.Item>
        </Menu>
      </HeadreWrap>
    </div>
  );
};
const HeadreWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: cemter;
`;
const AppLogo = styled.img`
  max-width:100%;
  height:75px;
`;
export default AppHeader;
