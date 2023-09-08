import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import imgAbout from '../assets/image/img-about.jpeg';
import {
    CardImg,
    CardText,
} from "reactstrap";

const cardStyle = { width: "20rem" };

export default function Service() {
    const [hoveredCardRow1, setHoveredCardRow1] = useState<number | null>(null);
    const [hoveredCardRow2, setHoveredCardRow2] = useState<number | null>(null);
    const [hoveredCardRow3, setHoveredCardRow3] = useState<number | null>(null);

    const handleMouseEnterRow1 = (index: number) => {
        setHoveredCardRow1(index);
    };

    const handleMouseEnterRow2 = (index: number) => {
        setHoveredCardRow2(index);
    };

    const handleMouseEnterRow3 = (index: number) => {
        setHoveredCardRow3(index);
    };

    const handleMouseLeave = () => {
        setHoveredCardRow1(null);
        setHoveredCardRow2(null);
        setHoveredCardRow3(null);

    };

    const cardsData = [
        {
            id: 1,
            title: "Pagar",
            description: "Pagar adalah struktur teknis yang dirancang dengan presisi untuk memenuhi berbagai kebutuhan praktis Anda. Mereka bukan hanya pembatas fisik, tetapi juga elemen penting yang memberikan keamanan, privasi, dan kendali akses yang Anda butuhkan.",
            image: imgAbout.src,
        },
        {
            id: 2,
            title: "Kanopi",
            description: "Kanopi adalah solusi praktis dan elegan untuk melindungi area luar rumah Anda dari efek buruk cuaca dan sinar matahari yang berlebihan. Mereka menghadirkan kenyamanan dan estetika dalam satu paket, membantu Anda menikmati luar ruangan dengan lebih baik.",
            image: imgAbout.src,
        },
        {
            id: 3,
            title: "Konstruksi Baja",
            description: "Konstruksi baja adalah pondasi yang kokoh dan andal bagi proyek-proyek besar. Dengan kekuatan luar biasa dan ketahanan yang tak tertandingi, baja adalah bahan utama dalam membangun infrastruktur yang bertahan lama dan tahan terhadap tantangan lingkungan dan waktu.",
            image: imgAbout.src,
        },
        {
            id: 4,
            title: "Kusen Alumunium",
            description: "Kusen aluminium adalah pilihan unggul untuk rumah modern yang menggabungkan keindahan, ketahanan, dan kualitas dalam satu produk. Mereka membawa sentuhan elegan ke desain interior dan eksterior Anda.",
            image: imgAbout.src,
        },
    ];

    const cardsData2 = [
        {
            id: 5,
            title: "Railing Balkon",
            description: "Railing balkon adalah elemen penting dalam desain eksterior yang menggabungkan fungsi keamanan dengan estetika yang menawan. Mereka adalah detail yang memperindah balkon Anda, menambahkan karakter dan perlindungan yang diperlukan.",
            image: imgAbout.src,
        },
        {
            id: 6,
            title: "Tralis Jendela",
            description: "Tralis jendela adalah sentuhan yang sangat penting untuk menjaga rumah Anda aman tanpa mengorbankan estetika. Mereka adalah solusi yang kuat dan elegan untuk melindungi rumah Anda dari intrusi dan memberikan Anda ketenangan pikiran.",
            image: imgAbout.src,
        },
        {
            id: 7,
            title: "Booth Container",
            description: "Booth container adalah solusi yang inovatif dan serbaguna. Booth container menghadirkan fleksibilitas luar biasa dalam merancang ruang yang sesuai dengan berbagai aplikasi seperti kios ritel, kantor lapangan, stan pameran, tempat makanan dan minuman, dan masih banyak lagi.",
            image: imgAbout.src,
        },
        {
            id: 8,
            title: "Gerobak Kaki Lima",
            description: "Gerobak kaki lima adalah ikon kelezatan kuliner jalanan yang dapat Anda nikmati dengan mudah. Mereka adalah panggung bagi hidangan lezat dari berbagai budaya yang memanjakan lidah Anda, semua dalam genggaman tangan Anda.",
            image: imgAbout.src,
        },
    ];
    const cardsData3 = [
        {
            id: 9,
            title: "Hoarding Wall",
            description: "Hoarding Wall, atau dikenal juga sebagai dinding hoarding, adalah solusi penting untuk memastikan keamanan dan privasi dalam proyek konstruksi. Ini adalah penghalang yang kokoh dan dapat dipercaya yang membantu menjaga pekerja, peralatan, dan lingkungan sekitarnya tetap aman dari mata orang yang tidak berkepentingan.",
            image: imgAbout.src,
        },
        {
            id: 10,
            title: "Kitchen Set",
            description: "Kitchen set adalah kunci untuk mengubah dapur Anda menjadi ruang yang penuh inspirasi dan fungsional. Ini adalah pusat kegiatan rumah tangga, tempat di mana rasa dan kreativitas bersatu untuk menciptakan hidangan lezat dan momen berharga bersama keluarga dan teman-teman.",
            image: imgAbout.src,
        },

    ];

    return (
        <section>
            <div className="flex justify-center space-x-4 pt-10">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        style={cardStyle}
                        className={`border-2 shadow-lg rounded-xl transform transition-transform ${hoveredCardRow1 === index ? "scale-105" : ""
                            }`}
                        onMouseEnter={() => handleMouseEnterRow1(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <CardImg
                            className="border-2 rounded-t-lg"
                            alt="..."
                            src={card.image}
                            top
                        ></CardImg>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                            <p className="text-lg uppercase font-semibold">{card.title}</p>
                        </CardHeader>

                        <CardBody className="p-4 border-gray-300 relative">
                            <CardText className="text-justify text-md">{card.description}</CardText>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center space-x-4 pt-10">
                {cardsData2.map((card2, index2) => (
                    <Card
                        key={index2}
                        style={cardStyle}
                        className={`border-2 shadow-lg rounded-xl transform transition-transform ${hoveredCardRow2 === index2 ? "scale-105" : ""
                            }`}
                        onMouseEnter={() => handleMouseEnterRow2(index2)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <CardImg
                            className="border-2 rounded-t-lg"
                            alt="..."
                            src={card2.image}
                            top
                        ></CardImg>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                            <p className="text-lg uppercase font-semibold">{card2.title}</p>
                        </CardHeader>

                        <CardBody className="p-4 border-gray-300 relative">
                            <CardText className="text-justify text-md">{card2.description}</CardText>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center space-x-4 pt-10">
                {cardsData3.map((card3, index3) => (
                    <Card
                        key={index3}
                        style={cardStyle}
                        className={`border-2 shadow-lg rounded-xl transform transition-transform ${hoveredCardRow3 === index3 ? "scale-105" : ""
                            }`}
                        onMouseEnter={() => handleMouseEnterRow3(index3)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <CardImg
                            className="border-2 rounded-t-lg"
                            alt="..."
                            src={card3.image}
                            top
                        ></CardImg>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                            <p className="text-lg uppercase font-semibold">{card3.title}</p>
                        </CardHeader>

                        <CardBody className="p-4 border-gray-300 relative">
                            <CardText className="text-justify text-md">{card3.description}</CardText>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    );
}