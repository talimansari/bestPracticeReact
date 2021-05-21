import React from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';
import {Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppHeader from './components/common/AppHeader';
import AppFooter from './components/common/AppFooter';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { useEffect } from "react";
const { Header, Footer } = Layout;
function App() {
  return (
    
    <Layout className="mainLayout">
    <HeadreWrap >
      <AppHeader/>
    </HeadreWrap>
    <MainContent>
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/about' component={About}/>
     <Route exact path='/contact' component={Contact}/>
     <Redirect to="/" />
     </Switch>
    </MainContent>
    <Footer><AppFooter/></Footer>
  </Layout>
  
  );
}
export default App;

const HeadreWrap = styled(Header)`
  height:auto;
  background:unset;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;
const MainContent = styled.main` 
   padding:50px;
 
`
