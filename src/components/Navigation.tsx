'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";



const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const showNav = () => {
            if (window.scrollY >= 200) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        window.addEventListener("scroll", showNav);
        return () => window.removeEventListener("scroll", showNav);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div
                className={
                    navbar
                        ? "navbar active lg:py-4 py-2 flex justify-between bg-[#6C757D] items-center lg:px-7 px-5"
                        : "flex justify-center items-center bg-transparent lg:py-[1rem] lg:px-[3rem] py-[13px] top-0 left-0 right-0 px-[13px] fixed z-10 border-b-[1px] border-[#FFFFFF33]"
                }
            >
                <div className="navbar flex justify-between lg:flex-row flex-col lg:items-center w-[100%]">
                    <div className="logo desktop lg:inline-block flex items-center justify-between">
                        <h1 className="lg:text-3xl text-4xl font-bold text-[#fff]">LOGO</h1>
                        <label onClick={toggleMenu} className="text-[#fff] lg:hidden">
                            {menuOpen ? <MdClose size={45} /> : <MdMenu size={45} />}
                        </label>
                    </div>

                    <div className={menuOpen ? "navs flex justify-start items-start flex-col p-3 rounded-md bg-[#6C757D]" : "navs flex-row  lg:flex hidden items-center justify-between flex-grow-[0.5]"}>
                        <ul className="flex lg:flex-row flex-col m-0 p-0 justify-center lg:space-y-0 space-y-3 z-10">
                            <li className="li">
                                <Link className="links" href="/" >
                                    Home
                                </Link>
                            </li>

                            <li className="li">
                                <Link className="links" href="/about" >
                                    About Us
                                </Link>
                            </li>

                            <li className="li">
                                <Link className="links" href="/service" >
                                    Services
                                </Link>
                            </li>
                        </ul>

                        <button className="font-semibold text-white border-none outline-none text-lg  bg-[#007BFF] py-3 px-8 rounded-md mt-3 lg:mt-0">
                            Let&apos;s talk
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
