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
  width: 40%;
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
    margin-top: 2vh;
    margin-bottom: 4vh;
    font-weight: 500;
    font-size: 28px;
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

const ContentImage = styled.div`
  width: 100%;
  height: 60vh;
  background-size: 100% auto ;
  background-repeat: no-repeat;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: gray;
  margin: 40px 0;
`;

const Space = styled.div`
  width: 100%;
  height: 3vh;
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

function Artigo() {

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
                  <p>{res.fields.title} </p>
                  <h3>{res.fields.dataSign} </h3>
                </TitleDiv>
              </BackgroundDiv>
            </Banner>
            <AllPost>
              <label>
                {res.fields.description}
              </label>
              <Divider/>
              <p>Introdução</p>
              <label>{res.fields.introducaoText1}</label>
              <Space/>
              {res.fields.introducaoText2?<><label>{res.fields.introducaoText2}</label>
              <Space/></>
              :null}
              <ContentImage style={{backgroundImage: `url(${res.fields.introducaoImage1.fields.file.url})`}}/>
              <Space/>
              {res.fields.introducaoText3?<><label>{res.fields.introducaoText3}</label>
              <Space/></>
              :null}
              {res.fields.introducaoImage2?<><ContentImage style={{backgroundImage: `url(${res.fields.introducaoImage2.fields.file.url})`}}/>
              <Space/></>
              :null}
              {res.fields.introducaoText4?<><label>{res.fields.introducaoText4}</label>
              <Space/></>
              :null}
              <Divider/>
              <p>Desenvolvimento</p>
              {res.fields.desenvolvimentoText1?<><label>{res.fields.desenvolvimentoText1}</label>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoText2?<><label>{res.fields.desenvolvimentoText2}</label>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoImage1?<><ContentImage style={{backgroundImage: `url(${res.fields.desenvolvimentoImage1.fields.file.url})`}}/>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoText3?<><label>{res.fields.desenvolvimentoText3}</label>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoText4?<><label>{res.fields.desenvolvimentoText4}</label>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoImage2?<><ContentImage style={{backgroundImage: `url(${res.fields.desenvolvimentoImage2.fields.file.url})`}}/>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoText5?<><label>{res.fields.desenvolvimentoText5}</label>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoText6?<><label>{res.fields.desenvolvimentoText6}</label>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoImage3?<><ContentImage style={{backgroundImage: `url(${res.fields.desenvolvimentoImage3.fields.file.url})`}}/>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoText7?<><label>{res.fields.desenvolvimentoText7}</label>
              <Space/></>
              :null}
              <Divider/>
              <p>Conclusão</p>
              {res.fields.conclusaoText1?<><label>{res.fields.conclusaoText1}</label>
              <Space/></>
              :null}
              {res.fields.conclusaoText2?<><label>{res.fields.conclusaoText2}</label>
              <Space/></>
              :null}
              {res.fields.conclusaoText4?<><label>{res.fields.conclusaoText4}</label>
              <Space/></>
              :null}
              {res.fields.conclusaoImage1?<><ContentImage style={{backgroundImage: `url(${res.fields.conclusaoImage1.fields.file.url})`}}/>
              <Space/></>
              :null}
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

export default Artigo;