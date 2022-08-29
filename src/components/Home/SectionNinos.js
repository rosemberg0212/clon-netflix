import React from 'react'
import img from '../../img/niños.jpeg'

const SectionNinos = () => {
    return (
        <div className='SectionNinos'>
            <div className='img'>
                <img src={img} alt='img' />
            </div>
            <div className='info'>
                <div className='sub'>
                    <h2>Crea perfiles para niños.</h2>
                    <p>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</p>
                </div>
            </div>
        </div>
    )
}

export default SectionNinos