import React from 'react'
import Plan from '../components/Home/Plan'
import SectionDisf from '../components/Home/SectionDisf'
import SectionDl from '../components/Home/SectionDl'
import SectionNinos from '../components/Home/SectionNinos'
import SectionTV from '../components/Home/SectionTV'
import Footer from '../components/layout/Footer'

const Home = () => {
    return (
        <>
            <Plan />
            <SectionTV />
            <SectionDl />
            <SectionDisf />
            <SectionNinos />
            <Footer>

                <div className='footer-home'>
                    <p className='title'>¿Preguntas? Llama al 01 800 917 1564</p>
                    <div className='grid'>
                        {window.screen.width <= 768 ? (
                            <>
                                <div className='flexResponsive'>
                                    <div className='flex'>
                                        <a href='/'>Preguntas frecuentes</a>
                                        <a href='/'>Relaciones con inversionistas</a>
                                        <a href='/'>Formas de ver</a>
                                        <a href='/'>Información corporativa</a>
                                        <a href='/'>Solo en Netflix</a>
                                        <select>
                                            <option>Español</option>
                                            <option>English</option>
                                        </select>
                                        <p>Netflix Colombia</p>
                                    </div>

                                    <div className='flex'>
                                        <a href='/'>Centro de ayuda</a>
                                        <a href='/'>Empleo</a>
                                        <a href='/'>Términos de uso</a>
                                        <a href='/'>Contáctanos</a>
                                    </div>
                                </div>

                                <div className='flexResponsive'>
                                    <div className='flex'>
                                        <a href='/'>Cuenta</a>
                                        <a href='/'>Canjear tarjetas de regalo</a>
                                        <a href='/'>Privacidad</a>
                                        <a href='/'>Prueba de velocidad</a>
                                    </div>
                                    <div className='flex'>
                                        <a href='/'>Prensa</a>
                                        <a href='/'>Comprar tarjetas de regalo</a>
                                        <a href='/'>Preferencias de cookies</a>
                                        <a href='/'>Avisos legales</a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex'>
                                    <a href='/'>Preguntas frecuentes</a>
                                    <a href='/'>Relaciones con inversionistas</a>
                                    <a href='/'>Formas de ver</a>
                                    <a href='/'>Información corporativa</a>
                                    <a href='/'>Solo en Netflix</a>
                                    <select>
                                        <option>Español</option>
                                        <option>English</option>
                                    </select>
                                    <p>Netflix Colombia</p>
                                </div>
                                <div className='flex'>
                                    <a href='/'>Centro de ayuda</a>
                                    <a href='/'>Empleo</a>
                                    <a href='/'>Términos de uso</a>
                                    <a href='/'>Contáctanos</a>
                                </div>
                                <div className='flex'>
                                    <a href='/'>Cuenta</a>
                                    <a href='/'>Canjear tarjetas de regalo</a>
                                    <a href='/'>Privacidad</a>
                                    <a href='/'>Prueba de velocidad</a>
                                </div>
                                <div className='flex'>
                                    <a href='/'>Prensa</a>
                                    <a href='/'>Comprar tarjetas de regalo</a>
                                    <a href='/'>Preferencias de cookies</a>
                                    <a href='/'>Avisos legales</a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Footer>
        </>
    )
}

export default Home