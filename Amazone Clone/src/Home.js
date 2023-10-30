import React from 'react'
import './Home.css';
import Product from './Product';
import homeimg from "./img/poster.jpg"
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={homeimg} alt="" />

        <div className="home-row">
          <Product
            id="12322"
            title="The Lean Startup:: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91cwOSS4sDL.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="6372"
            title="Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation, & Xbox -1-Year Rescue Service (STGX2000400)"
            price={56.99}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81pAOJFcsFS._SL1500_.jpg"
            rating={4}
          />

          {/* product */}
        </div>
        <div className="home-row">
          <Product
            id="558"
            title='Kindle Paperwhite (8 GB) – Now with a 6.8\\" display and adjustable warm light-Black'
            price={133.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/02/kindle/merch/2022/campaign/xcat/acc/FS-ml-UK.jpg"
          />
          <Product
            id="5548"
            title="OnePlus 11 5G | 16GB RAM+256GB | Titan Black | US Factory Unlocked Android Smartphone | 5000 mAh battery | 80W Fast charging | Hasselblad Camera | 120Hz Fluid Display | 4nm Processor"
            price={799}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61amb0CfMGL._AC_SS450_.jpg"
          />
          <Product
            id="5128"
            title="TWIN BIRDS Tailored Cut & Classic Fit Super Stretchable Viscose Elasthane Fabric Ankle Length Leggings for Women"
            price={42}
            rating={3}
            image="https://m.media-amazon.com/images/I/51MZ7Kc0saL._UL1500_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="6472"
            title="GUNING S2 Active Noise Cancelling Wireless Earbuds, Immersive Sound and Clear Call,in Ear Detection,Build in Mic,36H Playtime with Metal Smart Charging Case,IPX5 Waterproof Sport Black Headphones"
            price={43.99}
            image="https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61niLJAt+IL._AC_UL600_SR600,600_.jpg"
            rating={5}
          />
          <Product
            id="64724"
            title="Garmin 010-02430-01 Venu 2, GPS Smartwatch with Advanced Health Monitoring and Fitness Features, Slate Bezel with Black Case and Silicone Band"
            price={299.99}
            image="https://www.garmin.co.in/m/in/g/products/venu-2-black-cf-lg.jpg"
            rating={3}
          />
          <Product
            id="78349"
            title="Dove Deeply Nourishing Body Wash, With Moisturisers For Softer, Smoother Skin, For All Skin Type, 800 Ml"
            price={26}
            rating={2}
            image="https://www.zebrs.com/uploads/zebrs/products/dove-deeply-nourishing-body-wash-with-moisturisers-for-softer-smoother-skin-for-all-skin-type-800-ml-939566_m.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="57554"
            title="TANUJ Wood MART Solid Sheesham Wood 4 Seater Dining Table Set Dining Table with 4 Cushion Chairs Dinner Table for Dining Room Home,Hotel and Office (Natural Teak) (TWM-DT4S-23) "
            price={172}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61vIG2fwVLL._SX569_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
