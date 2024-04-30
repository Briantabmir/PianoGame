import React from 'react';

const Footer = ({ creator }) => {
    return (
        <footer className="text-center mt-20 py-10 bg-gray-200">
            <p className="text-black">Creado por {creator}</p>
        </footer>
    );
};

export default Footer;
