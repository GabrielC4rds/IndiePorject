import styled from 'styled-components';
import React from 'react';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 42.5vh;
  background: url("./img/miniBanner.png") no-repeat;
  background-size:  auto 100%;
  background-attachment: fixed;
  align-items: center;
  justify-content: space-between;
  p{
      font-weight: 400;
      color: #fff;
      font-size: 23px;
      text-align: center; 
  }
  div:nth-child(2){
    width: 100%;
    height: 45vh;
    display:flex;
    align-items: center;
    justify-content: center;
    background:rgba(0,0,0,0.4);
    letter-spacing: 0px;
    line-height: 1.2;
    
    div{
        width: 47%;
        height: 73%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5vh;
        z-index: 4;
        
    }
}
`;

const BorderTop = styled.div`
  height: 3px;
  width: 100%;
  background: linear-gradient(270deg, #56EE8D 0%, #6D2AA6 100%);
  align-self: Top;
`;

const TitleText = styled.label`
    font-size: 36px;
    font-weight: bold;
    color: #fff;
`;

function MiniBanner() {

    return (
        <Content>
            <BorderTop />
            <div>
                <div>
                    <TitleText>QUEM SOMOS?</TitleText>
                    <p>
                        O "Indiecação" nasceu da vontade de amigos apaixonados
                        pelos jogos de se<br />unir para escrever,
                        falar e se expressar sobre os jogos independentes e
                    sua<br /> maneira única de comunicar essa mídia.<br />
                    Se esforçando para tanto indicar novos jogos,
                    quanto para discutir suas<br /> experiências em um formato "de jogador para jogador".
                </p>
                    <TitleText style={{ fontStyle: "italic" }}>- AQUI OS INDIES SÃO O DESTAQUE -</TitleText>
                </div>
            </div>
        </Content>
    );
}

export default MiniBanner;