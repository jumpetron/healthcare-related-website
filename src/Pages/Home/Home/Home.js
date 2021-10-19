import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Banner from '../Banner/Banner';
import BlogSection from '../BlogSection/BlogSection';
import ContactSection from '../ContactSection/ContactSection';
import DoctorsSection from '../DoctorsSection/DoctorsSection';
import FunFacts from '../FunFacts/FunFacts';
import ServiceSection from '../ServiceSection/ServiceSection';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <WhyChooseUs></WhyChooseUs>
            <ServiceSection></ServiceSection>
            <DoctorsSection></DoctorsSection>
            <FunFacts></FunFacts>
            <BlogSection></BlogSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;