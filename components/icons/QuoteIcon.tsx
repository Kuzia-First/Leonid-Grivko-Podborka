import React from 'react';

const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M13.593 3.516H8.484V12h5.109L12 18.281h5.11L20.344 3.516h-6.75zm-8.484 0H.001V12h5.109L3.516 18.281h5.109L11.859 3.516H5.11z"/>
    </svg>
);

export default QuoteIcon;