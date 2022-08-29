import React from 'react'
import Plan from '../components/Home/Plan'
import SectionDisf from '../components/Home/SectionDisf'
import SectionDl from '../components/Home/SectionDl'
import SectionNinos from '../components/Home/SectionNinos'
import SectionTV from '../components/Home/SectionTV'

const Home = () => {
  return (
    <>
        <Plan/>
        <SectionTV/>
        <SectionDl/>
        <SectionDisf/>
        <SectionNinos/>
    </>
  )
}

export default Home