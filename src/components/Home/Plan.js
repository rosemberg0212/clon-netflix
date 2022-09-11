import React from 'react'
import img from '../../img/logo.png'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Plan = () => {
    const plan = ()=>{
        Swal.fire(
            'Esto es un proyecto personal, por lo cual no es necesario que compre ningun servicio, puede iniciar sesion con las credenciales pre establecidas!',
          )
    }
    return (
        <div className='plan'>
            <div className='header'>
                <div className='logo'>
                    <img src={img} alt='logo' className='logo-nexflix' />
                </div>
                <div className='sesion'>
                    <select>
                        <option>Español</option>
                        <option>English</option>
                    </select>
                    <Link to='login'>
                        <button>Iniciar sesión</button>
                    </Link>
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
                        <input type='mail' placeholder='Email' />
                        <button onClick={plan}>Comenzar <IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan