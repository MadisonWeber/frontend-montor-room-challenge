import React from 'react';
import './css/App.css';
import HeroLeft from './components/HeroLeft';
import HeroRight from './components/HeroRight';
import HeroBottomLeft from './components/HeroBottomLeft';
import HeroBottomRight from './components/HeroBottomRight';
import HeroBottomMiddle from './components/HeroBottomMiddle';



function App() {



  return (
    <div className="App">
        <HeroLeft />
        <HeroRight />
        <HeroBottomLeft />
        <HeroBottomMiddle />
        <HeroBottomRight />
    </div>
  );
}

export default App;
