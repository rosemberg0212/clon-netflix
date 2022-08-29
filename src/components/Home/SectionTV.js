import React from 'react'
import img from '../../img/tv-nf.jpeg'

const SectionTV = () => {
    return (
        <div className='sectionTV'>
            <div className='info'>
                <h2>Disfruta en tu TV.</h2>
                <p>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
            </div>
            <div className='tv'>
                <img src={img} alt='img' />
            </div>
        </div>
    )
}

export default SectionTV