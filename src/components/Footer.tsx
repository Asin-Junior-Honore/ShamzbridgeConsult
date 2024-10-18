import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='bg-gray-800'>
            <section className='topfooter lg:px-[8rem] px-[2rem] py-[3rem] border-b-[1px] border-[#FFFFFF33]'>
                <ul className='flex space-x-5 text-white text-lg font-semibold justify-between lg:justify-start'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our Services</li>
                </ul>
            </section>
            <section className='bottomfooter lg:px-[8rem] p-[2rem] lg:flex-row flex-col-reverse py-[3rem] flex justify-between'>
                <div className='text-[#fff] lg:mt-0 mt-10'>
                    <h1 className="text-3xl font-bold">LOGO</h1>
                    <p className='my-7'>
                        With a commitment to excellence and a <br /> proven track record of success, we <br /> empower businesses to thrive by <br /> connecting them with exceptional <br /> talent and optimizing their human <br /> resources.
                    </p>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://www.facebook.com" target="_blank">
                                <FaFacebookF size={26} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank">
                                <FaTwitter size={26} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank">
                                <FaInstagram size={26} />
                            </a>
                        </li>
                    </ul>

                </div>
                <div className='text-white'>
                    <h5 className='uppercase'>Categories</h5>
                    <ul className='text-[15px] mt-4'>
                        <li className="border-b-[1px] border-[#FFFFFF33] border-dashed cursor-pointer pb-2 mb-2">Employee Development</li>
                        <li className="border-b-[1px] border-[#FFFFFF33] border-dashed cursor-pointer pb-2 mb-2">Legal and Compliance</li>
                        <li className="border-b-[1px] border-[#FFFFFF33] border-dashed cursor-pointer pb-2 mb-2">Recruitment and Onboarding</li>
                        <li className="border-b-[1px] border-[#FFFFFF33] border-dashed cursor-pointer pb-2 mb-2">Strategies and Trends</li>
                        <li className="border-b-[1px] border-[#FFFFFF33] border-dashed cursor-pointer pb-2 mb-2">Uncategorized</li>
                        <li className="border-b-[1px] border-[#FFFFFF33] border-dashed cursor-pointer pb-2 mb-2">Workplace Culture</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
