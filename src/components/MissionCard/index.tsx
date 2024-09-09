// import React from 'react'
import './styles.css';
import calendar from '../../assets/calendar.svg';
import pointer from '../../assets/pointer.svg';
import destinationImg from '../../assets/destination.svg';

type MissionsProps = {
    name: string,
    year: string,
    country: string,
    destination: string,
}

const index = ({ name, year, country, destination }: MissionsProps) => {
  return (
    <div className='mission-card'>
      <section className='mission-card-title'>
        {name}
      </section>
      <section className='mission-card-info'>
        <span><img src={calendar} />{year}</span>
        <span><img src={pointer} />{country}</span>
        <span><img src={destinationImg} />{destination}</span>
      </section>
    </div>
  )
}

export default index;