import React from 'react'
import HospitalCard from './HospitalCard'

const CheckBedAvailability = () => {
  return (
    <div className='overflow-scroll gap-5 w-full flex flex-col p-5 h-screen bg-blue-400'>
      <HospitalCard/>
      <HospitalCard/>
      <HospitalCard/>
      
    </div>
  )
}

export default CheckBedAvailability