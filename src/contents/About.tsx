import React, { useState } from 'react';
import Image from 'next/image';
import imgAbout from '../assets/image/img-about.jpeg';

const About: React.FC = () => {
    return (
        <section>
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="w-full md:w-1/2 " >
                    <p className='text-justify text-md mr-10'>
                        Selamat datang di bengkel las kami! Kami adalah sebuah tim profesional yang berpengalaman dalam industri las.
                        Dengan komitmen kami untuk memberikan hasil kerja terbaik, kami telah melayani berbagai proyek las dari skala kecil hingga besar.
                        Kami mengutamakan kualitas, ketepatan waktu, dan kepuasan pelanggan.
                        Dengan peralatan canggih dan tenaga kerja terampil, kami siap untuk mengatasi berbagai tantangan dalam pekerjaan las, termasuk fabrikasi, perbaikan, dan pembuatan berbagai jenis konstruksi logam.
                        Kami bangga menjadi bagian dari industri yang terus berkembang, dan kami selalu berusaha untuk memenuhi harapan pelanggan kami.
                        Jika Anda mencari solusi las yang andal, silakan hubungi kami dan temukan bagaimana kami dapat membantu Anda mewujudkan proyek Anda dengan hasil yang memuaskan.
                        Terima kasih atas kepercayaan Anda kepada bengkel las kami!
                    </p>
                </div>
                <div className="shadow-lg w-1/3 md:w-95  border-2 border-black rounded-xl" id='about-border'>
                    <Image src={imgAbout} alt="Kucing" className='w-full rounded-xl' />
                </div>
            </div>
        </section>
    );
};
export default About;
