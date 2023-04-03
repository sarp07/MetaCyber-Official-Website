import React from 'react';

import { Navbar, Footer, Slider, About, TopButton, NftItemArea, Team, VideoArea, RoadMap, Documents, TradeNft } from './components';

// All css files
import './assets/css/animate.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/flaticon.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/jquery-ui.css';
import './assets/css/magnific-popup.css';
import './assets/css/main.css';
import './assets/css/odometer.css';
import './assets/css/slick.css';
import './assets/css/spacing.css';
import './assets/css/swiper-bundle.css';
import './assets/css/tg-cursor.css';

const App = () => {

  return (
    <div>
      <header>
        <TopButton />
        <Navbar />
      </header>
      <main className='w-full'>
        <Slider />
        <NftItemArea />
        <About />
        <Team />
        <VideoArea />
        <RoadMap />
        <Documents />
        <Footer />
      </main>
    </div>    
  )
}

export default App
