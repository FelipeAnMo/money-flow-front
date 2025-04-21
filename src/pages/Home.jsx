import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LateralHeader from '../components/LateralHeader/LateralHeader';

function Home() {
  return (
    <div>
      <Header />
      
      <div style={{ height: '80px' }}></div>
      
      <LateralHeader />
      <Footer />
    </div>
  );
}

export default Home;
