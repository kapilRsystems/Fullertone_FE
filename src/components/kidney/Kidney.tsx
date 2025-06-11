import React, { useState } from 'react';
import "./Kidney.css"
import { BodyComponent } from '@darshanpatel2608/human-body-react'
import Navbar from '../navbar/Navbar';
import MedicalReport from '../medicalReport/MedicalReport';
import Details from '../DetailsCmp/Details';
import History from '../HistoryCmp/History'
import ProgressBar from '../ProgressBarCmp/ProgressBar';


function Kidney() {

  const [isOpen, setIsOpen] =  useState<number | null>(null);
  const [selected, setSelected] = useState("default-radio-2");


const toggleDropdown = (id: number) => {
  setIsOpen(prev => (prev === id ? null : id));
};

  return (
    <>
    <MedicalReport/>
    <Navbar/>
      <div className='flex justify-between h-full bg-blue-100'>

        <div className='kidney-page flex justify-center items-center w-1/4 h-full'>
            <BodyComponent partsInput={{}}  />
        </div>
        
        <div className='flex flex-col w-4/4 h-full'>


          <Details/>
          <History/>
          
            <div className="relative inline-block  w-[900px] text-left top-[10px] left-[80px]">
              <div>Kidney</div>
                <button
                  onClick={() => toggleDropdown(1)}
                  type="button"
                  className="button w-[900px] h-[40px] text-white bg-blue-400 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-400 "
                >
                  
                  Dropdown Button1 
                  <svg className={`w-2.5 h-2.5 ms-3 absolute right-[30px] transform transition-transform duration-300 ${
                      isOpen === 1 ? '-rotate-180' : ''
                    }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {isOpen ===1 && (
                  <div className='detail w-[900px] h-[200px] bg-gray-100' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cumque!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, error.
                    <ProgressBar/>
                  </div>
                )}

                <button
                  onClick={()=>toggleDropdown(2)}
                  type="button"
                  className="button w-[900px] h-[40px] text-white bg-blue-400 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-400 "
                >
                  Dropdown Button2
                  <svg className="w-2.5 h-2.5 ms-3 absolute right-[30px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {isOpen ==2 && (
                  <div className='w-[900px] h-[200px] bg-gray-100' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cumque!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, error.
                    <ProgressBar/>
                  </div>
                )}
                

                <button
                  onClick={()=>toggleDropdown(3)}
                  type="button"
                  className="button w-[900px] h-[40px] text-white bg-blue-400 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-400 "
                >
                  Dropdown Button3
                  <svg className="w-2.5 h-2.5 ms-3 absolute right-[30px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {isOpen ==3 && (
                  <div className='w-[900px] h-[200px] bg-gray-100' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cumque!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, error.
                    <ProgressBar/>
                  </div>
                )}

                <button
                  onClick={()=>toggleDropdown(4)}
                  type="button"
                  className="button w-[900px] h-[40px] text-white bg-blue-400 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-400 "
                >
                  Dropdown Button4
                  <svg className="w-2.5 h-2.5 ms-3 absolute right-[30px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {isOpen ==4 && (
                  <div className='w-[900px] h-[200px] bg-gray-100' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cumque!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, error.
                    <ProgressBar/>
                  </div>
                )}

      
        </div>
        </div>
      </div>
    </>
  )
}

export default Kidney
