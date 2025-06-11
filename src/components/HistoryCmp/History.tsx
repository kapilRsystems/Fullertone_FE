import React from 'react'
import "./History.css"

function History() {
  return (
    <>
      <div className='main relative text-left top-[10px] left-[80px] text-blue-400'>
        <div className='flex gap-9'>
          <div className='inline-block text-left'>
            <div className='history mb-2 font-bold'>Medical History</div>
            <div className='bg-white h-[100px] w-[200px] flex flex-col justify-center items-center gap-0 rounded-sm shadow-xl'>
              <div>Glasstone</div>
              <div>High Blood Pressure</div>
            </div>
          </div>
          <div className='inline-block text-left'>
            <div className='history mb-2 font-bold'>Past Surgical History</div>
            <div className='bg-white h-[100px] w-[200px] flex flex-col justify-center items-center gap-2 rounded-sm shadow-xl'>
              <div>Appendotiso</div>
              <div></div>
            </div>
          </div>
          <div className='inline-block text-left'>
            <div className='history mb-2 font-bold'>Family medical History</div>
            <div className='bg-white h-[100px] w-[200px] flex flex-col justify-center items-center gap-2 rounded-sm shadow-xl'>
              <div>Father : Heart Issue</div>
              <div>Mother : Diabetes</div>
            </div>
          </div>
          <div className='inline-block text-left'>
            <div className='history mb-2 font-bold'>Lifestyle And Health Habits</div>
            <div className='bg-white h-[100px] w-[200px] flex flex-col justify-center items-center gap-2 rounded-sm shadow-xl'>
              <div>Smoking:no</div>
              <div>Alcohol:no</div>
              <div>Beer: sometime</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default History
