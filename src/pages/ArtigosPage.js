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
  align-items: center;
  background: black;
 
`;


const Item = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  display: flex;
  width: 90vw;
  height: auto;
  margin-bottom: 5vh;
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

const TitleDiv = styled.div`
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10vh;
`;

const TopDiv = styled.div`
  width: 100%;
  height: 20vh;
`;

const PostImage = styled.div`
  width: 25%;
  height: 25vh;
  background: cyan;
  cursor: pointer;
`;

const TextDiv = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.label`
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`;

const DataText = styled.label`
  font-size: 15px;
  color: gray;
  cursor: pointer;
`;

function ArtigosPage() {

  const [all, setAll] = useState([]);
  const [User, setUser] = useContext(StoreContext);

  useEffect(() => {
    async function FetchMyApi() {

      let items = await ConnectContent();
      let allContent = await items.filter(x => x.fields.type == "artigo" || x.fields.type == "analise");
      setAll(allContent);
      console.log(allContent.reverse());
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
          <Link to={`/${res.fields.type}`}>
            <Item onClick={() => setUser(res.fields.title)}>
              <PostImage style={{ background: `url(${res.fields.bannerImage.fields.file.url}) no-repeat`, backgroundSize: "100% auto" }}></PostImage>
              <TextDiv>

                <Title>{res.fields.artigoTitle ? res.fields.artigoTitle : res.fields.postTitle}</Title>
                <DataText>{res.fields.dataSign}</DataText>
              </TextDiv>
            </Item>
          </Link>
        )
      })}
      <Footer />
    </All>
  );
}

export default ArtigosPage;