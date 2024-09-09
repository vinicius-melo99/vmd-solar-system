// import React from 'react'
import './styles.css';
import Title from '../Title';
import MissionListContainer from '../MissionListContainer';

const index = () => {
  return (
   <div className='missions-container'>
    <Title headline={'Missões'} />
    <MissionListContainer />
   </div>
  )
}

export default index