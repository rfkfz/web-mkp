import React from 'react';
import About from '@/contents/About';
import Service from '@/contents/Service';
import Portofolio from '@/contents/Portofolio';
import Contact from '@/contents/Contact';
import Image from 'next/image'; // Import Next.js Image component


import iconAbout from '@/assets/icon/icon-company.svg';
import iconService from '@/assets/icon/icon-service.svg';
import iconPortofolio from '@/assets/icon/icon-portofolio.svg';
import iconContact from '@/assets/icon/icon-contact.svg';

const Home: React.FC = () => {
    return (
        <div className='bg-gray-400 px-14 pt-16'>
            {/* About Section */}
            <div className='pt-10' id="about">
                <Image src={iconAbout} alt="About Icon" width={50} height={50} /> {/* Set width and height as needed */}
                <div className="flex items-center">
                    <p className='text-3xl font-semibold font-serif' id="aboutL">TENTANG KAMI</p>
                </div>
                <About />
            </div>

            {/* Service Section */}
            <div className='pt-10' id="service">
                <Image src={iconService} alt="Service Icon" width={50} height={50} />
                <div className="flex items-center">

                    <p className='text-3xl font-semibold font-serif pb-6' id="serviceL">LAYANAN KAMI</p>
                </div>
                <Service />
            </div>

            <div className='pt-10' id="portofolio">
                <Image src={iconPortofolio} alt="Portofolio Icon" width={50} height={50} />
                <div className="flex items-center">

                    <p className='text-3xl font-semibold font-serif pb-6' id="portofolioL">PORTOFOLIO KAMI</p>
                </div>
                <Portofolio />
            </div>

            <div className='py-10' id="contact">
                <Image src={iconContact} alt="Contact Icon" width={50} height={50} />
                <div className="flex items-center">
                    <p className='text-3xl font-semibold font-serif pb-6' id="contactL">KONTAK KAMI</p>
                </div>
                <Contact />
            </div>
        </div>
    );
};

export default Home;
