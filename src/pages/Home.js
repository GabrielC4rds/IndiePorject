import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import MiniBanner from '../components/Home/MiniBanner';
import List from '../components/Home/ListArtigos';
import ListPodcasts from '../components/Home/ListPodcasts';
import {Helmet} from "react-helmet";

const All = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  `;
  
function Home() {
 
  return (
    <All>
       <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
      <Header/>
      <Banner/>
      <List/>
      <MiniBanner/>
      <ListPodcasts/>
      <Footer/>
    </All>
  );
}

export default Home;