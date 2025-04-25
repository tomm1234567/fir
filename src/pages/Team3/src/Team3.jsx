import { useState, useEffect } from 'react';
import './Team3.css';

import star_image from './assets/Union.png';
import Group17 from './assets/Group17.png';
import Group13 from './assets/Group13.png';
import Group12 from './assets/Group12.png';
import star2 from './assets/Star 2.png';
import star1 from './assets/Star 1 (1).png';

import Blog from './components/Blog/Blog.jsx';
import Gradient from './components/Gradient/Gradient.jsx';

import SectionI from "./components/SectionI/SectionI.jsx"
import SectionI2 from "./components/SectionI2/SectionI2.jsx"

import GroupI from'./components/GroupI/GroupI.jsx'
import img from './assets/images/img.png'
import img1 from'./assets/images/nn.png'
import img2 from'./assets/images/pp.png'

const Gra_1 = "gradient-block-1";
const Gra_2 = "gradient-block-2";
const Gra_3 = "gradient-block-3";
const Gra_4 = "gradient-block-4";
const Gra_5 = "gradient-block-5";
const Gra_6 = "gradient-block-6";

function Team3() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        if (!showBackToTop) {
          setShowBackToTop(true);
          setAnimateOut(false);
        }
      } else {
        if (showBackToTop && !animateOut) {
          setAnimateOut(true);
          setTimeout(() => {
            setShowBackToTop(false);
            setAnimateOut(false);
          }, 300);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showBackToTop, animateOut]);

  const scrollToTop = () => {
    setAnimateOut(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setShowBackToTop(false);
      setAnimateOut(false);
    }, 300);
  };

  return (
    <div className={`box ${isLoaded ? 'fade-in' : ''}`}>
      <div className="section2">
                <h1 className="s2_h1">Help our clients achive <br/>their business objectives</h1>
                <div className="s2_b">
                  <div className="s2_i1">
                    <p className="a1_p1">London 2006</p>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6509 6.88508L23.0463 4.31497L21.4521 10.0746L21.3165 10.5645L21.8085 10.692L27.5936 12.1912L22.6702 15.5787L22.2514 15.8668L22.5464 16.2807L26.0143 21.1478L20.0654 20.578L19.5594 20.5295L19.5192 21.0362L19.0474 26.9938L14.8564 22.7334L14.5 22.371L14.1436 22.7334L9.95263 26.9938L9.48075 21.0362L9.44062 20.5295L8.93464 20.578L2.98566 21.1478L6.45361 16.2807L6.74857 15.8668L6.32982 15.5787L1.40637 12.1912L7.19147 10.692L7.68351 10.5645L7.54792 10.0746L5.95374 4.31497L11.3491 6.88508L11.808 7.10367L12.019 6.64125L14.5 1.20438L16.981 6.64125L17.192 7.10367L17.6509 6.88508Z" stroke="white"/>
                    </svg>
                  </div>
                  <div className="s2_i2">
                    <div className="s2_text">
                      <div className="s2_t_i">
                        <p className="a1_p2">Influenzilla is a leading design and marketing agency that offers creative solutions to businesses of all sizes. Our team of experts specializes in creating unique and effective designs that help our clients stand out in a crowded market.</p>
                        <p className="a1_p2">Our mission is to help our clients achieve their business objectives through innovative and effective design solutions. We believe that great design is more than just aesthetics. It's about creating a seamless user experience that engages and delights your audience.</p>
                      </div>
                      <div className="s2_t_i">
                        <p className="a1_p2">We take pride in our ability to understand the unique needs and goals of each of our clients, and to develop customized solutions that exceed their expectations. Our team of talented designers and marketers work closely with our clients to create a cohesive brand identity, effective marketing strategies, and user-friendly websites and applications.</p>
                        <p className="a1_p2">We offer a wide range of services, including branding, web design, social media marketing, graphic design, and more. Our goal is to help our clients achieve success by providing them with the tools and resources they need to grow their business.</p>
                      </div>
                    </div>
                    <div className="s2_bi">
                      <SectionI2 img="s2_i_img1" title="Branding" text="Our team of experts specializes in creating unique and effective designs "></SectionI2>
                      <SectionI2 img="s2_i_img2" title="Design" text="Innovative and effective design solutions for business of our clients"></SectionI2>
                      <SectionI2 img="s2_i_img3" title="Marketing" text="Our team of experienced designers and marketing professionals work closely "></SectionI2>
                    </div>
                    <p className="s2_p2">We specialize in creating unique and innovative designs that not only capture the essence of your business but also help you achieve your goals. We believe that great design is about creating a seamless user experience that engages and delights your audience, and we work hard to ensure that every design we create meets this high standard.</p>
                  </div>
                </div>
              </div>
              <div className="th6">
                <h2 className='h2'>Expertise and experience</h2>
                <p className='p'>We believe that building long-lasting relationships with our clients is key to achieving success. We are passionate about what we do, and we are committed to delivering exceptional results for every client we work with.</p>
              </div>
              <div className="th7">
                <div className="images"></div>
                <p className='par'>Our team of talented designers and marketers works closely with each of our clients, taking the time to understand their unique needs and goals, and developing customized solutions that exceed their expectations. 
      
                We take pride in our ability to create a cohesive brand identity, effective marketing strategies, and user-friendly websites and applications that help our clients achieve success</p>
                <p className='par'>So if you're a start-up looking to create a strong brand identity, or an established business looking to revamp your marketing strategy, we have the expertise and experience to help you succeed. 
      
                Contact us today to learn more about our services and how we can help your business grow. We look forward to hearing from you and starting this exciting journey together.</p>
              </div>
              <div className="group30">
                <p className='fff'>for your business</p>
                <p className='ffff'>Our team of experienced designers and marketing professionals work closely with each client to understand their unique vision and develop tailored solutions that align with their goals. <br /> <br />
      
      From designing eye-catching logos and brand identities, to building custom websites that engage and convert visitors, to crafting effective influencer marketing campaigns, we are dedicated to helping our clients succeed in the digital space.</p>
                <div className="compon">
                  <GroupI text="jack jonson" images={img} title="manager"></GroupI>
                  <GroupI text="kate middleton" images={img1} title="designer"></GroupI>
                  <GroupI text="Oliver Twist" images={img2} title="CEO"></GroupI> 
                </div>
              </div>
      <div className="team_blog">
        <h1>
          Welcome to our 
          <br />team <span className="underline">blog</span> 
        </h1>
        <div className="Blog_item">
          <div className="item_blog_2 item_blog_3">
            <img src={star_image} alt="" />
          </div>
          <div className="item_blog_2">
            <Blog
              IMG_V_ZAGOLVKE={Group12}
              data_data={"01.02.2022"}
              h1_blog={"Brand identity"}
              p_blog={"Our team developed a new logo, packaging design, and website layout that reflected the company's commitment to sustainability and health."}
            />
            <Blog
              IMG_V_ZAGOLVKE={Group13}
              data_data={"23.06.2022"}
              h1_blog={"Web design"}
              p_blog={"Our team designed a sleek and modern layout that was optimized for both desktop and mobile devices"}
            />
            <Blog
              IMG_V_ZAGOLVKE={Group17}
              data_data={"16.01.2023"}
              h1_blog={"Media marketing"}
              p_blog={"We created engaging content that resonated with the brand's target audience, ran targeted ads that reached new audiences."}
            />
            <Blog
              IMG_V_ZAGOLVKE={Group12}
              data_data={"05.03.2023"}
              h1_blog={"Techno startup"}
              p_blog={"We partnered with a technology startup to create a new website that would showcase their innovative product and attract investors."}
            />
            <Blog
              IMG_V_ZAGOLVKE={Group13}
              data_data={"21.03.2024"}
              h1_blog={"Modern layout"}
              p_blog={"Our team designed a sleek and modern layout that was optimized for both desktop and mobile devices."}
            />
            <Blog
              IMG_V_ZAGOLVKE={Group17}
              data_data={"08.04.2025"}
              h1_blog={"Skills and experience"}
              p_blog={"Our team of experts has the skills and experience to develop creative and effective solutions that are tailored to your unique needs."}
            />
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="projects_left">
          <h1>Projects for our clients</h1>
          <h6>Since 2006</h6>
        </div>
        <div className="projects_right">
          <img src={star2} alt="star" />
          <div className="p_proj">
            <p className="p_proj1">
              At Influenzilla, we believe that building long-lasting relationships with our
              clients is key to achieving success. We are passionate about what we do, and
              we are committed to delivering exceptional results for every client we work with.
            </p>
            <p className="p_proj2">
              So if you're a start-up looking to create a strong brand identity, or an
              established business looking to revamp your marketing strategy, we have
              the expertise and experience to help you succeed.
            </p>
          </div>
        </div>
      </div>
      <div className="Clients">
        <Gradient
          gradient={Gra_1}
          infInGra={"branding"}
          h1Gra={"Food store identity"}
          pGra={"We worked with a local health food store to create a new brand identity that was both modern and eco-friendly."}
        />
        <Gradient
          gradient={Gra_2}
          infInGra={"web design"}
          h1Gra={"Technology startup site"}
          pGra={"We partnered with a technology startup to create a new website that would showcase their innovative product and attract investors."}
        />
        <Gradient
          gradient={Gra_3}
          infInGra={"marketing"}
          h1Gra={"Fashion instagram marketing"}
          pGra={"Our team helped a new fashion brand grow their Instagram following by over 200% in just three months."}
        />
        <Gradient
          gradient={Gra_4}
          infInGra={"development"}
          h1Gra={"Mobile and desktop services"}
          pGra={"Developing modern websites that are optimized for both desktop and mobile devices."}
        />
        <Gradient
          gradient={Gra_5}
          infInGra={"branding"}
          h1Gra={"Eco packaging design"}
          pGra={"We created marketing materials that were consistent with the new brand identity, such as business cards, brochures, and social media graphics."}
        />
        <Gradient
          gradient={Gra_6}
          infInGra={"marketing"}
          h1Gra={"Social media graphics"}
          pGra={"We provided the brand with a detailed social media strategy that outlined how they could continue to grow their following and engage with their audience in the future."}
        />
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="need">
              <img src={star1} alt="Logo" className="footer-logo" />
              <h1 className="footer_name">Influenzilla</h1>
            </div>
            <p className="footer-description">
              bespoke design and <br /> marketing services
            </p>
          </div>
          <div className="footer-grid">
            <div className="footer-row">
              <a href="#"><p className="footer_p">ABOUT</p></a>
              <a href="#"><p className="footer_p">SERVICES</p></a>
              <a href="#" className='cases_f'><p className="footer_p">CASES</p></a>
              <a href="#" className='team_f'><p className="footer_p">TEAM</p></a>
              <a href="#" className='glob'><p className="footer_p">🌐</p></a>
            </div>
            <div className="footer-row">
              <a href="#"><p className="footer_p">BOOST PROGRAM</p></a>
              <a href="#"><p className="footer_p">PRODUCTS</p></a>
              <a href="#"><p className="footer_p">BOOK</p></a>
              <a href="#"><p className="footer_p">BLOG</p></a>
            </div>
          </div>
        </div>
      </footer>
      {showBackToTop && (
        <button className={`back-to-top ${animateOut ? 'fade-out' : 'pop-in'}`} onClick={scrollToTop}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 8L6 14H18L12 8Z" fill="#fff"/>
          </svg>
        </button>
      )}
    </div>
  );
}

export default Team3;
