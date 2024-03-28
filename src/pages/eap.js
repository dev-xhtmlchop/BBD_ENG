import React from "react"
import Layout from "../components/layout"
import Home from "../components/Home/Home"
import About from "../components/About/About"
import Service from "../components/Services/Service"
import Testimonial from "../components/Testimonial/Testimonial"
import Support from "../components/Support/Support"
import eaphomeimg from "../images/hero1.png"
import eaphomeshape from "../images/hero-bgshap.png"
import "../style/global.css"   
import data from '../Data/data.json' // Import the JSON data file 
import FooterComponent from "../components/Footer/Footer"
import Header from "../components/header/header"


const IndexPage = () => {
  
  const { header ,homepageData, aboutContain, servicepageData, serviceBoxData, TestimonialData,support } = data;

  return (
    <Layout pageTitle="BBD-EAP-Gatsby Bootstrap" >
    <Header img={header.rightimg} link={header.link} signup={header.signup} signin={header.signin} logoalt={header.alt}   eap={true}  />

      <Home
        orderf="order-last"
        orderl="order-first"
        img={eaphomeimg}
        shapeimg={eaphomeshape}
        homepageData={homepageData}
        meauto="ms-auto"
        imgpart={true}
        eap_contain={true}
         
      />
      <About aboutContain={aboutContain} btnlink={aboutContain.btnlink}/>
      <Service
        lg4="3"
        subtitle={servicepageData.subtitle}
        title={servicepageData.title}
        rowgap={true}
        description={servicepageData.description}
        noImage={true}
        divided={false}
        eapboxsize="boxsizeeap"
        btnlink={servicepageData.btnlink}
        serviceBoxData={serviceBoxData.map(item => ({
    ...item,
    img: require(`../images/${item.img}`).default // Dynamic import of images
  }))}
        // serviceBoxData={serviceBoxData} 
        btn="Get Started"
      />
      <Testimonial
        background="bg-lightyellow"
        flowerimg=" d-none d-xl-block"
        conatin={TestimonialData.contain}
        written={TestimonialData.written}
        shapeimg={require(`../images/${TestimonialData.shapeimg}`).default   }
      />
      <Support
      // rightpng=" d-block"
      buuterflyleft="d-none"
      btnlink={support.btnlink}
        leftpng=" d-lg-block"
        supportbg="bg_brown"
        title={support.title}
        btn={support.btn}
        subcontain={support.subtitle}
      />
      <FooterComponent boderclr="border_dark"  bgcolor="bg_brown" /> 
    </Layout>
  )
}
export default IndexPage
