import React from 'react'
import { useNavigate } from 'react-router-dom'
import SingleEventBox from '../SingleEventBox'

export default function Night3() {
  const navigate=useNavigate();
  return (
    <div className='eventpage single-component'>
        <h1>#Day 3 (<i class="fa-solid fa-moon" style={{color:"#fab005"}}></i> Night Events)</h1>
      <div className='single-event-box'>
      <SingleEventBox/>
      <SingleEventBox/>
      <SingleEventBox/>
      <SingleEventBox/>
      <SingleEventBox/>
       </div>
       <div onClick={()=>{navigate("/events/day-1")}} class="arrow-container">
       <div class="arrow-down my-2"></div>
       <div  class="arrow-down my-2"></div>
        </div>
    </div>
  )
}
