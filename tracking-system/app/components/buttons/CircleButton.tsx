import React from 'react';

interface CircleButtonProps {
    onClick: () => void;
}

const CircleButton = ({ onClick }: CircleButtonProps) => {
    return (
        <button
            className="w-9 h-9 rounded-full bg-indigo-500 hover:bg-indigo-700 text-white flex items-center justify-center"
            onClick={onClick}
        >
            <i className="fas fa-plus"></i>
            {/* Add your button content here */}
        </button>
    );
};

export default CircleButton;