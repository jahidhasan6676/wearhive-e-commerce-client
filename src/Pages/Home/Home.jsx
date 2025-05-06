import React from 'react';
import CategorySection from './HomeSection/CategorySection';
import LatestProduct from './HomeSection/LatestProduct';
import Service from './HomeSection/Service';
import SubscriptionForm from './HomeSection/SubscriptionForm';
import TopSellerProduct from './HomeSection/TopSellerProduct';
import BrandPartner from './HomeSection/BrandPartner';
import Test from "./HomeSection/Test";
import Slider from './Slider/Slider';
import BlogSection from './HomeSection/BlogSection';
import Popup from '../../components/Popup/Popup';


const Home = () => {
    return (
        <div>
             {/* <Test/> */}
             <Popup/>
            <Slider/>
            <CategorySection></CategorySection>
            
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