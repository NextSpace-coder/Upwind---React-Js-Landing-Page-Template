import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import HeroImage from "../assets/images/hero4.png";

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

/**
 * Index four 
 */
export default function IndexFour() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div>
                <Navbar navdark={true}/>
                <section className="relative table w-full py-36 pb-0 lg:py-40 lg:pb-0 bg-orange-600/5 dark:bg-orange-600/10" id="home">
                    <div className="container">
                        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                            <div className="lg:col-span-7">

                                <div className="md:me-6 md:mb-20">
                                    <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">Business Growth <br /> Makes Your Company</h4>

                                    <p className="text-slate-400 dark:text-white/70 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                                    <div className="relative mt-10">
                                        <Link2 to="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full me-1">Get Started</Link2>
                                        <Link2 to="#" onClick={()=>setOpen(!isOpen)} data-type="youtube" data-id="yba7hPeTSjk" className="btn btn-icon btn-lg bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white rounded-full lightbox"><i className="mdi mdi-play text-xl align-middle"></i></Link2><small className="font-medium text-sm uppercase align-middle ms-2 dark:text-white/70">Watch Now</small>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 mt-8 md:mt-0">
                                <img src={HeroImage} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                {isOpen && 
                    <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-1 w-full max-w-2xl max-h-full">
                            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                                <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                                    <button type="button" onClick={()=>setOpen(!isOpen)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="p-1 md:p-1 space-y-4">
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                

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
