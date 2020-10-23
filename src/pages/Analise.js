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
  @media screen and (min-width: 600px) and (max-width: 1440px) {
    width: 60%;
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
  li{
    color: #000;
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


function Analise() {

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
      name = await window.location.href.toString().replace('https://indiecacao.com.br/','');
      let allContent = await items.filter(x => x.fields.url == name);
      // setence == name ?
      // setAll(allContent)
      // :
      // setAll(allContent);
      // console.log("all", all);
      setDisquisId(name);
      setDisquisUrl(nameUrl);
      let url = await window.location.href.toString().replace('https://indiecacao.com.br/', '');
      let urlTitle = await url.replace("%20", " ");
      let contentName = await items.find(x => x.fields.url == urlTitle);
      
      window.onpopstate = function() {
        //blah blah blah
        urlTitle? window.location.href = `/${urlTitle}` : window.location.href = "/";
       }
    //   window.addEventListener('locationchange', function(){
    //     console.log("mudou");
    //     contentName? window.location.href = `/${urlTitle}` : window.location.href = "/";
    // })
        
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
                  <p>{res.fields.analiseTag} </p>
                  <p>{res.fields.title} </p>
                  <h3>{res.fields.dataSign} </h3>
                </TitleDiv>
              </BackgroundDiv>
            </Banner>
            <AllPost>
              <label dangerouslySetInnerHTML={{ __html: res.fields.description }}>
              
              </label>
              <Divider />
              <p>{res.fields.intTitle}</p>
              <label dangerouslySetInnerHTML={{ __html: res.fields.intText1 }}></label>
              <Space />
              {res.fields.intText2 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.intText2 }}></label>
                </>
                : null}
                <SpaceImage />
              <ContentImage style={{ backgroundImage: `url(${res.fields.intImage2.fields.file.url})` }} />
              <SpaceImage />
              {res.fields.intText3 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.intText3 }}></label>
                </>
                : null}
                <SpaceImage />
              {res.fields.intImage3 ? <><ContentImage style={{ backgroundImage: `url(${res.fields.intImage3.fields.file.url})` }} />
                <SpaceImage /></>
                : null}
              {res.fields.intText4 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.intText4 }}></label>
                <Space /></>
                : null}
              <Divider />
              <p>{res.fields.desTitle}</p>
              {res.fields.desText1 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.desText1 }}></label>
                <Space /></>
                : null}
              {res.fields.desText2 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.desText2 }}></label>
                <SpaceImage /></>
                : null}
              {res.fields.desImage1 ? <><ContentImage style={{ backgroundImage: `url(${res.fields.desImage1.fields.file.url})` }} />
                <SpaceImage /></>
                : null}
              {res.fields.desText3 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.desText3 }}></label>
                <Space /></>
                : null}
              {res.fields.desText4 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.desText4 }}></label>
                <SpaceImage /></>
                : null}
              {res.fields.desImage2 ? <><ContentImage style={{ backgroundImage: `url(${res.fields.desImage2.fields.file.url})` }} />
                <SpaceImage /></>
                : null}
              {res.fields.desText5 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.desText5 }}></label>
                <Space /></>
                : null}
              {res.fields.desText6 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.desText6 }}></label>
                <SpaceImage /></>
                : null}
              {res.fields.desImage3 ? <><ContentImage style={{ backgroundImage: `url(${res.fields.desImage3.fields.file.url})` }} />
                <SpaceImage /></>
                : null}
              {res.fields.desText7 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.desText7 }}></label>
                <Space /></>
                : null}
              <Divider />
              <p>{res.fields.concTitle}</p>
              {res.fields.concText1 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.concText1 }}></label>
                <Space /></>
                : null}
              {res.fields.concText2 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.concText2 }}></label>
                <Space /></>
                : null}
              {res.fields.concText3 ? <><label dangerouslySetInnerHTML={{ __html: res.fields.concText3 }}></label>
                <SpaceImage /></>
                : null}
              {res.fields.concImage1 ? <><ContentImage style={{ backgroundImage: `url(${res.fields.concImage1.fields.file.url})` }} />
                <SpaceImage /></>
                : null}
              <p>Prós</p>
              <ul>
                {res.fields.pros.map((x) => {
                  return (

                    <li>{x}</li>
                  )
                })}
              </ul>
              <p>Contra</p>
              <ul>
                {res.fields.contra.map((x) => {
                  return (

                    <li>{x}</li>
                  )
                })}
              </ul>
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

export default Analise;