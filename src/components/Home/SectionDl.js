import React from 'react'
import img from '../../img/dwl.jpeg'

const SectionDl = () => {
  return (
    <div className='SectionDl'>
      {window.screen.width <= 760 ? (
        <>
          <div className='info'>
            <div className='sub'>
              <h2>Descarga tus series para verlas offline.</h2>
              <p>Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
            </div>
          </div>
          <div className='img'>
            <img src={img} alt='img' />
          </div>
        </>
      ) : (
        <>
          <div className='img'>
            <img src={img} alt='img' />
          </div>
          <div className='info'>
            <div className='sub'>
              <h2>Descarga tus series para verlas offline.</h2>
              <p>Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default SectionDl