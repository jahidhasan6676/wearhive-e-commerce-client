import React from "react";

const teamMembers = [
    {
        name: "Annette Black",
        role: "Founder/CEO",
        image: "https://i.ibb.co.com/3YLFXTfS/team-1.jpg",
    },
    {
        name: "Jane Cooper",
        role: "Sales Director",
        image: "https://i.ibb.co.com/679xYc8T/team-2.jpg",
    },
    {
        name: "Brooklyn Simmons",
        role: "Manager",
        image: "https://i.ibb.co.com/Vc8sQzm5/team-3.jpg",
    },
    {
        name: "Theresa Webb",
        role: "Product Manager",
        image: "https://i.ibb.co.com/j9bfW65g/team-4.jpg",
    },
];

const OurTeam = () => {
    return (
        <section className="w-11/12 mx-auto pb-20">
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Meet Our Teams</h2>
                <p className="text-gray-500 mt-2">
                    Discover exceptional experiences through testimonials from our satisfied customers.
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className=" rounded-lg p-5">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full rounded-lg object-cover"
                        />
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="mt-4 text-lg font-medium text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                            <div className="">
                                <a
                                    href="#"
                                    className=" flex justify-center items-center border border-gray-300 rounded-full w-[40px] h-[40px] hover:bg-blue-600 hover:text-white"
                                >
                                    <i className="fab fa-facebook text-[25px] "></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;
