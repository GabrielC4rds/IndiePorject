import React, { Component, useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

const All = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  
`;

const ContentDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemDiv = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  @media only screen and (max-width: 768px) {
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

const Item = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  display: flex;
  flex-direction: column;
  width: 18vw;
  height: auto;
  margin-bottom: 5vh;
  margin-left: 2vw;
  margin-right: 2vw;
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
  @media screen and (min-width: 600px) and (max-width: 1440px) {
    height: 82vh;
  }
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px;
    height: 70vh;
  }
`;


const PostImage = styled.div`
  width: 100%;
  height: 35vh;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto 100% 
`;

const TextDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`;

const MiniDesc = styled.label`
  font-size: 17px;
  font-weight: 600;
  margin: 20px 0;
  color: #fff;
  cursor: pointer;
`;

const DataText = styled.label`
  font-size: 15px;
  color: gray;
  cursor: pointer;
`;

function PodcastPage() {
  const [all, setAll] = useState([]);
  const [User, setUser] = useContext(StoreContext);

  useEffect(() => {
    async function FetchMyApi() {
      let url = await window.location.href.toString().replace('https://master.d3s7w3k063szjv.amplifyapp.com/', '');
      let urlTitle = await url.replace("%20", " ");
      let items = await ConnectContent();
      let allContent = await items.filter(x => x.fields.type == "podcast");
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
      <ContentDiv>
        <TitleDiv>Todos os podcasts</TitleDiv>
        <ItemDiv>
          {all.map((res) => {
            return (
              <a href={`/${res.fields.url}`}>
              <Item onClick={() => setUser(res.fields.title)} onClick={() => window.location.href=`/${res.fields.url}`}>
                
                <PostImage style={{backgroundImage: `url(${res.fields.coverArt.fields.file.url})`}}/>
                <TextDiv>
                  <Title>
                    {res.fields.podcastTag} {res.fields.podcastNumber} - {res.fields.podcastTitle} 
                  </Title>
                  <MiniDesc>
                    {res.fields.miniDesc}
                  </MiniDesc>
                  <DataText>{res.fields.dataSign}</DataText>
                </TextDiv>
              
              </Item>
              </a>
            )
          })}
        </ItemDiv>
      </ContentDiv>
      <Footer />
    </All>
  );
}

export default PodcastPage;