import React from 'react';
import Header from './layout/Header/Header';
import MenuList from './components/Menu/MenuList/MenuList';
import iphones from './mocks/electronics-store.json';
import Footer from './layout/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="w-container mx-auto mb-24">
        <MenuList iphones={iphones} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
