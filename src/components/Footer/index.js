import styled from 'styled-components';
import React from 'react';

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 30.5vh;
  background: linear-gradient(270deg, #56EE8D 0%, #6D2AA6 100%);
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 50vh;
  }
`;

const LeftDiv = styled.div`
  width: 40%;
  margin-left: 5vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  img{
    width: 209px;
    height: 189px;
  }
  div:nth-child(1){
    display: flex;
    height: 60%;
  }
  label{
    @media screen and (min-width: 600px) and (max-width: 1440px) {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 95%;
    img{
      width: 150px;
      height: auto;
      display: none;
    }
    p{
      display: none;
    }
  }
`;

const RightDiv = styled.div`
  width: 20%;
  margin-right: 5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    display: none;
  }
  label{
    font-weight: 600;
    font-size: 18px;
    color: #fff;
    text-shadow: 0px 3px 6px #00000029;
  }
  div{
    width: 35%;
    height: 20%;
    display: flex;
    img{
      font-size: 3px;
      :hover{
        cursor: pointer;
        margin-bottom: 7px;
        animation: moveIcon 0.5s forwards;
      }

    @keyframes moveIcon {
        from { margin-bottom: 0;}
        to { margin-bottom: 7px;}
    }
    }
  }
      @media only screen and (max-width: 768px) {
        width: 95%;
        justify-content: start;
        align-items: start;
        height: 60%;
        margin-left: 5px;
        div{
          height: 40%;
        }
        p{

          display: block;
          color: #fff;
          margin-top: 25px;
          text-align: right;
          font-size: 15px;
        }
        label{
          display: none;
        }
      }
    `;

const Top = styled.div`
  width: 100%;
  height: 55%;
  border-bottom: 2px solid #fff;
  display: flex;
  flex-direction: row;
  div{
    display: flex;
    flex-direction: column;
    margin-right: 5vw;
    p{
      margin-bottom: 1vh;
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      
      a{
        color: #fff;
      }
     
      @media screen and (min-width: 600px) and (max-width: 1440px) {
        font-size: 15px;
      }
    }
    label{
      margin-bottom: 1vh;
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      
      a{
        color: #fff;
      }
      :hover{
        cursor: pointer;
        font-weight: bold;
      }
      @media screen and (min-width: 600px) and (max-width: 1440px) {
        font-size: 15px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    border-bottom: none;
  }
`;

function Footer() {

  return (
    <Content id="Contato">
      <LeftDiv>
        <img src="./icon/Logo-Clara2.png" />
        <div style={{ width: "auto", justifyContent: "space-between", display: "flex", flexDirection: "column" }}>
          <Top>
            <div>
            <a href={`/artigospage`}>

              <label onClick={() => window.location.href = "/artigospage"}>ARTIGOS</label>
            </a>
            <a href={`/podcastpage`}>

              <label onClick={() => window.location.href = "/podcastpage"}>PODCAST</label>
            </a>
            </div>
            <div>
              <p>FALE CONOSCO</p>
              <label><a class="mailto" href="mailto:contato@indiecacao.com.br">INDIECACAO.COM.BR</a></label>
            </div>
          </Top>
          <p>
            © 2020 Indiecação Conteúdo Digital LTDA Todos os direitos reservados
          </p>
        </div>
      </LeftDiv>
      <RightDiv>
        <label>Nos acompanhe</label>
        <div>
        <a style={{height: "auto"}} href={`https://www.instagram.com/indiecacaogames/`} target="_blank">
          <img src="./icon/instagram-brands.svg" />
        </a> 
        <a href={`https://open.spotify.com/show/2uWVpGhAqmd40iPPD45Q2S`} target="_blank">

          <img src="./icon/spotify-brands.svg" />
        </a>
        <a href={`https://twitter.com/indiecacaogames`} target="_blank">
          <img src="./icon/twitter-brands.svg" />
        </a>
        </div>
        <p>
            © 2020 Indiecação Conteúdo Digital LTDA Todos os direitos reservados
          </p>
      </RightDiv>

    </Content>
  );
}

export default Footer;