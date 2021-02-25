import styled from 'styled-components';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter
} from "react-router-dom";

const Content = styled.div`
  display: flex;
  left: 0;
  width: 100%;
  top: 0;
  height: auto;
  flex-direction: column;
  box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.05), 0 3px 20px 0 rgba(0, 0, 0, 0.05), 0 8px 10px -5px rgba(0, 0, 0, 0.0);
  position: sticky;
  z-index: 7;
  @media only screen and (max-width: 768px) {
    height: 100px;
    width: 100%;
  }
`;


const MenuButton = styled.div`
display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 50px;
    height: 100%;
    align-items: center;
    border: none;
    background: none;
    img{
      width: 20px;
  }
}
`;

const MenuMobile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    background: black;
    width: 100vw;
    height: 500vh;
    z-index: 8;
    position: absolute;
    left: -100vw;
    justify-content: start;
    overflow: hidden;
    position: fixed;
    div:nth-child(2){
      margin-top: 50px;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      label{
        color: #fff;
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
  
  .active {
    animation: menuTransition 0.5s forwards;
  }

  @keyframes menuRevertTransition {
    from { left: 0}
    to { left: -100vw}
  }

  @keyframes menuTransition {
    from { left: -100vw}
    to { left: 0}
  }

  
  
  
`;

const CloseButton = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    position: absolute;
    right: 0;
    top: 10px;
    img{
      width: 20px;
    }
  }
`;

const All = styled.div`
  width: 100%;
  height: 11vh;
  background: black;
  display: flex;
  justify-content: space-between;
`;

const BorderBottom = styled.div`
  height: 3px;
  width: 100%;
  background: linear-gradient(270deg, #56EE8D 0%, #6D2AA6 100%);
  align-self: bottom;
`;

const Logo = styled.div`
  width: 12%;
  height: 100%;
  margin-left: 2vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    width: 74px;
    @media only screen and (max-width: 768px) {
      width: 65px;
    }
  }
  label{
    color: #fff;
    letter-spacing: 2.3px;
    font-size: 20px;
    font-width: 154px;
    font-height: 23px;;
    font-weight: 300;
    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  :hover{
    img{
      animation: makeBig 0.3s forwards;
    }
    label{
      cursor: pointer;
      
    }
    cursor: pointer;
  }
  @keyframes makeBig {
    from { width: 74px;}
    to { width: 80px;}

    @media only screen and (max-width: 768px) {
      width: auto;
    }
}
`;

const ItemsDiv = styled.div`
  width: auto;
  height: 100%;
  margin-right: 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  label{
    color: #fff;
    letter-spacing: 0px;
    font-weight: 600;
    font-size: 20px;
    margin: 0 20px;
    :hover{
      color: #56EE8D;
      cursor: pointer;
      animation: colorLabel 0.3s forwards;
    }
   
  @keyframes colorLabel {
      from { color: #fff;}
      to { color: #56EE8D;}
  }
    }
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const Search = styled.div`
  width: 45%;
  height: 100%;
`;

function Header() {
  const revertHandleMove = () => {
    document.getElementById("backMobile").style.animation="menuRevertTransition 0.5s forwards"
  }
  const handleMove = () => {
      document.getElementById("backMobile").style.animation="menuTransition 0.5s forwards"
  }

  const ScrollDown = () => {
    document.body.scrollTo(0,document.body.scrollHeight);
  }

  const ScrollDownM = () => {
    revertHandleMove();
    document.body.scrollTo(0,document.body.scrollHeight);
    
  }


  return (
    <>
      <MenuMobile id="backMobile">
        <CloseButton onClick={() => revertHandleMove()}>
          <img src="./icon/close.svg"/>
        </CloseButton>
          <div>
          
            <label onClick={() => window.location.href = "/artigospage"}>ARTIGOS</label>
          
        <label onClick={() => window.location.href = "/podcastpage"}>PODCAST</label>
            <label onClick={() => ScrollDownM()}>CONTATO</label>
          </div>
      </MenuMobile>
    <Content>
      <All>
        <a href={`/`}>
        <Logo onClick={() => window.location.href = "/"}>
          <img src="./icon/Logo-Clara2.png"></img>
          <label>INDIECAÇÃO</label>
        </Logo>
         </a>
        <MenuButton onClick={() => handleMove()}>
          <img src="./icon/menu.svg"/>
        </MenuButton>
        <ItemsDiv>
        <a href={`/artigospage`}> 
          <label onClick={() => window.location.href = "/artigospage"}>ARTIGOS</label>
        </a>
        <a href={`/podcastpage`}> 
          <label onClick={() => window.location.href = "/podcastpage"}>PODCAST</label>
        </a>
        <a> 

          <label  onClick={() => ScrollDown()}>CONTATO</label>
        </a>
          {/* <Search /> */}
        </ItemsDiv>
        
      </All>
      <BorderBottom />
    </Content>
    </>
  );
}

export default Header;