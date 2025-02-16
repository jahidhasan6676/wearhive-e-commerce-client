const Cover = ({ image }) => {
    return (
        <div
            style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22)" }}
            className="md:h-[400px] h-[517px] relative flex items-end"
        >
            <div className="md:flex py-10 md:py-0 w-11/12 space-y-10 md:space-y-0 mx-auto h-full">
                {/* left side */}
                <div className="flex-1 flex flex-col justify-center gap-3">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary">FLAT 50% OFF</h1>
                    <h3 className="text-2xl md:text-3xl">
                        <span className="text-secondary">12</span> Hours{" "}
                        <span className="text-secondary">20</span> minute
                    </h3>
                    <button className="bg-primary px-3 py-2 rounded-md text-white w-fit">
                        Explore now
                    </button>
                </div>
                {/* right side */}
                <div className="flex-1 flex justify-center h-">
                    <img src={image} alt="" className="h-[300px] md:h-[350px] self-end" />
                </div>
            </div>
        </div>
    );
};

export default Cover;

