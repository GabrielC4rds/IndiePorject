import styled from 'styled-components';
import React from 'react';

const Content = styled.div`
  display: flex;
  width: 407px;
  height: 379px;
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

const Infs = styled.div`
  width: 90%;
  display: flex;
  margin: 20px 0;
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

const Roll20 = styled.div`
  width: 90%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div{
    display: flex;
    justify-content: space-between;
  }
  p{
    color: #1C2126;
    margin: 0;
    font: normal normal 600 16px/22px Noto Sans;
  }
`;

const ButtonDiv = styled.div`
  width: 108px;
  height: 48px;
  background: #F2F4F8 0% 0% no-repeat padding-box;
  border-radius: 16px;
`;

const InputDiv = styled.input`
  width: 108px;
  height: 48px;
  background: #F2F4F8 0% 0% no-repeat padding-box;
  border-radius: 16px;
  border: none;
  text-align: center;
`;

const RollButton = styled.div`
  width: 371px;
  height: 48px;
  background: #4525F2 0% 0% no-repeat padding-box;
  border-radius: 100px;
  display: flex;
  p{
    font: normal normal 600 16px/22px Noto Sans;
    color: #FFFFFF;
    margin: 0;
  }
`;

const SpaceLine = styled.div`
  background: #E9E8EB;
  height: 2px;
  width: 100%;
`;

function DiceRoll() {

  return (
    <Content>
      <Infs>
        <div />
        <p>Dados</p>
        <div />
      </Infs>
      <Roll20>
        <p>Bônus</p>
        <div>
          <ButtonDiv>
          </ButtonDiv>
          <InputDiv placeholder="0"></InputDiv>
          <ButtonDiv></ButtonDiv>
        </div>
        <RollButton><p>Rolar d20</p></RollButton>
        <SpaceLine />
      </Roll20>
      {/* <Result></Result> */}

    </Content>
  );
}

export default DiceRoll;