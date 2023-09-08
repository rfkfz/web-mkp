// components/Chatbot.tsx

import React from 'react';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import iconWA from '@/assets/icon/icon-whatsapp.svg';
import Image from 'next/image';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4">
            <button onClick={toggleChatbot} className="p-2 bg-blue-500 text-white rounded-full">
                <Image src="/assets/icon/icon-whatsapp.svg" alt="WhatsApp Icon" width={24} height={24} />
            </button>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {(ref) => (
                    <div ref={ref} className="bg-white p-4 rounded-lg shadow-md mb-4">
                        {/* Chatbot content */}
                        <p>This is the chatbot content</p>
                    </div>
                )}
            </Transition>
        </div>
    );
};
export default Chatbot;
