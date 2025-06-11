import React from 'react'
import "./Patient.css"
import { Button } from '@progress/kendo-react-buttons';
import '@progress/kendo-theme-default/dist/all.css';

function PatienetDetail() {
  return (
    <>
      <div className='containerP flex justify-center gap-[40px] h-[40px] w-100% text-blue-400 '>
        <h2>Patient name</h2>
        <h3>Gender</h3>
        <h3>Age</h3>
        <span>|</span>
        <h3>Patient ID</h3>
        <span>|</span>
        <h3>NHS Number</h3>
        <span>|</span>
        <h3><a href="#">Recommendations</a></h3>
        {/* <Button className="bg-red-500 hover:bg-red-600 text-white">
          Kendo React
        </Button> */}
      </div>
    </>
  )
}

export default PatienetDetail
