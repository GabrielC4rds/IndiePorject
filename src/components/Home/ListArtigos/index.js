import React, { Component, useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ConnectContent } from '../../../ConfigContent';
import { UserContext, StoreContext } from '../../../Store';
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  width: 100%;
  height: 60vh;
  align-items: center;
  justify-content: space-between;
`;

const TitleDiv = styled.div`
  width: 90%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 36px;
    font-weight: 700;
    color: #56EE8D;
    margin: 18px 0;
  }
`;

const BorderTitle = styled.div`
  height: 4px;
  width: 100%;
  background: linear-gradient(270deg, #56EE8D 0%, #6D2AA6 100%);
`;

const ItemsDiv = styled.div`
  width: 90%;
  height: 40vh;
  margin-bottom: 6vh;
`;

const Item = styled.div`
  height: 40vh;
  width: 20vw !important;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover{
    cursor: pointer;
  }
`;

const ArrowLeft = styled.img`
  height: 30px;
  width: auto;
  position: absolute;
  top: 50%;
  left: -3vw;
  z-index: 2;

`;

const ArrowRight = styled.img`
  height: 30px;
  width: auto;
  position: absolute;
  right: -3vw;
  top: 50%;
  z-index: 2;
`;

const Dots = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: -50px;
`;

const LittleDots = styled.div`
  width: 13px;
  height: 13px;
  background: rgba(255,255,255,0.22);
  z-index: 3;
  border-radius: 50px;

`;

const ItemTop = styled.div`
  width: 100%;
  height: 60%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center 50%;
`;

const TextDiv = styled.div`
  width: 100%;
  height: 18%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleItem = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

const DescItem = styled.p`
  font-size: 12px;
  width: 95%;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowRight
      className={className}
      src="./icon/arrow.svg"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowLeft
      className={className}
      src="./icon/arrowLeft.svg"
      onClick={onClick}
    />
  );
}

export default function ListPodcasts() {

  const settings = {
    appendDots: dots => (
      <Dots
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </Dots>
    ),
    customPaging: (pagi, i) => (
      <LittleDots className="alt"></LittleDots>

    ),
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [all, setAll] = useState([]);
  const [User, setUser] = useContext(StoreContext);

  useEffect(() => {
    async function FetchMyApi() {

      let items = await ConnectContent();
      let allContent = await items.filter(x => x.fields.type == "artigo" || x.fields.type == "analise" );
      setAll(allContent.reverse());
    }
    FetchMyApi();
  }, []);


  return (
    <Content>
      <TitleDiv>
        <p>Artigos</p>
        <BorderTitle />
      </TitleDiv>
      <ItemsDiv>
        {console.log(all)}
        <Slider {...settings}>
          {
            all.map((res) => {
              return (
                <Link to={`/${res.fields.type}`}>
                  <Item onClick={() => setUser(res.fields.title)}>
                    {console.log(User)}
                    <ItemTop style={{ backgroundImage: `url(${res.fields.banner.fields.file.url})` }} />
                    <TextDiv>

                      <TitleItem>
                        {res.fields.artigoTitle? res.fields.artigoTitle:res.fields.postTitle}
                      </TitleItem>
                      <DescItem>
                        {res.fields.miniDesc}
                  </DescItem>
                    </TextDiv>
                  </Item>
                </Link>
              )
            })
          }
        </Slider>

      </ItemsDiv>
    </Content>
  );

}

