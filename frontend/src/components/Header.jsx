import React, { useState, useRef, useEffect } from 'react';
import '../styles/header.css';
import loginIcon from "../images/loginIcon.png";

const Header = ({ activeComponent, setActiveComponent, onOpenLoginModal }) => {
    const [activePath, setActivePath] = useState(window.location.pathname);
    const [isSubNavOpen, setIsSubNavOpen] = useState(false);
    const nestedLinkRef = useRef(null);
    const subNavRef = useRef(null);

    const handleNavigation = (path) => {
        setActivePath(path);
    };

    const handleSubNavToggle = () => {
        setIsSubNavOpen(!isSubNavOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                nestedLinkRef.current &&
                !nestedLinkRef.current.contains(event.target) &&
                subNavRef.current &&
                !subNavRef.current.contains(event.target)
            ) {
                setIsSubNavOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <header className="header">
            <nav>
                <a
                    href="#"
                    className={`navLink ${activeComponent === 'mainWindow' ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveComponent('mainWindow');
                        console.log("clicked MainWindow");
                    }}
                >
                    Главная
                </a>
                <a
                     href="/instructors"
                     className="navLink"
                    onClick={(e) => {
                       e.preventDefault();
                        setActiveComponent("instructors");
                        console.log("clicked instructors");
                    }}
                >
                    Преподаватели
                </a>
                <a
                    href="/contacts"
                    className="navLink"
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveComponent("contacts");
                        console.log("clicked contacts");
                    }}
                >
                    Контакты
                </a>
                <a
                    href="/schedule"
                    className="navLink"
                      onClick={(e) => {
                           e.preventDefault();
                        setActiveComponent("schedule");
                        console.log("clicked schedule");
                    }}
                >
                    Расписание занятий
                </a>
                <div
                    className="nestedContainer"
                    ref={nestedLinkRef}
                >
                    <div
                        className={`navLink nestedLink `}
                        onClick={handleSubNavToggle}
                    >
                        Учебные работы
                    </div>
                    <div
                        className={`subNav ${isSubNavOpen ? 'showSubNav' : ''}`}
                        ref={subNavRef}
                    >
                        <a
                             href="/courses/lectures"
                            className={`navLink ${activePath === '/courses/lectures' ? 'active' : ''}`}
                             onClick={(e) => {
                                 e.preventDefault();
                                 setActiveComponent("lectures");
                             }}
                        >
                            Лекции
                        </a>
                        <a
                             href="/courses/seminars"
                            className={`navLink ${activeComponent === '/courses/seminars' ? 'active' : ''}`}
                             onClick={(e) => {
                                 e.preventDefault();
                                 setActiveComponent("seminars");
                             }}
                        >
                            Семинары
                        </a>
                    </div>
                </div>
            </nav>
              <div className="loginContainer">
                <a href="#" className="loginIcon" title="Вход в личный кабинет" onClick={onOpenLoginModal}>
                    <img src={loginIcon} alt="Login Icon" />
                </a>
            </div>
        </header>
    );
};

export default Header;