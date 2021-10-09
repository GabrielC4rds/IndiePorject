import styled from 'styled-components';
import React from 'react';

const Content = styled.div`
  display: flex;
  width: 407px;
  height: 400px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 16px;
  margin: 70px;
  position: relative;
  z-index: 0;
  p{
    font: normal normal 600 16px/22px Noto Sans;
    letter-spacing: 0px;
    color: #1C2126;
  }
`;

const CharPhoto = styled.div`
  width: 105px;
  height: 105px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 53px;
  position: absolute;
  top: -50px;
  background: gray;
  right: 37%;
  z-index: 1;
`;

const Infs = styled.div`
  width: 90%;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
  p{
    color: #1C2126;
    margin: 0;
  }
  div{
    width: 35%;
    height: 2px;
    background: #F2F4F8;
  }
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  input{
    border: none;
    width: 371px;
    height: 48px;
    background: #F2F4F8 0% 0% no-repeat padding-box;
    border-radius: 16px;
    padding: 0 20px;
    font: normal normal normal 15px/20px Noto Sans;
    color: #1C2126;
  }
`;

const Color = styled.div`
  width: 17px !important;
  height: 17px;
  background: #FFEA5A ;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
`;

const LifeHud = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const Life = styled.div`
  input{
    border: none;
    width: 173px;
    height: 48px;
    background: #F2F4F8 0% 0% no-repeat padding-box;
    border-radius: 16px;
    padding: 0 20px;
    font: normal normal normal 15px/20px Noto Sans;
  }
`;

const SaveButton = styled.div`
  width: 371px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1C2126 0% 0% no-repeat padding-box;
  border-radius: 100px;
  cursor: pointer;
  img{
    cursor: pointer;
  }
  p{
    font: normal normal 600 16px/22px Noto Sans;
    color: #fff;
    margin: 0 5px;
    cursor: pointer;
  }
`;

function CharInfs() {

  return (
    <Content>
      <CharPhoto />
      <Infs>
        <div />
        <p>Informações</p>
        <div />
      </Infs>
      <NameDiv>
        <div>
          <p>Nome</p>
          <Color />
        </div>
        <input type="text" placeholder="Insira o nome do personagem" id="name" name="name" />
      </NameDiv>
      <LifeHud>
        <Life>
          <p style={{ color: "#1C2126" }}>Vida atual</p>
          <input type="text" placeholder="0" id="name" name="name" />
        </Life>
        <Life >
          <p style={{ color: "#4525F2" }}>Vida Máxima</p>
          <input style={{ color: "#4525F2" }} type="text" placeholder="0" id="name" name="name" />
        </Life>
      </LifeHud>
      <SaveButton>
        <img src="../img/save.svg" />
        <p>Salvar</p>
      </SaveButton>
    </Content>
  );
}

export default CharInfs;