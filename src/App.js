import React from 'react';
import './App.css';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Artigos from './pages/Artigos';
import Artigo from './pages/Artigo';
import Analise from './pages/Analise';
import PodcastPage from './pages/PodcastPage';
import { StoreProvider } from './Store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/podcast">
            <Podcast />
          </Route>
          <Route path="/artigo">
            <Artigo/>
          </Route>
          <Route path="/analise">
            <Analise/>
          </Route>
          <Route path="/artigospage">
            <Artigos/>
          </Route>
          <Route path="/podcastpage">
            <PodcastPage/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
    </>
  );
}

export default App;
