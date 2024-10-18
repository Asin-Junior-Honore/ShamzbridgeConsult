const ActionButtons = () => {
    return (
        <div className="flex lg:flex-row flex-col">
            <button className="rounded-md font-medium uppercase text-white bg-[#007BFF] py-[13px] px-[20px] tracking-widest">
                Learn More
            </button>
            <button className="rounded-md font-medium uppercase text-white bg-[#6C757D] py-[13px] px-[20px] tracking-widest lg:ml-8 mt-5 lg:mt-0">
                How We Work
            </button>
        </div>
    );
};

export default ActionButtons;
