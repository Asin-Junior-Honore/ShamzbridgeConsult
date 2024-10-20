import ActionButtons from '@/components/ActionButtons'
import React from 'react'

export default function page() {
    return (
        <section>
            <div className="max-w-[100%] lg:h-[680px] h-[800px] bg-center container herosection_about">
                <div className="words lg:px-[8rem] px-[2rem] flex justify-center items-start relative h-[-webkit-fill-available] flex-col  bg-[rgba(0,0,0,0.3)]">
                    <h1 className=" lg:text-7xl text-[3rem] font-bold text-[#eee] lg:leading-[4.5rem] leading-[3.2rem]">
                        About Us, <br /> Empowering Growth <br /> Shaping the Future
                    </h1>
                    <p className="mt-3 mb-5 text-[#eee] text-xl">
                        Discover our mission and values that drive our comprehensive HR services. <br />
                        We connect exceptional candidates with outstanding companies to create <br />
                        winning teams.
                    </p>
                    <ActionButtons />
                </div>
            </div>

            <section className='flex lg:p-[8rem] p-[2rem] items-center gap-x-10 lg:flex-row flex-col'>
                <aside className='lg:h-[550px] lg:w-[1550px]'>
                    <img
                        className="w-[100%] object-cover  rounded-md h-[100%]"
                        src={"/scthree.webp"}
                        alt="cultural day"
                    />
                </aside>

                <aside className='mt-5 lg:mt-0'>
                    <p className="underline decoration-[#007BFF] tracking-widest">
                        Our Mission & Vision: Shaping the Future of Workforce
                    </p>

                    <div className='my-8'>
                        <h3 className="text-[#6C757D] text-5xl font-bold">Our Mission</h3>
                        <p className="text-lg">
                            Our mission is to cultivate an empowering atmosphere for skill acquisition and capacity enhancement that heralds a holistic growth and developent for individuals and organizations
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[#6C757D] text-5xl font-bold">Our Vision</h3>
                        <p className="text-lg">
                            To become a premier organization dedicated to enhancing both personal and professional capacities of individuals and businesses, fostering efficiency, heightened productivity, and innovation.
                        </p>
                    </div>
                </aside>

            </section>
        </section>
    )
}
