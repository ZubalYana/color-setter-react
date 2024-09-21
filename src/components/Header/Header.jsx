import React from "react";
import "./Header.css";
export default function Header() {
    return (
        <div className="Header">
            <div className="logo">Color project</div>
            <ul className="nav">
                <a href="#"><li>Головна</li></a>
                <a href="#"><li>Про проект</li></a>
            </ul>
            <button className="themeChanger">Тема</button>
        </div>
    );
}