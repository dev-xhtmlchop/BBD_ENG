import React from 'react';
import Layout from '../components/layout';
import Home from '../components/Home/Home';
import BapServices from '../components/BapServices/BapServices';
import Service from '../components/Services/Service';
import AdditionalService from '../components/Additional_services/AdditionalService';
import AccountCreateGuide from '../components/AccountCreateGuide/AccountCreateGuide';
import Testimonial from '../components/Testimonial/Testimonial';
import Support from '../components/Support/Support';
import Header from '../components/header/header';
import data from '../Data/bap.json'; 
import shapeimgtestimonial  from '../images/BaptestimonialShape.png'
import baphomebg from '../images/baphomebg.png'
import shapeimg from '../images/baphomeshape.png'
import FooterComponent from '../components/Footer/Footer';
function indexbap() {
  return (
    <Layout pageTitle="BBD-BAP-Gatsby Bootstrap" >
      <Header img={data.header.rightimg} link={data.header.link} logoalt={data.header.alt}  /> 
      <Home orderf='order-first' mt={true} lscontain={true} imgpart="true" bap_py={true} orderl='order-last' img={baphomebg} shapeimg={shapeimg} homepageData={data.homepageData[0]} meauto="me-lg-auto"/>
      <BapServices serviceBoxData={data.servicesbbd}/>
      <Service lefshape="" grayshape={true} subtitle={data.servicepageData.subtitle} btn="Get Started" eapboxsize="boxsize"  lg4='4' rightshape='' title='Manage everyday business health and challenges' noImage={false} businessowners={data.businessowners} description={''} divided={true} serviceBoxData={data.serviceBoxData} />
      <AdditionalService/>
      <AccountCreateGuide guidedata={data.guidedata}/>
      <Testimonial background="bg-lightsky" msauto='ms-auto' conatin={data.TestimonialData.conatin} flowerimg='d-none' shapeimg={shapeimgtestimonial} written={data.TestimonialData.written} />
      <Support
      // leftpng=" "
      buuterflyleft="d-none d-lg-block"
        rightpng=" d-block"
        title={data.support.title}
        supportbg="bg-yellow"
        subcontain={data.support.subtitle}
        btn={data.support.btn}
        btnbg="bg-white"
      />
       <FooterComponent boderclr="border_dark"  bgcolor="bg-yellow" /> 
    </Layout>
  );
}

export default indexbap;
