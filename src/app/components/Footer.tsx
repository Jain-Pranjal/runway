import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#eee] text-gray-800 border-t border-gray-200">
            <div className=" mx-auto  py-12">
           
                <div className="mb-8 relative">
                    <Image
                        src="/footer.jpg"
                        alt="Footer banner"
                        className="rounded w-full h-auto draggable-none"
                        width={1600}
                        height={600}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span
                            className="text-[#eee] font-extrabold tracking-tight text-center leading-none whitespace-nowrap px-4"
                            style={{ fontSize: 'clamp(2rem, 12vw, 12rem)' }}
                        >
                            RUNWAY
                        </span>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8 px-6">
                    <div className="md:w-1/3">
                        <p className="text-sm mb-4">
                            Runway is a fashion-forward brand dedicated to empowering women
                        </p>
                    </div>

                    <div className="md:w-2/3">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div>
                                <div className="font-semibold mb-2">Brand</div>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link className="hover:underline" href="#">Adv Campaign</Link>
                                    </li>
                                    <li>
                                        <Link className="hover:underline" href="#">About</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="font-semibold mb-2">Customer Support</div>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link className="hover:underline" href="#">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link className="hover:underline" href="#">
                                            Terms and Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="hover:underline" href="#">
                                            Shipping and Returns
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="font-semibold mb-2">Follow Us</div>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.pranjaljain.live">
                                            Pranjal Jain
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://github.com/Jain-Pranjal">
                                            Github
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pranjalll/">
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between text-xs border-t pt-4 gap-3 px-6">
                    <div className="text-gray-600">Copyright © 2025 Runway by <Link className="hover:underline cursor-pointer" target="_blank" rel="noopener noreferrer" href="https://x.com/PranjalJain03">Pranjal</Link></div>
                    <div className="text-gray-600">New Delhi, India </div>
                    <div>
                        <Link
                            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://buymeacoffee.com/pranjal.jain"
                        >
                            <span>Support me</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
