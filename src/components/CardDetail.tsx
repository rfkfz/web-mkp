import React from "react";
import Image from 'next/image';

interface CardDetailProps {
    title: string;
    description: string;
    image: string;
}

const CardDetail: React.FC<CardDetailProps> = ({ image, title, description }) => {
    return (
        <div className="bg-white p-6">
            <div className="relative h-64 w-full">
                <Image
                    src={image}
                    alt="Kucing"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
            <h1 className="text-gray-700 text-2xl font-semibold mb-4">{title}</h1>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default CardDetail;
