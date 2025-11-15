import React from 'react';

const About = () => {
    return (
        <section className="w-full bg-[#eee] min-h-[50vh] flex items-center text-black py-8 md:py-12 lg:py-16">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
                <div className="text-center">
                    <h2 className=" leading-none text-[clamp(1.25rem,3.5vw,4.5rem)] font-medium">
                        <span className="block mb-2">RUNWAY - SHOES FOR WOMEN WHO</span>
                        <span className="block mb-2">LIVE AND LOVE FASHION</span>
                        <span className="block mb-2">
                            STEP BOLDLY, <span className="font-extrabold italic">OWN EVERY MOMENT</span>
                        </span>
                        <span className="block mb-2">STYLISH FOOTWEAR FOR DAY AND NIGHT</span>
                        <span className="block">AND FOR EVERY OCCASION.</span>
                    </h2>

                    <p className="mt-6 text-sm md:text-base max-w-3xl mx-auto text-gray-700">
                        More than shoes — Runway delivers full fashion experiences curated seasonal collections,
                        on-trend styling guides and editorial looks, statement accessories, sustainable materials,
                        and personalized fittings. Expect outfit inspiration, expert styling tips, and exclusive
                        drops that take you from everyday to runway-ready.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;