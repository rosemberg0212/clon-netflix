import React, { useEffect, useState } from 'react'
import img from '../../img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {

  const [show, setshow] = useState(false)

  // metodo para definir el color de fondo de la barra de navegacio
  const hideHeader = () => {
    if (window.scrollY > 100) {
      setshow(true)
    } else {
      setshow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', hideHeader);
    return () => window.removeEventListener('scroll', hideHeader)
  }, [])

  return (
    <div className={`header`}>
      <header className={`${show && 'traspa'}`}>
        <div className='menu'>
        
        <Link to='/'><img src={img} alt='logo' /></Link>
          
          <ul>
            <li>Inicio</li>
            <li>Series</li>
            <li>Películas</li>
            <li>Novedades populares</li>
            <li>Mi lista</li>
            <li>Explora por idiomas</li>
          </ul>
        </div>

        <ul className='seconMenu'>
          <li>lupa</li>
          <li>Niños</li>
          <li>campana</li>
          <li>perfil</li>
        </ul>
      </header>
    </div>
  )
}

export default Header