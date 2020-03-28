import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Upload from './components/Upload/Upload';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
        <Header />
        <Switch>
          <Route path="/upload" component={Upload} />
          <Route path="/" exact component={Layout} />
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
