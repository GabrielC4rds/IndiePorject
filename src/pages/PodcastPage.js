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

const Item = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 50vh;
  margin-bottom: 5vh;
  margin-left: 2.2vw;
  margin-right: 2.2vw;
`;


const PostImage = styled.div`
  width: 100%;
  height: 70%;
  background: gray;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto 100% 
`;

const TextDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`;

const MiniDesc = styled.label`
  font-size: 20px;
  font-weight: 600;
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

      let items = await ConnectContent();
      let allContent = await items.filter(x => x.fields.type == "podcast");
      setAll(allContent.reverse());
    }
    FetchMyApi();
  }, []);

  return (
    <All>
      <Header />
      <ContentDiv>
        {console.log("eu", all)}
        <TitleDiv>Todos os podcasts</TitleDiv>
        <ItemDiv>
          {all.map((res) => {
            return (
              <Link to={`/${res.fields.type}`}>
              <Item onClick={() => setUser(res.fields.title)}>
                <PostImage style={{backgroundImage: `url(${res.fields.bannerImage.fields.file.url})`}}/>
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
              </Link>
            )
          })}
        </ItemDiv>
      </ContentDiv>
      <Footer />
    </All>
  );
}

export default PodcastPage;