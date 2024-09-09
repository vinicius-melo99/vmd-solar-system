// import React from 'react'
import './styles.css';
import MissionCard from '../MissionCard';
import missions from '../../data/missions';

const index = () => {
  return (
   <div className='mission-list-container'>
    {missions.map(({ name, year, country, destination }) => (
      <MissionCard 
        key={name}
        name={name}
        year={year}
        country={country}
        destination={destination}
      />
    ))}
   </div>
  )
}

export default index