import React, { Component, useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ConnectContent } from '../../ConfigContent';
import { UserContext, StoreContext } from '../../Store';
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
  height: 90vh;
  margin-top: 11vh;
  
  h3{
    height: 90vh;
    :hover{
      cursor: pointer;
    }
  }
`;

const ArrowLeft = styled.img`
width: auto;
height: 6vh;
position: absolute;
left: 20px;
z-index: 2;
top: 40%;
`;

const ArrowRight = styled.img`
  width: auto;
  height: 6vh;
  position: absolute;
  right: 0;
  top: 40%;
`;

const InfDiv = styled.div`
  height: 30%;
  width: 45vw;
  border-radius: 0 130px 130px 0;
  background: rgba(0,0,0,0.85);
  position: absolute;
  bottom: 7%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  label{
    font-size: 18px;
    font-weight: 600;
    width: 50%;
    color: #fff;
    text-align: right;
    position: relative;
    margin-right: 2vw;
    margin-right: 7vw;
    line-height: 1.2;
    @media screen and (min-width: 600px) and (max-width: 1440px) {
      font-size: 15px;
    }
  }
`;

const Title = styled.p`
  font-size: 46px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
  position: relative;
  margin-right: 7vw;
  @media screen and (min-width: 600px) and (max-width: 1440px) {
    font-size: 40px;
  }
`;

const Dots = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 3vh;
  z-index: 2;
`;

const LittleDots = styled.div`
  width: 13px;
  height: 13px;
  background: rgba(0,0,0,0.22);
  z-index: 3;
  border-radius: 50px;

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

export default function Banner() {




  const settings = {
    appendDots: dots => (
      <Dots
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </Dots>
    ),
    customPaging: (pagi, i) => (
      <LittleDots></LittleDots>

    ),

    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [all, setAll] = useState([]);
  const [User, setUser] = useContext(StoreContext);

  useEffect(() => {
    async function FetchMyApi() {

      let items = await ConnectContent();
      let allContent = await items.filter(x => x.fields.type == "artigo" || x.fields.type == "analise" || x.fields.type == "podcast");
      setAll(allContent.reverse());
    }
    FetchMyApi();
  }, []);

  return (
    <Content>
      <Slider {...settings}>
        {
          all.slice(0, 3).map((res) => {
            return (
              <Link to={`/${res.fields.type}`}>
                <div onClick={() => setUser(res.fields.title)}>
                  <h3 style={{ background: `url(${res.fields.bannerImage.fields.file.url}) no-repeat`, backgroundSize: "100% auto" }}>
                    <InfDiv>
                      <Title>{res.fields.postTitle}</Title>
                      <label>
                        {res.fields.miniDesc}
                      </label>
                    </InfDiv>
                  </h3>
                </div>
              </Link>
            )
          })
        }

      </Slider>

    </Content>
  );
}

