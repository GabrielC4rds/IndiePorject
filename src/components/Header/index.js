import styled from 'styled-components';
import React from 'react';

const Content = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.05), 0 3px 20px 0 rgba(0, 0, 0, 0.05), 0 8px 10px -5px rgba(0, 0, 0, 0.0);
  position: fixed;
  z-index: 5;
  
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
  }
  label{
    color: #fff;
    letter-spacing: 2.3px;
    font-size: 20px;
    font-width: 154px;
    font-height: 23px;;
    font-weight: 300;
  }
  :hover{
    img{
      animation: makeBig 0.3s forwards;
    }
    label{
      cursor: pointer;
      // font-size: 25px;
    }
    cursor: pointer;
  }
  @keyframes makeBig {
    from { width: 74px;}
    to { width: 80px;}
}
`;

const ItemsDiv = styled.div`
  width: 20%;
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
  }
`;

const Search = styled.div`
  width: 45%;
  height: 100%;
`;

function Header() {

  return (
    <Content>

      <All>
        <Logo onClick={() => window.location.href = "/"}>
          <img src="./icon/Logo-Clara.png"></img>
          <label>INDIECAÇÃO</label>
        </Logo>
        <ItemsDiv>
          <label onClick={() => window.location.href = "/artigospage"}>ARTIGOS</label>
          <label onClick={() => window.location.href = "/podcastpage"}>PODCAST</label>
          <label onClick={() => window.location.href = "#Contato"}>CONTATO</label>
          {/* <Search /> */}
        </ItemsDiv>
      </All>
      <BorderBottom />
    </Content>
  );
}

export default Header;