import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const theme = {
  main: "#020202",
  sec: "white",
  headerHeight: "150px",
  bg: "transparent",
  borderMain: "2px solid #020202",
  borderSec: "2px solid white",
  tsize: "14px",
  title: {
    tsize: "24px",
    tweight: "800"
  },
  subtitle: {
    tsize: "18px",
  },
  spadding: "10px 15px 0 15px",
  button: {
    spadding: "15px 20px 15px 22px",
    bpadding: "25px 30px 25px 32px",
  }
};

const HeaderSection = styled.header`
  position: fixed;
  background-color: ${props => props.theme.main};
  top: 0;
  left: 0;
  height: ${props => props.theme.headerHeight};
  width: 100%;
`
const Content = styled.div`
  background-color: ${props => props.theme.sec};
  font-size: ${props => props.theme.tsize};
  text-align: ${props => props.theme.alignLeft};
  color: ${props => props.theme.main};
  & h1{
    font-size: ${props => props.theme.title.tsize};
    font-weight: ${props => props.theme.title.tweight};
  }
  & h2{
    font-size: ${props => props.theme.title.tsize};
    font-weight: ${props => props.theme.title.tweight};
  }
  & .btn{
    border: ${props => props.theme.borderMain};
    padding: ${props => props.theme.button.spadding};
    border-radius: 5px;
    margin-top: 45px;
  }
  & .btn+.btn{
    margin-left: 15px;
  }
  & .btn.primary{
    color: ${props => props.theme.sec};
    border: ${props => props.theme.borderSec};
    background-color: ${props => props.theme.bg};
  }
  & .btn.bpadding{
    border: ${props => props.theme.border};
    padding: ${props => props.theme.button.bpadding};
  }
`
const LogoWrapper = styled.div`
  padding-left: 25px;
  flex-basis: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Button = function button(props){
  return(
    <button className="btn primary">
      {props.text}
    </button>
  );
};
const Headerbtn = function(){
  return(
    <div>
      <Button text="button 1"/>
      <Button text="button 2"/>
    </div>
  );
};
const BtnWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-around;
`
const Container = styled.div`
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: space-around;
`
const Header = function header(){
  return(
      <HeaderSection>
        <Container>
          <LogoWrapper>
           <img height="100%" src={logo}></img>
          </LogoWrapper>
          <BtnWrapper>
            <Headerbtn/>
          </BtnWrapper>
        </Container>
      </HeaderSection>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Content>
        <Header>
        </Header>
      </Content>
    </ThemeProvider>
  );
}

export default App;
