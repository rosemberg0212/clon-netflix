import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePeli } from '../../context/pelis/peliContext'
import img from '../../img/logo2.png'
import Header from '../layout/Header'
import Card from './Card'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Contenido = () => {
    const { getPelis, tendencias, nowPlaying, pelis, tend, now } = usePeli()
    console.log(pelis)

    // suprimir el parrafo si es demasiado largo
    // const truncate = (string, n) => string?.length > n ? `${string.substr(0, n - 1)}...` : string;
    // {truncate(pelis.ov, 160)}

    useEffect(() => {
        getPelis()
        nowPlaying()
        tendencias()
    }, [getPelis, nowPlaying, tendencias])

    const base_url = 'https://image.tmdb.org/t/p/w220_and_h330_face'
    return (
        <>
            <div className='Banner'>
                <Header />
                <div className='info'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={img} alt='logo' />
                        </Link>

                        <p>SERIE</p>
                    </div>

                    <h2>The Sadman</h2>
                    <p> Cuando Sandman, el ser cósmico que controla los sueños, es capturado y mantenido prisionero durante más de un siglo, debe viajar a través de diferentes mundos y líneas de tiempo para arreglar el caos que ha causado su ausencia.</p>
                    <div className='btns'>
                        <button className='repro'>Reproducir</button>
                        <button className='mas'>Más información</button>
                    </div>
                </div>
            </div>

            <div className='content-card'>
                <Card>
                    <div className='carrusel'>
                        <p>Tendencias</p>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={8}
                            slidesPerView={5}
                            navigation
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className='cards'
                        >
                            {pelis.map(peli => (
                                <SwiperSlide className='card-img'
                                key={peli?.id}>
                                <img src={`${base_url}${peli?.poster_path}`} alt='card' />
                            </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </Card>

                <Card>
                    <div className='carrusel'>
                        <p>Continuar viendo</p>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={8}
                            slidesPerView={5}
                            navigation
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className='cards'
                        >
                            {now.map(n => (
                                <SwiperSlide className='card-img'
                                key={n?.id}>
                                <img src={`${base_url}${n?.poster_path}`} alt='card' />
                            </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </Card>

                <Card>
                    <div className='carrusel'>
                        <p>Mi lista</p>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={8}
                            slidesPerView={5}
                            navigation
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className='cards'
                        >
                            {tend.map(t => (
                                <SwiperSlide className='card-img'
                                key={t?.id}>
                                <img src={`${base_url}${t?.poster_path}`} alt='card' />
                            </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Contenido