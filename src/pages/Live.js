import React, { Component, useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ConnectContent } from '../ConfigContent';
import { UserContext, StoreContext } from '../Store';
import Hud from '../components/Live/Hud';
import CharInfs from '../components/Live/CharInfs';
import DiceRoll from '../components/Live/DiceRoll';

const All = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  display: flex;
  align-items: center;
  background: black;
  
`;

const DisplayHud = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;

`;



function Live() {
  const [all, setAll] = useState([]);
  const [User, setUser] = useContext(StoreContext);

  useEffect(() => {
    async function FetchMyApi() {
      let url = await window.location.href.toString().replace('https://master.d3s7w3k063szjv.amplifyapp.com/', '');
      let urlTitle = await url.replace("%20", " ");
      let items = await ConnectContent();
      let allContent = await items.filter(x => x.fields.type == "podcast");
      setAll(allContent.reverse());


      window.onpopstate = function () {
        //blah blah blah
        urlTitle ? window.location.href = `/${urlTitle}` : window.location.href = "/";
      }
    }
    FetchMyApi();
  }, []);

  return (
    <All>
      <DisplayHud>

        <Hud />
      </DisplayHud>
      <CharInfs/>
      <DiceRoll/>
    </All>
  );
}

export default Live;