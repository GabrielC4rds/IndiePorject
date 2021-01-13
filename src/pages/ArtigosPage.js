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
import Pagination from 'reactjs-hooks-pagination';

const pageLimit = 5;
const initialState = {
  user: {},
  loading: true,
  error: ''
}

const Reducer = (state, action) => {
  switch (action.type) {
    case 'OnSuccess':
      return {
        loading: false,
        user: action.payload,
        error: ''
      }
    case 'OnFailure':
      return {
        loading: false,
        user: {},
        error: 'Something went wrong'
      }

    default:
      return state
  }
}

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
  width: 550px;
  height: 300px;
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

const PageButtons = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageButton = styled.div`
  width: 4vw;
  height: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;
  label{
    color: #fff;
    font-size: 15px;
    cursor: pointer;
  }
`;

function ArtigosPage() {

  const [all, setAll] = useState([]);
  const [User, setUser] = useContext(StoreContext);
  // const [state, dispatch] = useReducer(Reducer, initialState);
  const [offset, setOffset] = useState(0);
  const [totalRecords, setTotalRecords] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  var itemsPerPage = 2;

  async function handleNext() {
    if (offset < totalRecords) {
      var PreviousBtnStyle = await document.getElementById('previousBtn');
      if (offset > 0) {
        PreviousBtnStyle.style.display = "flex"
      } else {
        PreviousBtnStyle.style.display = "none";

      }
      setCurrentPage(offset);
      setOffset(offset + itemsPerPage);
    }
  }

  async function handlePrev() {
    if (offset > itemsPerPage) {
      var PreviousBtnStyle = await document.getElementById('previousBtn');
      setOffset(offset - itemsPerPage);
      setCurrentPage(offset - 2 * itemsPerPage);
      if (offset > 2 * itemsPerPage) {
        PreviousBtnStyle.style.display = "flex"
      } else {
        PreviousBtnStyle.style.display = "none";

      }
    }
  }
  useEffect(() => {
    async function FetchMyApi() {
      var PreviousBtnStyle = await document.getElementById('previousBtn');
      var NextBtnStyle = await document.getElementById('nextBtn');
      let url = await window.location.href.toString().replace('https://test2.d32kwg7sb7g878.amplifyapp.com/', '');
      let urlTitle = await url.replace("%20", " ");
      let items = await ConnectContent();
      let allContent = await items.filter(x => x.fields.type == "artigo" || x.fields.type == "analise");
      setAll(allContent.reverse());
      setCurrentPage(0);
      setTotalRecords(allContent.length)
      { console.log(allContent.length) }
      setOffset(itemsPerPage);
      window.onpopstate = function () {
        //blah blah blah
        urlTitle ? window.location.href = `/${urlTitle}` : window.location.href = "/";
      }
      PreviousBtnStyle.style.display = "none";
      NextBtnStyle.style.display = "none";
      if (itemsPerPage < allContent.length) {
        NextBtnStyle.style.display = "flex";
      } else {
        NextBtnStyle.style.display = "none";
      }
      //  if(offset > 2){
      //    PreviousBtnStyle.style.display= "block"
      //   }else{
      //     PreviousBtnStyle.style.display= "none";

      //  }
    }
    FetchMyApi();
  }, []);

  return (
    <All>
      

      <Header />
      <TopDiv />
      <TitleDiv>Últimos Artigos</TitleDiv>
      {all.slice(currentPage, offset).map((res) => {
        return (

          <Item onClick={() => window.location.href = `/${res.fields.url}`}>

            <PostImage onClick={() => setUser(res.fields.title)} style={{ backgroundImage: `url(${res.fields.bannerImage.fields.file.url})` }}></PostImage>
            <TextDiv>

              <Title onClick={() => setUser(res.fields.title)}>{res.fields.artigoTitle ? res.fields.artigoTitle : res.fields.postTitle}</Title>
              <DataText onClick={() => setUser(res.fields.title)}>{res.fields.dataSign}</DataText>
            </TextDiv>

          </Item>
        )
      })}
      <PageButtons>

        <PageButton id="previousBtn" onClick={() => handlePrev()}> 
        <label>PREVIOUS</label></PageButton>
        <PageButton id="nextBtn" onClick={() => handleNext()}>
          <label>NEXT</label>
        </PageButton>
      </PageButtons>
      <div style={{ width: "100%", height: "10vh" }} />
      <Footer />
    </All>
  );
}

export default ArtigosPage;