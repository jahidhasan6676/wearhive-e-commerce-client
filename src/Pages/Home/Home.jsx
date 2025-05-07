import React from 'react';
import LatestProduct from './HomeSection/LatestProduct';
import Service from './HomeSection/Service';
import SubscriptionForm from './HomeSection/SubscriptionForm';
import TopSellerProduct from './HomeSection/TopSellerProduct';
import BrandPartner from './HomeSection/BrandPartner';
import Test from "./HomeSection/Test";
import Slider from './Slider/Slider';
import BlogSection from './HomeSection/BlogSection';
import Popup from '../../components/Popup/Popup';
import CollectionBanner from './HomeSection/CollectionCard';

const Home = () => {
    return (
        <div>
             {/* <Test/> */}
             <Popup/>
            <Slider/>
            <CollectionBanner/>
            <LatestProduct></LatestProduct>
            <TopSellerProduct></TopSellerProduct>
           
            <BrandPartner></BrandPartner>
            <BlogSection/>
            <Service></Service>
            <SubscriptionForm></SubscriptionForm>
            
        </div>
    );
};

export default Home;