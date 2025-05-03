import React from 'react';
import CategorySection from './HomeSection/CategorySection';
import LatestProduct from './HomeSection/LatestProduct';
import Service from './HomeSection/Service';
import SubscriptionForm from './HomeSection/SubscriptionForm';
import TopSellerProduct from './HomeSection/TopSellerProduct';
import BrandPartner from './HomeSection/BrandPartner';
import Test from "./HomeSection/Test";
import Slider from './Slider/Slider';


const Home = () => {
    return (
        <div>
             {/* <Test/> */}
            <Slider/>
            <CategorySection></CategorySection>
            
            <LatestProduct></LatestProduct>
            <TopSellerProduct></TopSellerProduct>
           
            <BrandPartner></BrandPartner>
            <Service></Service>
            <SubscriptionForm></SubscriptionForm>
            
        </div>
    );
};

export default Home;