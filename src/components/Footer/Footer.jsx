import React from 'react'
import './Footer.scss'

const codeWarsIcon = 'https://raw.githubusercontent.com/codewars/branding/refs/heads/master/logo.png';


const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <h3>Socials</h3>
                <div className='footer-content'>
                    <div className="footer-socials-container">
                        <ul>
                            <li>
                                <a href='https://wwww.linkedin.com/in/robertcego' target='_blank' rel='noopener noreferrer'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='LinkedIn' style={{ width: '48px', height: '48px' }} />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.github.com/Robertcego' target='_blank' rel='noopener noreferrer'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='Github' style={{ width: '48px', height: '48px' }} />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.codewars.com/users/Robertcego' target='_blank' rel='noopener noreferrer'>
                                    <img
                                        src={codeWarsIcon}
                                        alt='Codewars'
                                        title='Codewars'
                                        style={{ width: '48px', height: '48px' }}
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer