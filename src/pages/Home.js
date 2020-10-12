import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import MiniBanner from '../components/Home/MiniBanner';
import List from '../components/Home/ListArtigos';
import ListPodcasts from '../components/Home/ListPodcasts';

const All = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  width: window.innerWidth;
  height: window.innerHeight; 
  `;
  
function Home() {
 
  return (
    <All>
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