import React from 'react';

const Burger = ({ showDropdown }) => {
    return (
        <div className={showDropdown ? 'burger is-active' : 'burger'}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    );
};

export default Burger;


