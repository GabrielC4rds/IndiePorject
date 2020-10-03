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
  useParams,
  BrowserRouter
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
  height: auto;
  align-items: center;
  justify-content: space-between;
`;

const TitleDiv = styled.div`
  width: 90%;
  height: 13vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 36px;
    font-weight: 700;
    color: #56EE8D;
    margin: 18px 0;
    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 1440px) {

    height: 15vh;
  }
  @media only screen and (max-width: 768px) {
    align-items: start;
  }
`;

const BannerTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  label{
    text-transform: uppercase;
    font-weight: bold;
    position: absolute;
    font-size: 50px;
    cursor: pointer;
    color: rgba(0,0,0,0);
    @media only screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  :hover{
    
    label{
      text-shadow: 0 5px 10px rgba(0,0,0,0.1);
      mix-blend-mode: soft-light;
      animation: labelTransition 0.5s forwards;
    }
    

    @keyframes labelTransition {
      from { color: rgba(0,0,0,0)}
      to { color: rgba(255,255,255,0.7)}
    }
    animation: bannerTransition 0.5s forwards;
      }

    @keyframes bannerTransition {
        from { background-color: none }
        to { background-color: rgba(0,0,0,0.7)}
    }
    
`;

const BorderTitle = styled.div`
  height: 4px;
  width: 100%;
  background: linear-gradient(270deg, #56EE8D 0%, #6D2AA6 100%);
`;

const ItemsDiv = styled.div`
  width: 90%;
  height: auto;
  margin-bottom: 10vh;
 
`;

const Item = styled.div`
  height: 40vh;
  width: 20vw !important;
  margin: 0 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover{
    cursor: pointer;
  }

  @media screen and (min-width: 600px) and (max-width: 1440px) {
    height: 55vh;
  }
  @media only screen and (max-width: 768px) {
    width: 40vw !important;
    margin: 0 10px;
    justify-content: start;
    height: auto;
  }
`;

const ArrowLeft = styled.img`
  height: 30px;
  width: auto;
  position: absolute;
  top: 50%;
  left: -3vw;
  z-index: 2;
  @media only screen and (max-width: 768px) {
    height: 20px;
    top: -8vh;
    left: 75vw;
  }

`;

const ArrowRight = styled.img`
  height: 30px;
  width: auto;
  position: absolute;
  right: -3vw;
  top: 50%;
  z-index: 2;
  @media only screen and (max-width: 768px) {
    height: 20px;
    right: -1vw;
    top: -8vh;
  }
`;

const Dots = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: -50px;
  @media only screen and (max-width: 768px) {
    margin-left: -10px;
    bottom: -40px;
  }
`;

const LittleDots = styled.div`
  width: 13px;
  height: 13px;
  background: rgba(255,255,255,0.22);
  z-index: 3;
  border-radius: 50px;
  @media only screen and (max-width: 768px) {
    margin-left: -10px;
  }
`;

const ItemTop = styled.div`
  width: 100%;
  height: 50%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center 50%;
  @media screen and (min-width: 600px) and (max-width: 1440px) {
    height: 43%;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    height: 10vh;
  }
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
    prevArrow: <SamplePrevArrow />,
    transformEnabled: false,
    // mobileFirst:true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }

    ]
  };

  const [all, setAll] = useState([]);
  const [User, setUser] = useContext(StoreContext);

  useEffect(() => {
    async function FetchMyApi() {

      let items = await ConnectContent();
      let allContent = await items.filter(x => x.fields.type == "podcast");
      setAll(allContent.reverse());
      console.log("aqui imbecil",allContent)

      
    }
    FetchMyApi();
  }, []);


  return (
    <Content>
      <TitleDiv>
        <p>PODCAST</p>
        <BorderTitle />
      </TitleDiv>
      <ItemsDiv>
        <Slider  {...settings}>
          {
            all.slice(0, 12).map((res) => {
              return (
                  <Item onClick={() => setUser(res.fields.title)} onClick={() => window.location.href=`/${res.fields.url}`}>
                    
                    <ItemTop style={{ backgroundImage: `url(${res.fields.banner.fields.file.url})` }}>
                    <BannerTop>
                       <label>{res.fields.type}</label>
                      </BannerTop>
                    </ItemTop>
                    <TextDiv>

                      <TitleItem>
                        {res.fields.podcastTag} {res.fields.podcastNumber} - {res.fields.podcastTitle}
                      </TitleItem>
                      <DescItem>
                        {res.fields.miniDesc}
                  </DescItem>
                    </TextDiv>
                  </Item>
              )
            })
          }
        </Slider>

      </ItemsDiv>
    </Content>
  );

}

