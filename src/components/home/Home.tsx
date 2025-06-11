import React from 'react'
import "./Home.css"
import MedicalReport from '../medicalReport/MedicalReport'
import PatienetDetail from '../patientDetail/PatienetDetail'
import { BodyComponent } from '@darshanpatel2608/human-body-react'
import { NavLink } from 'react-router-dom'

function Home() {
  
  return (
    <>
        <MedicalReport/>
        <PatienetDetail/>

        <div className='containerH flex justify-center gap-[100px]'>

          <div className='flex flex-col justify-center items-center h-[500px] w-[200px] gap-[100px] text-blue-400'>

          <div className='flex gap-[20px]'>
            <div>img</div>
            <div>
              <h1>Diabetese Profile</h1>
              <h2>hb</h2>
              <h2>percent</h2>
            </div>
            </div>

          <div className='flex gap-[20px]'>
            <NavLink to="/kidney">
              <div>img</div>
            <div>
              <h1>Kidney Function</h1>
              <h2>hb</h2>
              <h2>percent</h2>
            </div>
            </NavLink>
          </div>

          <div className='flex gap-[20px]'>
            <div>img</div>
            <div>
              <h1>Liver Function</h1>
              <h2>hb</h2>
              <h2>percent</h2>
            </div>
          </div>
        </div>

        <div className='home-body w-[250px] text-center'>
          <BodyComponent partsInput={{}}  />
        </div>

        <div className='flex flex-col justify-center items-center h-[500px] w-[200px] gap-[100px] text-blue-400'>

          <div className='flex gap-[20px]'>
            <div>img</div>
            <div>
              <h1>Liquid Profile</h1>
              <h2>hb</h2>
              <h2>percent</h2>
            </div>
          </div>

          <div className='flex gap-[20px]'>
            <div>img</div>
            <div>
              <h1>Thyroid Function</h1>
              <h2>hb</h2>
              <h2>percent</h2>
            </div>
          </div>
          
          <div className='flex gap-[20px]'>
            <div>img</div>
            <div>
              <h1>Complete Blood Count</h1>
              <h2>hb</h2>
              <h2>percent</h2>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Home
