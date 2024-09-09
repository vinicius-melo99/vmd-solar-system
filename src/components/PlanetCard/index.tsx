// import React from 'react'
import './styles.css';

type PlanetCardProps = {
  planetName: string,
  planetImage: string,
  size: number
}

const index = ({ planetName, planetImage, size }: PlanetCardProps) => {
  return (
    <div className='planetCard'>
      <img src={ planetImage } alt={ planetName } style={{ width: `${size}px` }}/>
      <p>{ planetName }</p>
    </div>
  )
}

export default index