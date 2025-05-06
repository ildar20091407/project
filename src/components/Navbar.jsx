import React from 'react';
import { Link } from "react-router-dom";
import background from '../assets/images/Rectangle 2.png';
import proweb from '../assets/images/PROWEB.png';
import logoLnguage from '../assets/images/computer-icons-language-icon-png-favpng-NQSGiSmKDpKJpGXw1p4tMdi6Z.jpg';
import { useTranslation } from "react-i18next";

const links = [
  { title: 'Главная', url: '/' },
  { title: 'Продукты', url: '/products' },
  { title: 'Пользователи', url: '/users' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();

    const changeLang  = (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
    };

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav__box">
            <div className="nav__right">
              <div className="logo">
                <img src={proweb} className="nav__img" alt="PROWEB Logo" />
              </div>
            </div>
            <div className="nav__left">
              <ul className="nav__list">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.url} className="nav__link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="header__nav-list">
                <li className="header__nav-li">

                      <img src={logoLnguage} className="header__nav-button" alt="Language selection"/>

                  <ul className="header__nav-dropdown">
                    <li><button onClick={() => changeLang('en')}>En</button></li>
                    <li><button onClick={() => changeLang('ru')}>Ru</button></li>
                    <li><button onClick={() => changeLang('uz')}>Uz</button></li>

                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="nav__bottom">
        <img src={background} className="background" alt="" />
        <div className="nav__botom-box">
          <div className="nav__title">
            <h2 className="title">{t("Добро пожаловать на мой сайт ")}</h2>
            <div className="form">
              <button className="nav__botom-btn">Позвонить</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
