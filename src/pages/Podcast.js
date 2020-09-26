import styled from 'styled-components';
import React, { Component, render, useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DiscussionEmbed } from 'disqus-react';
import Disqus from "disqus-react";
import { StoreContext } from '../Store'
import { ConnectContent } from '../ConfigContent';

const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  height: auto;
  font-family: 'Montserrat', sans-serif !important;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center 50%;
  width: 100%;
  height: 75vh;
  margin-top: 11vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundDiv = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
  justify-content: center;
 background: rgba(0,0,0,0.7);
`;

const TitleDiv = styled.div`
  width: 50%;
  height: 55%;
  color: #fff;
  display: flex;
  flex-direction: column;
  line-height: 60px;
  align-items: center;
  justify-content: space-between;
  p{
    font-weight: 700;
    font-size: 46px;
    text-align: center;

  }
  h3{
    font-size: 18px;
    font-weight: regular;
    color: #fff;
  }
  
`;

const AllPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  line-height: 35px;
  margin: 50px 0;
  height: auto;
  background: #fff;
  color: #000;
  p{
    margin-top: 5vh;
    margin-bottom: 2vh;
    font-weight: 600;
    font-size: 22px;
  }
  label{
    font-weight: 500;
    font-size: 22px;
  }
  a{
    color: #316CE1;
    font-size: 22px;
    font-weight: 500;
  }
  h3{
    font-size: 22px;
    font-weight: 500;
  }
`;

const LinksDiv = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  
`;

const DividerRight = styled.div`
  height: 100%;
  margin: 0 10px;
  width: 1px;
  background: #316CE1;
`;

const IframeDiv = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  label{
    font-weight: 600;
  }
  align-items: center;
  iframe{
    width: 35vw;
    h2{
      font-weight: 600;
    }
  }
`;

const DisqusDiv = styled.div`
  margin-top: 5vh;
`;

const DownInfs = styled.div`
  height: auto;
  width: 100%;
  border-top: 2px solid #707070;
  margin-top: 20px;
  p{
    width: 60%;
    font-size: 22px;
    font-weight: 500;
    span{
      font-weight: 600;
    }
  }
`;

const linkSpotify = 'https://open.spotify.com/embed-podcast/episode/58haVRLxRGvDOMoT7reNGB';

function Podcast() {

  const [User, setUser] = useContext(StoreContext)

  const [all, setAll] = useState([]);

  useEffect(() => {
    async function FetchMyApi() {
      if (!User) {
        window.location.href = "/";
      } else {
        let items = await ConnectContent();
        let allContent = await items.filter(x => x.fields.title == User);
        setAll(allContent);

      }
    }
    FetchMyApi();
  }, []);

  const disqusShortname = "indiecacao"
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "//indiecacao.disqus.com/count.js",
    title: "Title of Your Article"
  }
  return (
    <All>
      {all.map((res) => {
        return (
          <>
            <Header />
            <Banner style={{ backgroundImage: `url(${res.fields.banner.fields.file.url})` }}>
              <BackgroundDiv>

                <TitleDiv>
                  <p>{res.fields.podcastTag} <br /> {res.fields.podcastNumber} <br /> {res.fields.podcastTitle}  </p>
                  <h3>{res.fields.dataSign} </h3>
                </TitleDiv>
              </BackgroundDiv>
            </Banner>
            <AllPost>
              <label>
                {res.fields.descriptionText}
              </label>
              <IframeDiv>
                <label>Preview</label>
                <iframe src={res.fields.podacstLink} width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </IframeDiv>
              <p>Nos acompanhe:</p>
              <LinksDiv>
                <a>Spotify</a>
                <DividerRight/>
                <a>Google Podcast</a>
                <DividerRight/>
                <a>Anchor</a>
              </LinksDiv>
              <p>Participantes:</p>
              {res.fields.participantes.map((x) => {
                return (

                  <a style={{ marginBottom: "20px" }}>{x}</a>
                )
              })}
              <p>Tópicos:</p>
              {res.fields.topicos.map((x) => {
                return (

                  <h3>{x}</h3>
                )
              })}
              <DownInfs>
                <p>Tem sugestões ou algo de
                interessante para compartilhar?
            Envie um e-mail para: <span>contato@indiecacao.com.br</span>
                </p>
              </DownInfs>
              <DisqusDiv>
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </DisqusDiv>
            </AllPost>
            <Footer />
          </>
        )
      })}
    </All>
  );
}

export default Podcast;