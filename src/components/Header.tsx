import React from 'react';

const Header: React.FC = () => {
    const [isLightMode, setIsLightMode] = React.useState(true);

    const toggleViewMode = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <header style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff' }}>
            <h1 style={{ fontWeight: 'bold' }}>High Point</h1>
            <button onClick={toggleViewMode} style={{ cursor: 'pointer', padding: '5px 10px' }}>
                {isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
        </header>
    );
};

export default Header;