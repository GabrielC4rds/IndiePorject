import styled from 'styled-components';
import React from 'react';

const Content = styled.div`
  display: flex;
  background: green;
  width: 407px;
  height: 229px;
  border: 1px solid #707070;
  position: relative;
  margin: 20px 40px;
  align-items: flex-end;
  justify-content: space-between;
`;

const Dice = styled.div`
  width: 60px;
  height: 100px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -5px;
  top: -20px;
  p{
    font: normal normal 800 23px/28px Montserrat;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-shadow: 0px 3px 10px #00000057;
    opacity: 1;
    margin: 0;
    position: absolute;
    top: 25px;
    right: 8px;
  }
`;

const Char = styled.div`
  width: 36%;
  height: auto;
  background: cyan;
  display: flex;
  margin: 0 5px;
  align-items: flex-end;
  position: relative;
  img{
    widht: 105px;
    height: 105px;
  }
  p{
    font: normal normal 800 20px/24px Montserrat;
    color: #FFFFFF;
    text-shadow: 0px 3px 10px #00000057;
    margin: 0;
    position: absolute;
    right: 0;
    top: 50%;
  }
`;

const Life = styled.div`
  width: 30%;
  height: auto;
  background: yellow;
  margin: 10px;
  display: flex;
  align-items: center;
  p{
    font: normal normal 800 24px/29px Montserrat;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-shadow: 0px 3px 10px #00000057;
    margin: 0;
  }
`;



function Hud() {

  return (
    <Content>
      <Dice style={{backgroundImage: 'url(/img/D20-purple.svg)'}}>
        <p>20</p>
      </Dice>
      <Char>
        <img src="../img/Ryuko.png"/>
        <p>Ryuki</p>
      </Char>
      <Life>
        <img src="../img/heart.svg"/>
        <p>50/50</p>
      </Life>
    </Content>
  );
}

export default Hud;