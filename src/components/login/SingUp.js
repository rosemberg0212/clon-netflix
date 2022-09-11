import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../img/logo.png'
import Footer from '../layout/Footer'

const SingUp = () => {
    const [use, setuse] = useState({
        email: 'test1@gmail.com',
        password: '1234567'
    })


    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        navigate('/contenido')
        setuse({
            email: 'test1@gmail.com',
            password: '1234567'
        })
    }
    return (
        <div className='SingUp'>
            <Link to='/'>
                <img src={img} alt='logo' />
            </Link>

            <div className='content-g'>
                <div className='conten-form'>
                    <div className='sub-form'>
                        <h2>Inicia sesión</h2>
                        <form onSubmit={onSubmit}>
                            <input
                                type='mail'
                                placeholder='Email o número de teléfono'
                                className='input'
                                value={use.email}
                            />
                            <input
                                type='password'
                                placeholder='Contraseña'
                                className='input'
                                value={use.password}
                            />

                            <button>Iniciar sesión</button>
                            <div className='ayuda'>
                                <div className='check'>
                                    <input type='checkbox' className='checkbox' />
                                    <p>Recuerdame</p>
                                </div>
                                <a href='/'>¿Necesitas ayuda?</a>
                            </div>
                        </form>
                        <div className='primera'>
                            <p>¿Primera vez en Netflix? <a href='/'>Suscríbete ahora.</a></p>
                            <p className='ultiP'>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <a href='/'>Más info.</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer>
                <div className='footer-login'>
                    <p className='title'>¿Preguntas? Llama al 01 800 917 1564</p>
                    <div className='grid'>
                        <div className='flex'>
                            <a href='/'>Preguntas frecuentes</a>
                            <a href='/'>Preferencias de cookies</a>
                            <select>
                                <option>Español</option>
                                <option>English</option>
                            </select>
                        </div>
                        <div className='flex'>
                            <a href='/'>Centro de ayuda</a>
                            <a href='/'>Información corporativa</a>
                        </div>
                        <div className='flex'>
                            <a href='/'>Términos de uso</a>
                        </div>
                        <div className='flex'>
                            <a href='/'>Privacidad</a>
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}

export default SingUp