import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {
  return (
    <>
    <nav className='navigate_wrapper'>
        <ul>
            <li className='agenst_wrapper_nav'>
                <Link to='/agents'>
                    <span>Агентства</span>
                    <img src="/src/img/agetstvo.png"className="images_navitag" alt="logo-agenstvo" />
                </Link>
            </li>
            <li  className='frilans_wrapper_nav'>
                <Link to='/frilans'>
                    <span>Фрилансеры</span>
                    <img src="/src/img/frilanser.png"className="images_navitag" alt="logo-frilanstver" />
                </Link>
            </li>
            <li className='znaniya_wrapper_nav'>
                <Link to='/frilans'>
                    <span>Знания</span>
                    <img src="/src/img/znaniya.png"className="images_navitag" alt="logo-znaniya" />
                </Link>
            </li>
            <li className='vakansiya_wrapper_nav'>
                <Link to='/vakansiya'>
                    <span>Вакансия</span>
                    <img src="/src/img/vakansiya.png"className="images_navitag" alt="logo-vakansiya" />
                </Link>
            </li>
            <li className='instruments_wrapper_nav'>
                <Link to='/inst'>
                    <span>Инструменты</span>
                    <img src="/src/img/instrument.png"className="images_navitag" alt="logo-instrument" />
                </Link>
            </li>
            <li className='uslugi_wrapper_nav'>
                <Link to='/uslugi'>
                    <span>Услуги деловые предложения</span>
                    <img src="/src/img/uslugi.png"className="images_navitag" alt="logo-uslugi" />
                </Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navigation