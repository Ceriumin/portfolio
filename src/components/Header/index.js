import React from 'react';
import './styles.css';

function Header({ children, content, style }) {
    return (
        <div className='header__container' style={style}>
            <div className='header'>
                <div className='point'/>
                <h1 style={{
                    color: 'grey',
                    fontSize: '1.25rem',
                    fontWeight: '500',
                    paddingLeft: '10px',
                    margin: '0'
                }}>{children}</h1>
            </div>
            <div className='header__content'>
                {content}
            </div>  
        </div>
    );
}

export default Header;