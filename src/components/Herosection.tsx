'use client'
import React from "react";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { EffectFade } from "swiper/modules";
import ActionButtons from "./ActionButtons";
const Herosection = () => {
    return (
        <section className="hero-parent">
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 6500,
                }}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="max-w-[100%] lg:h-[680px] h-[800px] bg-center container herosection_one">
                        <div className="words lg:px-[8rem] px-[2rem] flex justify-center items-start relative h-[-webkit-fill-available] lg:h-[120vh] flex-col  bg-[rgba(0,0,0,0.3)]">
                            <h1 className=" lg:text-7xl text-[3rem] font-bold text-[#eee] lg:leading-[5rem] leading-[3.2rem]">
                                Expert HR Solutions <br />
                                for Modern Businesses
                            </h1>
                            <p className="mt-3 mb-5 text-[#eee] text-xl">
                                Our team of professionals is committed to providing exceptional and tailored service. <br />
                                Get to know the people behind our success.
                            </p>
                            <ActionButtons />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-[100%] lg:h-[680px] h-[800px] bg-center container herosection_five">
                        <div className="words lg:px-[8rem] px-[2rem] flex justify-center items-start relative h-[-webkit-fill-available] lg:h-[120vh] flex-col  bg-[rgba(0,0,0,0.3)]">
                            <h1 className=" lg:text-7xl text-[3rem] font-bold text-[#eee] lg:leading-[4.5rem] leading-[3.2rem]">
                                Unleashing Potential, <br /> Transforming <br /> Workforce
                            </h1>
                            <p className="mt-3 mb-5 text-[#eee] text-xl">
                                Explore our comprehensive range of HR services designed to meet your specific <br />
                                needs. Connecting exceptional candidates with outstanding companies to create <br />
                                winning teams.
                            </p>
                            <ActionButtons />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default Herosection;
