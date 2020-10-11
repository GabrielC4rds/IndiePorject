import React, { Component, render, useState, useContext, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Artigo from './pages/Artigo';
import Analise from './pages/Analise';
import PodcastPage from './pages/PodcastPage';
import { StoreProvider } from './Store';
import ArtigosPage from './pages/ArtigosPage';
import { UserContext, StoreContext } from './Store';
import { ConnectContent } from './ConfigContent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {


  const [all, setAll] = useState([]);
  const [content, setContent] = useState([]);
  const [User, setUser] = useContext(StoreContext);

  const Reload = () =>{
    document.location.reload(true);
  }

  useEffect(() => {
    async function FetchMyApi() {
      let url = await window.location.href.toString().replace('https://test2.d32kwg7sb7g878.amplifyapp.com/', '');
      let urlTitle = await url.replace("%20", " ");
      let items = await ConnectContent();
      let contentName = await items.find(x => x.fields.url == urlTitle);
      
      setContent(await contentName? await contentName.fields.type: null);
      window.onpopstate = function() {
        //blah blah blah
        urlTitle? window.location.href = `/${urlTitle}` : window.location.href = "/";
      }
      console.log("contentName", contentName);
      window.addEventListener('locationchange', function(){
        
        contentName? window.location.href = `/${urlTitle}` : window.location.href = "/";
    })
      // console.log("eu", contentName.fields.type);
      // let contentType = contentName.fields.type;
      //  setAll(contentType);
    }
    FetchMyApi();
    
  }, []);

  return (
    <>
    
      <StoreProvider>
        <Router >
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
            {/* <Route path='/:User'>
              <Podcast />
            </Route> 
              <Route path="/:User">
                <Artigo />
              </Route> 
                <Route path="/:User">
                  <Analise />
                </Route> 
                
                <Route path='/artigospage'>
                  <ArtigosPage />
                </Route>
                <Route path='/podcastpage'>
                  <PodcastPage />
                </Route> */}
                
              
            {
              content == "podcast" ?
                <Route conditional={content == "podcast"} path='/:User'>
                  <Podcast />
                </Route> :
                content == "artigo" ?
                  <Route conditional={content == "artigo"} path="/:User">
                    <Artigo />
                  </Route> :
                  content == "analise" ?
                    <Route conditional={content == "analise"} path="/:User">
                      <Analise />
                    </Route> :
                    <>
                    <Route path='/artigospage'>
                      <ArtigosPage />
                    </Route>
                    <Route path='/podcastpage'>
                      <PodcastPage />
                    </Route>
                    </>
            }
                    

          </Switch>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
