import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import imgAbout from '../assets/image/img-about.jpeg';
import imgAbout2 from '../assets/image/Kucing.jpg';
import { useRouter } from "next/router"; // Import useRouter
import {
    CardImg,
    CardText,
} from "reactstrap";

const cardStyle = { width: "20rem" };

export default function Portofolio() {
    const [hoveredCardRow1, setHoveredCardRow1] = useState<number | null>(null);
    const [hoveredCardRow2, setHoveredCardRow2] = useState<number | null>(null);
    const router = useRouter(); // Initialize the router

    const handleMouseEnterRow1 = (index: number) => {
        setHoveredCardRow1(index);
    };

    const handleMouseEnterRow2 = (index: number) => {
        setHoveredCardRow2(index);
    };

    const handleMouseLeave = () => {
        setHoveredCardRow1(null);
        setHoveredCardRow2(null);
    };

    const handleButtonClick = (id: number) => {
        router.push(`/portofolio/${id}`);
    };

    const cardsData = [
        {
            id: 1,
            title: "Daily Mix 1",
            description: "Deskripsi 1",
            image: imgAbout.src,
        },
        {
            id: 2,
            title: "Daily Mix 2",
            description: "Deskripsi 2",
            image: imgAbout2.src,
        },
        {
            id: 3,
            title: "Daily Mix 3",
            description: "Deskripsi 3",
            image: imgAbout.src,
        },
        {
            id: 4,
            title: "Daily Mix 4",
            description: "Deskripsi 4",
            image: imgAbout.src,
        },
    ];

    const cardsData2 = [
        {
            id: 5,
            title: "Daily Mix 1",
            description: "Deskripsi 5",
            image: imgAbout.src,
        },
        {
            id: 6,
            title: "Daily Mix 2",
            description:
                "Selamat datang di bengkel las kami! Kami adalah sebuah tim profesional yang berpengalaman dalam industri las.                         Selamat datang di bengkel las kami! Kami adalah sebuah tim profesional yang berpengalaman dalam industri las.                        Selamat datang di bengkel las kami! Kami adalah sebuah tim profesional yang berpengalaman dalam industri las. Selamat datang di bengkel las kami! Kami adalah sebuah tim profesional yang berpengalaman dalam industri las.                         Selamat datang di bengkel las kami! Kami adalah sebuah tim profesional yang berpengalaman dalam industri las.                        Selamat datang di bengkel las kami! Kami adalah sebuah tim profesional yang berpengalaman dalam industri las               ",
            image: imgAbout2.src,
        },
        {
            id: 7,
            title: "Daily Mix 3",
            description: "Deskripsi 7",
            image: imgAbout.src,
        },
        {
            id: 8,
            title: "Daily Mix 4",
            description: "Deskripsi 8",
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

                        <CardBody className="p-4 border-gray-300 relative mb-7">
                            <CardText className="text-justify text-md">{card.description}</CardText>
                        </CardBody>
                        <button
                            className="w-full absolute bottom-0  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-b-lg"
                            onClick={() => handleButtonClick(card.id)}
                        >
                            Lihat Detail
                        </button>
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

                        <CardBody className="p-4 border-gray-300 relative mb-7">
                            <CardText className="text-justify text-md">{card2.description}</CardText>
                        </CardBody>
                        <button
                            className="w-full absolute bottom-0  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-b-lg"
                            onClick={() => handleButtonClick(card2.id)} // Handle button click
                        >
                            Lihat Detail
                        </button>
                    </Card>
                ))}
            </div>

        </section>
    );
}