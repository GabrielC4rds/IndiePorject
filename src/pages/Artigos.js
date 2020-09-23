import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  width: 90%;
  height: 25vh;
  margin-bottom: 5vh;
`;


const PostImage = styled.div`
  width: 25%;
  height: 100%;
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

function Artigos() {

  return (
    <All>
      <Header />
      <Item style={{ marginTop: "20vh" }}>
        <PostImage></PostImage>
        <TextDiv>

          <Title>Com Ghost of Tsushima, a Sucker Punch se despede do PlayStation 4 com um jogo de mundo aberto cansado e sem graça</Title>
          <DataText>14 de jul. de 2020 Heitor De Paola</DataText>
        </TextDiv>
      </Item>
      <Item>
        <PostImage></PostImage>
        <TextDiv>

          <Title>Streets of Rage 4 se mantém na zona segura da nostalgia - Análise</Title>
          <DataText>14 de jul. de 2020 Heitor De Paola</DataText>
        </TextDiv>
      </Item>
      <Footer/>
    </All>
  );
}

export default Artigos;