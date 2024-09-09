// import React from 'react'
import './styles.css';
import PlanetCard from '../PlanetCard';

type PlanetsProps = {
  planets: {
    name: string,
    image: string,
    size: number,
  }[]
}
  

const index = ({ planets }: PlanetsProps) => {
  return (
    <div className='planets-container'>
      { planets.map(({ name, image, size }) => (
        <PlanetCard 
          key={ name }
          planetName={ name }
          planetImage={ image }
          size={ size }
        />
      )) }
    </div>
  )
}

export default index