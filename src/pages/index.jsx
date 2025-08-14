import React from "react";
import { Link } from "react-router-dom";


import BackgroudImage from "../assets/images/bg/1.jpg";
import Services from "../component/Services";
import About from "../component/About";
import Pricing from "../component/Pricing";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Portfolio from "../component/Portfolio";
import Review from "../component/Testimonial";
import Switcher from "../component/Switcher";
import Navbar from "../component/navbar";

import { TypeAnimation } from 'react-type-animation';

/**
 * Index Component
 */
export default function Index() {




  return (
    <>
      <div>
        <Navbar/>
        <section style={{ backgroundImage: `url(${BackgroudImage})` }} className="py-36 lg:py-64 w-full table relative bg-center bg-cover" id="home">
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 mt-12">
              <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                Delivering Creative Solutions <br />
                For Your
                <TypeAnimation
                    sequence={[
                      'Business',
                      1000,
                      'Projects',
                      1000,
                      'Vision',
                      1000,
                      'Success',
                      1000
                    ]}
                    wrapper="span"
                    speed={10}
                    repeat={Infinity}
                    className="typewrite relative text-type-element ms-2"
                    cursor={false}
                  />
               
              </h4>

              <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
                Transform your ideas into reality with our professional design
                and development services. We create exceptional digital
                experiences.
              </p>

              <div className="relative mt-10">
                <Link
                  to="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <About />

        {/* Service section */}
        <Services />

        {/* Portfolio section */}
        <Portfolio />

        {/* Review section */}
        <Review />

        {/* Pricing section */}
        <Pricing />

        {/* Blog section */}
        <Blog />

        {/* Contact section */}
        <Contact />

        {/* Footer section */}
        <Footer />

        {/* Switcher section */}
        <Switcher />
      </div>

    </>
  );

}

