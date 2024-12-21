import React from "react";
import "./social.css"; // Ensure this file path is correct

const SocialBtn = () => {
    return (
        <div className="social">
            <a href="#">
                <div className="social-btn color-telegram">
                    <div className="icons8-telegram-app"></div>
                    <p className="order-1 google-font margin-telegram">Telegram</p>
                </div>
            </a>
            <a href="#">
                <div className="social-btn color-instagram">
                    <div className="icons8-instagram"></div>
                    <p className="order-1 google-font margin-instagram">Instagram</p>
                </div>
            </a>
            <a href="#">
                <div className="social-btn color-whatsapp">
                    <div className="icons8-whatsapp"></div>
                    <p className="order-1 google-font margin-instagram">WhatsApp</p>
                </div>
            </a>
        </div>
    );
};

export default SocialBtn;
