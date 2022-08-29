import React from 'react'
import img from '../../img/logo.png'
import {IoIosArrowForward} from 'react-icons/io'

const Plan = () => {
    return (
        <div className='plan'>
            <div className='header'>
                <div className='logo'>
                    <img src={img} alt='logo' className='logo-nexflix'/>
                </div>
                <div className='sesion'>
                    <select>
                        <option>Español</option>
                        <option>English</option>
                    </select>
                    <button>Iniciar sesión</button>
                </div>
            </div>

            <div className='info'>
                <div className='title'>
                    <h2>Películas y series ilimitadas y mucho más.</h2>
                    <p>Disfruta donde quieras. Cancela cuando quieras.</p>
                </div>
                <div className='cuenta'>
                    <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
                    <div className='correo'>
                        <input type='mail' placeholder='Email'/>
                        <button>Comenzar <IoIosArrowForward/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan