import Link from 'next/link';
import React from 'react';

interface CircleButtonProps {
    linkTo: string;
    className?: string;
}

const CircleButton = ({ linkTo }: CircleButtonProps) => {
    return (
        <Link 
            href={linkTo}
            className="w-9 h-9 rounded-full bg-indigo-500 hover:bg-indigo-700 text-white flex items-center justify-center"
        >
            <i className="fas fa-plus"></i>
            {/* Add your button content here */}
        </Link>
    );
};

export default CircleButton;