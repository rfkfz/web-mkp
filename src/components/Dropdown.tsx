import React, { useState } from 'react';

const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-black bg-opacity-75 w-76 p-8 rounded-lg shadow-xl">
                <button
                    onClick={closeDropdown}
                    className="absolute top-0 right-0 m-3 text-white hover:text-gray-800 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <ul className="space-y-6">

                    <li>
                        <div
                            onClick={() => {
                                window.location.href = '#about';
                                closeDropdown();
                            }}
                            className="flex items-center justify-between text-blue-500 hover:underline cursor-pointer"
                        >
                            <span>About</span>
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => {
                                window.location.href = '#service';
                                closeDropdown();
                            }}
                            className="flex items-center justify-between text-blue-500 hover:underline cursor-pointer"
                        >
                            <span>Service</span>
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => {
                                window.location.href = '#portfolio';
                                closeDropdown();
                            }}
                            className="flex items-center justify-between text-blue-500 hover:underline cursor-pointer"
                        >
                            <span>Portfolio</span>
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => {
                                window.location.href = '#contact';
                                closeDropdown();
                            }}
                            className="flex items-center justify-between text-blue-500 hover:underline cursor-pointer"
                        >
                            <span>Contact</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
