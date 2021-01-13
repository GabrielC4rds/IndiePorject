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
  @media only screen and (max-width: 768px) {
    height: auto;
    background-size: auto 100%;
  }
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
  @media only screen and (max-width: 768px) {
    width: 90%;
    margin-top: 10vh;
    margin-bottom: 10vh;

    br{
      display: none;
    }
    p{
      font-size: 30px;
      line-height: 6vh;
    }
    h3{
      font-size: 15px;
    }
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
    line-height: 30px;
    margin-bottom: 20px;
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
  @media only screen and (max-width: 768px) {
    width: 90%;
    p{
      font-size: 18px;
    }
    label{
      font-size: 18px;
    }
    a{
      font-size: 15px;
      margin-bottom 5px;
    }
    h3{
      font-size: 18px;
    }
    li{
      font-size: 18px;
    }
  }
`;

const ContentImage = styled.div`
  width: 100%;
  height: 600px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 768px) {
    height: 25vh;
  }
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

const SpaceImage = styled.div`
  width: 100%;
  height: 8vh;
  
`;

const DisqusDiv = styled.div`
  margin-top: 5vh;
`;

const BottomDivider = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    width: 45%;
    height: 1.5px;
  }
  img{
    width: 50px;
    margin-right: 4px;
  }
`;

const AuthorDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PhotoDiv = styled.div`
  width: 180px;
  height: 170px;
  background: pink;
  border-radius: 50%;
  border: 5px solid #6D2AA6;
  background-size: 110%;
  background-position: center;
`;

const AuthorTxt = styled.div`
  width: 85%;
  height: 100%;
  margin-left: 30px;
  line-height: 0 !important;
`;

const AuthorTop = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CircleDiv = styled.div`
  width: 60px !important;
  height: 60px !important;
  background: linear-gradient(210deg, #56EE8D 0%, #6D2AA6 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RevTab = styled.div`
  width: 15vw;
  height: 100%;
  background: #6D2AA6;
  border-radius: 10px;
  color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 15px;
  font-weight: 600;
  font-style: italic;
`;

const AuthorTitle = styled.label`
  font-size: 25px;
  color: #6D2AA6;
  font-weight: 700 !important;
  margin: 0 !important;

`;

const AuthorDesc = styled.label`
  font-size: 17px !important;
  margin: 0 !important;
  color: #000;
  margin-left: 10px;
  line-height: 1.5 !important;
`;

const linkSpotify = 'https://open.spotify.com/embed-podcast/episode/58haVRLxRGvDOMoT7reNGB';

function Artigo() {

  const [User, setUser] = useContext(StoreContext)

  const [all, setAll] = useState([]);
  const [disqusUrl, setDisquisUrl] = useState([]);
  const [disqusId, setDisquisId] = useState([]);
  let name;
  let nameUrl;
  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let setence = items[0].fields.title.toString();
<<<<<<< Updated upstream
      name = await window.location.href.toString().replace('https://test2.d32kwg7sb7g878.amplifyapp.com/','');
=======
      name = await window.location.href.toString().replace('https://test2.d32kwg7sb7g878.amplifyapp.com/', '');
>>>>>>> Stashed changes
      let allContent = await items.filter(x => x.fields.url == name);
      console.log("user", User);
      setDisquisId(name);
      setDisquisUrl(nameUrl);
      let url = await window.location.href.toString().replace('https://test2.d32kwg7sb7g878.amplifyapp.com/', '');
      let urlTitle = await url.replace("%20", " ");
      let contentName = await items.find(x => x.fields.url == urlTitle);
      
      window.onpopstate = function() {
        //blah blah blah
        urlTitle? window.location.href = `/${urlTitle}` : window.location.href = "/";
       }
      window.addEventListener('locationchange', function(){
        console.log("mudou");
        contentName? window.location.href = `/${urlTitle}` : window.location.href = "/";
    })
        
      setAll(allContent)
    }
    FetchMyApi();
  }, []);

  const disqusShortname = "indiecacao"
  const disqusConfig = {
    url: disqusUrl,
    identifier: disqusId,
    title: name
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
              <p>{res.fields.intTitle}</p>
              <label dangerouslySetInnerHTML={{ __html: res.fields.introducaoText1 }} ></label>
              <Space/>
              {res.fields.introducaoText2?<><label dangerouslySetInnerHTML={{ __html: res.fields.introducaoText2 }}></label>
              <SpaceImage/></>
              :null}
              <ContentImage style={{backgroundImage: `url(${res.fields.introducaoImage1.fields.file.url})`}}/>
              <SpaceImage/>
              {res.fields.introducaoText3?<><label dangerouslySetInnerHTML={{ __html: res.fields.introducaoText3 }}></label>
              <SpaceImage/></>
              :null}
              {res.fields.introducaoImage2?<><ContentImage style={{backgroundImage: `url(${res.fields.introducaoImage2.fields.file.url})`}}/>
              <SpaceImage/></>
              :null}
              {res.fields.introducaoText4?<><label dangerouslySetInnerHTML={{ __html: res.fields.introducaoText4 }}></label>
              <Space/></>
              :null}
              <Divider/>
              <p>{res.fields.desTitle}</p>
              {res.fields.desenvolvimentoText1?<><label dangerouslySetInnerHTML={{ __html: res.fields.desenvolvimentoText1 }}></label>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoText2?<><label dangerouslySetInnerHTML={{ __html: res.fields.desenvolvimentoText2 }}></label>
              <SpaceImage/></>
              :null}
              {res.fields.desenvolvimentoImage1?<><ContentImage style={{backgroundImage: `url(${res.fields.desenvolvimentoImage1.fields.file.url})`}}/>
              <SpaceImage/></>
              :null}
              {res.fields.desenvolvimentoText3?<><label dangerouslySetInnerHTML={{ __html: res.fields.desenvolvimentoText3 }}></label>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoText4?<><label dangerouslySetInnerHTML={{ __html: res.fields.desenvolvimentoText4 }}></label>
              <SpaceImage/></>
              :null}
              {res.fields.desenvolvimentoImage2?<><ContentImage style={{backgroundImage: `url(${res.fields.desenvolvimentoImage2.fields.file.url})`}}/>
              <SpaceImage/></>
              :null}
              {res.fields.desenvolvimentoText5?<><label dangerouslySetInnerHTML={{ __html: res.fields.desenvolvimentoText5 }}></label>
              <Space/></>
              :null}
              {res.fields.desenvolvimentoText6?<><label dangerouslySetInnerHTML={{ __html: res.fields.desenvolvimentoText6 }}></label>
              <SpaceImage/></>
              :null}
              {res.fields.desenvolvimentoImage3?<><ContentImage style={{backgroundImage: `url(${res.fields.desenvolvimentoImage3.fields.file.url})`}}/>
              <SpaceImage/></>
              :null}
              {res.fields.desenvolvimentoText7?<><label dangerouslySetInnerHTML={{ __html: res.fields.desenvolvimentoText7 }}></label>
              <Space/></>
              :null}
              <Divider/>
              <p>{res.fields.concTitle}</p>
              {res.fields.conclusaoText1?<><label dangerouslySetInnerHTML={{ __html: res.fields.conclusaoText1 }}></label>
              <Space/></>
              :null}
              {res.fields.conclusaoText2?<><label dangerouslySetInnerHTML={{ __html: res.fields.conclusaoText2 }}></label>
              <Space/></>
              :null}
              {res.fields.conclusaoText4?<><label dangerouslySetInnerHTML={{ __html: res.fields.conclusaoText3 }}></label>
              </>
              :null}
              <SpaceImage/>
              {res.fields.conclusaoImage1?<><ContentImage style={{backgroundImage: `url(${res.fields.conclusaoImage1.fields.file.url})`}}/>
              <SpaceImage/></>
              :null}
              <BottomDivider>
                <div style={{background: "#6D2AA6"}}/>
                 <CircleDiv>

                  <img src="./icon/miniLogo.png"/>
                 </CircleDiv>
                <div style={{background: "#56EE8D"}}/>
              </BottomDivider>
              <AuthorDiv>
                <PhotoDiv style={{backgroundImage: " url('./icon/moebus.png')"}}></PhotoDiv>
                <AuthorTxt>
                  <AuthorTop>

                    <AuthorTitle>Matheus "MobiusNero" Moebus</AuthorTitle>
                    <RevTab>Revisão: Natasha Harumi</RevTab>
                  </AuthorTop>
                  <AuthorDesc>Estudante de Física e viciado em videogames desde pequeno. Entrou no Indiecação para mostrar 
                    aos outros sua paixão (e fazê-los se apaixonarem) pelos nossos queridos indies.</AuthorDesc>
                </AuthorTxt>
              </AuthorDiv>
              <Divider/>
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