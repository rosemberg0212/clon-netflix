import React from 'react'
import img from '../../img/strag.jpeg'

const SectionDisf = () => {
  return (
    <div className='SectionDisf'>
        <div className='info'>
            <div className='sub'>
                <h2>Disfruta donde quieras.</h2>
                <p>Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo adicional.</p>
            </div>
        </div>

        <div className='img'>
            <img src={img} alt='img'/>
        </div>
    </div>
  )
}

export default SectionDisf