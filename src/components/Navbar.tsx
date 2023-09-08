import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Logo from '../assets/image/logoMKP.png';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [scrollOpacity, setScrollOpacity] = useState<number>(0);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const opacity = scrollY > 50 ? 75 : 0;
            setScrollOpacity(opacity);

            const sections = ['about', 'service', 'portofolio', 'contact'];
            let currentSection = '';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 0) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`bg-gray-800 bg-opacity-${scrollOpacity} p-4 fixed top-0 w-full z-10 transition-all duration-300`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold ml-10">
                    <Link href="/">
                        <Image src={Logo} alt="logo" width={85} height={85} />
                    </Link>
                </div>

                <ul className="lg:flex space-x-4 text-white text-lg font-semibold">
                    <li>
                        <Link href="#aboutL" className={activeSection === 'about' ? 'text-blue-400' : 'hover:text-blue-400'}>Tentang</Link>
                    </li>
                    <li>
                        <Link href="#serviceL" className={activeSection === 'service' ? 'text-blue-400' : 'hover:text-blue-400'}>Layanan</Link>
                    </li>
                    <li>
                        <Link href="#portofolioL" className={activeSection === 'portofolio' ? 'text-blue-400' : 'hover:text-blue-400'}>Portofolio</Link>
                    </li>
                    <li>
                        <Link href="#contactL" className={activeSection === 'contact' ? 'text-blue-400' : 'hover:text-blue-400'}>Kontak</Link>
                    </li>
                </ul>

                <button
                    onClick={() => {
                        window.location.href = 'https://api.whatsapp.com/send?phone=6281310704346';
                    }}
                    className="hover:bg-blue-500 border-2 border-blue-500 shadow-lg bg-opacity-0 text-white px-4 py-2 rounded-sm mr-10"
                >
                    PESAN SEKARANG
                </button>

                <div className="lg:hidden">
                    <button onClick={() => setShowDropdown(!showDropdown)} className="text-white focus:outline-none font-bold">
                        ☰
                    </button>
                </div>
            </div>

            {showDropdown && <Dropdown />}
        </nav>
    );
};

export default Navbar;
