import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { Component, useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ConnectContent } from '../ConfigContent';
import { UserContext, StoreContext } from '../Store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Icon from '@ant-design/icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider from "react-slick";

const All = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  display: flex;
  flex-direction: column;
  background: black;
`;


const Item = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  display: flex;
  height: auto;
  width: auto;
  margin-bottom: 5vh;
  margin-left: 5vw;
  cursor: normal;
  a{
    display: flex;
  }
  
`;

const TitleDiv = styled.div`
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10vh;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const TopDiv = styled.div`
  width: 100%;
  height: 20vh;
`;

const PostImage = styled.div`
  width: 25vw;
  height: 25vh;
  cursor: pointer;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center 100%;
  @media only screen and (max-width: 768px) {
    width: 30vw;
    height: 8vh;
  }
`;

const TextDiv = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  :hover{
    label:nth-child(1){
  
    
      animation: colorLabel 0.3s forwards;
    }
  }
  
    @keyframes colorLabel {
      from { color: #fff;}
      to { color: #56EE8D;}
    }
  }
`;

const Title = styled.label`
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const DataText = styled.label`
  font-size: 15px;
  color: gray;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

function ArtigosPage() {

  const [all, setAll] = useState([]);
  const [User, setUser] = useContext(StoreContext);

  useEffect(() => {
    async function FetchMyApi() {
      let url = await window.location.href.toString().replace('https://master.d3s7w3k063szjv.amplifyapp.com/', '');
      let urlTitle = await url.replaceAll("%20", " ");
      let items = await ConnectContent();
      let allContent = await items.filter(x => x.fields.type == "artigo" || x.fields.type == "analise");
      setAll(allContent.reverse());

       window.onpopstate = function() {
        //blah blah blah
        urlTitle? window.location.href = `/${urlTitle}` : window.location.href = "/";
       }
    }
    FetchMyApi();
  }, []);

  return (
    <All>
      <Header />
      <TopDiv />
      <TitleDiv>Últimos Artigos</TitleDiv>
      {all.map((res) => {
        return (

          <Item onClick={() => window.location.href=`/${res.fields.url}`}>
            
              <PostImage  onClick={() => setUser(res.fields.title)} style={{ backgroundImage: `url(${res.fields.bannerImage.fields.file.url})` }}></PostImage>
              <TextDiv>

                <Title onClick={() => setUser(res.fields.title)}>{res.fields.artigoTitle ? res.fields.artigoTitle : res.fields.postTitle}</Title>
                <DataText onClick={() => setUser(res.fields.title)}>{res.fields.dataSign}</DataText>
              </TextDiv>
            
          </Item>
        )
      })}
      <div style={{ width: "100%", height: "10vh" }} />
      <Footer />
    </All>
  );
}

export default ArtigosPage;