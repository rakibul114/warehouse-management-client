import React from 'react';
import Banner from '../Banner/Banner';
import BrandSlider from '../BrandSlider/BrandSlider';
import PerfumeTrend from '../PerfumeTrend/PerfumeTrend';
import Products from '../Products/Products';
import Support from '../Support/Support';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Products></Products>        
        <BrandSlider></BrandSlider>
        <PerfumeTrend></PerfumeTrend>
        <Support></Support>
      </div>
    );
};

export default Home;