import ActionButtons from "@/components/ActionButtons"
import Services from "@/components/Services"


function page() {
    return (
        <section>
            <div className="max-w-[100%] lg:h-[680px] h-[800px] bg-center container herosection_service">
                <div className="words lg:px-[8rem] px-[2rem] flex justify-center items-start relative h-[-webkit-fill-available] flex-col  bg-[rgba(0,0,0,0.3)]">
                    <h1 className=" lg:text-7xl text-[3rem] font-bold text-[#eee] lg:leading-[4.5rem] leading-[3.2rem]">
                        What We Offer, <br /> Driving Success <br /> Building the Future
                    </h1>
                    <p className="mt-3 mb-5 text-[#eee] text-xl">
                        Explore our wide range of services tailored to enhance your workforce management. <br />
                        From talent acquisition to professional development, we help build winning teams <br />
                        and drive business success.
                    </p>
                    <ActionButtons />
                </div>
            </div>
            <Services />
        </section>
    )
}

export default page