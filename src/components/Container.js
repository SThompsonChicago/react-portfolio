import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';

export default function Container () {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>

            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}