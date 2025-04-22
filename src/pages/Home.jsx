import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LateralHeader from '../components/LateralHeader/LateralHeader';
import Dashboard from '../components/Dashboard/Dashboard';

function Home() {
  return (
    <div>
      <Header />
      
      <div style={{ height: '80px' }}></div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '1270px', display: 'flex' }}>
          <Dashboard />
          <LateralHeader />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
