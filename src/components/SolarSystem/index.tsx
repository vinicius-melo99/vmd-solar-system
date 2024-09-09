// import React from 'react'
import Title from '../Title';
import PlanetContainer from '../PlanetContainer';
import planets from '../../data/planets';
import './styles.css';

const index = () => {
  return (
    <div>
      <Title headline='Planetas'/>
      <PlanetContainer  planets={planets} />
    </div>
  )
}

export default index