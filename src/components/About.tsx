

export default function About() {
    return (
        <section className="lg:p-[8rem] p-[2rem] flex justify-between lg:flex-row flex-col">
            <aside className="">
                <p className="underline decoration-[#007BFF] tracking-widest">
                    Transforming Workforce Management
                </p>

                <h3 className="text-[#6C757D] text-5xl font-bold mt-5 lg:leading-[3.2rem]">
                    Connecting you to success and <br /> unleashing the <br /> potential
                </h3>
                <div className="my-5">
                    <p className="text-lg">
                        Whether you’re a job seeker or a business looking for <br />  top talent, join our network to access a world of <br /> opportunities and resources.
                    </p>

                    <p className="text-lg mt-5">
                        Whether you’re a job seeker or a business looking for <br />  top talent, join our network to access a world of <br /> opportunities and resources.
                    </p>
                </div>
                <div className="">
                    <button className="rounded-md font-medium uppercase text-sm  text-white bg-[#6C757D] py-[13px] px-[20px] tracking-widest">click here</button>
                </div>
            </aside>

            <aside className="images grid grid-cols-1 lg:mt-0 mt-8 lg:gap-y-0 gap-y-6">
                <div className="lg:h-[250px]">
                    <img
                        className="w-[100%] object-cover  rounded-md h-[100%]"
                        src={"/sctwo.webp"}
                        alt="cultural day"
                    />
                </div>
                <div className="flex gap-x-6">
                    <div className="lg:w-[300px]">
                        <img
                            className="w-[100%] object-cover rounded-md h-[100%]"
                            src={"/scone.webp"}
                            alt="cultural day"
                        />
                    </div><div className="lg:w-[300px]">
                        <img
                            className="w-[100%] object-cover rounded-md h-[100%]"
                            src={"/scone.webp"}
                            alt="cultural day"
                        />
                    </div>
                </div>
            </aside>
        </section>
    )
}
