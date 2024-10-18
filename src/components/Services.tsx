
export default function Services() {
    const data = [
        {
            id: "01",
            title: "Projects Management",
            description: "Partner with us for seamless project execution."
        },
        {
            id: "02",
            title: "Capacity Building",
            description: "Nurture talent and skills with our capacity building services."
        },
        {
            id: "03",
            title: "Consultancy Services",
            description: "Elevate your strategy with our consultancy services."
        },
        {
            id: "04",
            title: "Event Host/Management",
            description: "Let us handle the details while you enjoy the moment."
        },
        {
            id: "05",
            title: "Community Development",
            description: "Championing development where it matters most."
        },
        {
            id: "06",
            title: "Content Development",
            description: "Unleash your creativity and transform ideas into impactful stories."
        }
    ];


    return (
        <section className="lg:p-[8rem] p-[2rem] pt-[8rem] services">
            <div className="text-center">
                <p className="underline decoration-[#007BFF] tracking-widest">
                    Delivering the Highest Standards</p>

                <h3 className="text-[#6C757D] text-5xl font-bold mt-3 ">
                    Our Services
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {data.map((item) => (
                    <div key={item.id} className="bg-white relative py-8 px-5 rounded-md">
                        <span className="absolute top-[-10px] right-[-10px] bg-[#007BFF] p-3 rounded-full text-white">
                            <b className="text-2xl">{item.id}</b>
                        </span>
                        <h4 className="text-xl mb-2 font-bold">{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}
