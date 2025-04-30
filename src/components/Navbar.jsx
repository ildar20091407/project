import React from 'react'
import { Link } from "react-router-dom"
import background from '../assets/images/Rectangle 2.png'
import proweb from '../assets/images/PROWEB.png'


const links = [
    { title: 'Главная', url: '/' },
    { title: 'Продукты', url: '/products' },
    { title: 'Пользователи', url: '/users' },
]


const Navbar = () => {
  return (
    <>
    <nav className="nav">

<div className="container">
  <div className="nav__box">
<div className="nav__right">

  <div className="logo">
    <img src={proweb}/>
  </div>
</div>
<div className="nav__left">

            <ul className="nav__list">
                {links.map((link, i) => (
                    <li key={i}>
                        <Link to={link.url} className="nav__link">{link.title}</Link>
                    </li>
                ))}
            </ul>
</div>
  </div>
</div>
</nav>
       <nav className="nav__botom">
       <img src={background}  className="background" />
       <div className="nav__botom-box">
       
       <div className="nav__title">
       
           <h2 className="title">Добро пожаловать на мой сайт </h2>
           <div className="form">
       
           <button className="nav__botom-btn" >Позвонить</button>
           </div>
       </div>
       
       </div>
           </nav>
    </>
  )
}

export default Navbar