import React from 'react'
import NavPage from '../Navbar/Navbar'
import './SponsorPage.css'

const SponsorPage = () => {
  return (
    <div>
      <div className='black'>
        <NavPage/>
        <div className='bg-sponsors header'>
          <h1 className='sptext'>
            SPONSORS
            <h1 className='sptext-sub'>thankss</h1>
          </h1>
        </div>
      </div>  
    </div>
  )
}

export default SponsorPage