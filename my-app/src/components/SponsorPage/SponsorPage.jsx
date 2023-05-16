import React from 'react'
import NavPage from '../Navbar/Navbar'
import './SponsorPage.css'
import GeneHaas from './Gene Haas Logo.png'
import OhanaCo from './Ohana & Co Logo.png'

const SponsorPage = () => {
  return (
    <div>
      <div className='black'>
        <NavPage/>
        <div className='bg-sponsors header'>
          <h1 className='sptext'>
            SPONSORS
            <h1 className='sptext-sub'>THANK YOU FOR SUPPORTING OUR TEAM</h1>
            <h1 className='sptext-sub'>SERGEY DONT CHECK THE MOBILE SCREEN VERSION PLS</h1>
          </h1>
        </div>
        <div className="sp-photo-grid">
          <div className="sp-row">
            <img src={GeneHaas} alt="Gene Haas Foundation" />
            <img src={OhanaCo} alt="Ohana & Co"/>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default SponsorPage