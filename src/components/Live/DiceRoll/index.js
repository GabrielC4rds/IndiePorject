import styled from 'styled-components';
import React, { useState} from 'react';

const Content = styled.div`
  align-items: center;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 16px;
  box-shadow: 0px 3px 10px #00000029;
  display: flex;
  flex-direction: column;
  height: 379px;
  justify-content: space-around;
  margin: 70px;
  position: relative;
  width: 407px;
  z-index: 0;
  p{
    font: normal normal 600 16px/22px Noto Sans;
    letter-spacing: 0px;
    color: #1C2126;
  }
`;

const Infs = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-top: 20px;
  width: 90%;
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
  display: flex;
  flex-direction: column;
  height: 15vh;
  justify-content: space-between;
  width: 90%;
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
  background: #F2F4F8 0% 0% no-repeat padding-box;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  height: 48px;
  align-items: center !important;
  justify-content: center !important;
  width: 108px;
  img{
    width: 21px;
  }
`;

const InputDiv = styled.input`
  background: #F2F4F8 0% 0% no-repeat padding-box;
  border-radius: 16px;
  border: none;
  height: 48px;
  text-align: center;
  width: 108px;
`;

const RollButton = styled.div`
  align-items: center !important;
  background: #4525F2 0% 0% no-repeat padding-box;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 48px;
  justify-content: center !important;
  width: 371px;
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

const Result = styled.div`
  display: flex;
  height: 23%;
  justify-content: space-between;
  width: 90%;
  img{
    width: 20px;
    height: auto;
    margin-top: 15px;
  }
`;

const BoxResult = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 85%;
  width: 27%;
  label{
    color: #99A1A9;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 7px;
  }
  div{
    background: #F2F4F8 0% 0% no-repeat padding-box;
    border-radius: 16px;
    border: none;
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;
    width: 100%;
    p{
      margin: 0;
    }
  }
`;


function DiceRoll() {
  var Signal = "plus";
  var signData
  const [numbData, setNumbData] = useState(0)
  const [d20, setd20] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [result, setResult] = useState(0);

  const changeDataSign = () => {
    let number = document.getElementById("number");
    let bonus= parseFloat(number.value);
    let diceNumber = Math.floor(Math.random()*20+1);
    signData = Math.sign(number.value)
    signData >= 0 ?
      Signal = "plus" :
      Signal = "minus"
      console.log(Signal)
      document.getElementById('sigImg').src = "../icon/" + Signal + ".svg"
      setd20(diceNumber)
      setBonus(Math.abs(bonus))
      setResult(diceNumber + bonus)
  }

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
          <ButtonDiv onClick={() => setNumbData(numbData - 1)}>
            <img src="../icon/minusBox.svg"></img>
          </ButtonDiv>
          <InputDiv value={numbData} id="data" placeholder="0" id="number"></InputDiv>
          <ButtonDiv onClick={() => setNumbData(numbData + 1)}>
            <img src="../icon/plusBox.svg" ></img>
          </ButtonDiv>
        </div>
        <RollButton onClick={() => changeDataSign()}><p>Rolar d20</p></RollButton>
        <SpaceLine />
      </Roll20>
      <Result>
        <BoxResult>
          <label>D20</label>
          <div><p>{d20}</p></div>
        </BoxResult>
        <img id="sigImg" src="../icon/plus.svg"/>
        <BoxResult>
          <label>Bônus</label>
          <div><p>{bonus}</p></div>
        </BoxResult>
        <img src="../icon/equal.svg" />
        <BoxResult>
          <label>Resultado</label>
          <div><p>{result}</p></div>
        </BoxResult>
      </Result>

    </Content>
  );
}

export default DiceRoll;