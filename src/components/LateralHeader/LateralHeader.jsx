import React, { useState } from 'react';
import './LateralHeader.css';

function LateralHeader() {
    const [hovered, setHovered] = useState(null);

    const buttons = [
        { id: 'btn-dashboard', icon: 'fa-house', label: 'Dashboard' },
        { id: 'btn-analytics', icon: 'fa-chart-simple', label: 'Analytics' },
        { id: 'btn-finance', icon: 'fa-coins', label: 'Financial' },
    ];

    return (
        <nav id='navegation-menu-area'>
            <ul className='navegation-menu'>
                {buttons.map((btn, index) => (
                    <li
                        key={btn.id}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        
                        className="navegation-item"
                    >
                        <button type="button" className='navegation-button' id={btn.id}>
                            <i className={`fa-solid ${btn.icon}`}></i>
                        </button>

                        {hovered === index && (
                            <span className="tooltip">
                                {btn.label}
                                <span className='tooltip-caret'></span>
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default LateralHeader;
