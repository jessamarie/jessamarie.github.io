import React from 'react';
import './App.scss';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Body from './Body/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
