import React, { useState } from 'react';
import "./Kidney.css";
import { BodyComponent } from '@darshanpatel2608/human-body-react';
import Navbar from '../navbar/Navbar';
import MedicalReport from '../medicalReport/MedicalReport';
import Details from '../DetailsCmp/Details';
import ProgressBar from '../ProgressBarCmp/ProgressBar';

function Kidney() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [selected, setSelected] = useState("default-radio-2");

  const toggleDropdown = (id: number) => {
    setIsOpen(prev => (prev === id ? null : id));
  };

  const name = "sahra smith";

  return (
    <>
      <MedicalReport name={name} />
      <Navbar />
      <div className='flex justify-between h-full bg-blue-100'>
        <div className='kidney-page flex justify-center items-center lg:w-1/4 w-full h-full p-4'>
          <BodyComponent partsInput={{}} />
        </div>

        <div className='flex flex-col w-full max-w-[1000px] px-4 py-4'>
          <div className="relative w-full max-w-[900px] mx-auto text-left mb-4">
            <button
              onClick={() => toggleDropdown(0)}
              type="button"
              className="button w-full max-w-[900px] h-[40px] text-white bg-blue-400 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              <div className=" flex items-center gap-2 w-full">
                <div className='flex gap-4'>
                  <div className="user-name">Sahra smith</div>
                </div>
                <div>Female</div> <span>|</span>
                <div>14 jan,1999 </div> <span>|</span>
                <div>72 Yrs</div> <span>|</span>
                <div>Asian</div>
              </div>
              <svg className={`svg w-2.5 h-2.5 ms-3 absolute right-[30px] transform transition-transform duration-300 ${isOpen === 0 ? '-rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {isOpen === 0 && (
              <div >
                <Details />
              </div>
            )}

            <button
              onClick={() => toggleDropdown(1)}
              type="button"
              className="button w-full max-w-[900px] h-[40px] text-white bg-blue-400 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Dropdown Button1
              <svg className={`svg2 w-2.5 h-2.5 ms-3 absolute right-[30px] transform transition-transform duration-300 ${isOpen === 1 ? '-rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {isOpen === 1 && (
              <div className='dropdown-panel flex flex-col w-full max-w-[900px] h-auto bg-white mt-2 p-4 gap-4'>
              
                <div className='dropdown-item flex justify-between items-center w-full gap-4'>
                  <div className='flex flex-col justify-center items-center w-full max-w-[400px] h-[90px]'>
                    <div className='flex gap-2'>
                      <div>Systotic Blood Pressure</div>
                      <div>Borderline High</div>
                    </div>
                    <div>133 mmHg <span className="text-gray-500">[Normal: &lt;130 mmHg]</span></div>
                  </div>
                  <div className='w-[400px] max-w-[500px] h-[50px]'><ProgressBar degree={"50"} /></div>
                </div>
                        
                <div className='dropdown-item flex justify-between items-center w-full gap-4'>
                  <div className='flex flex-col justify-center items-center w-full max-w-[400px] h-[90px]'>
                    <div className='flex gap-2'>
                      <div>Systotic Blood Pressure</div>
                      <div>Borderline High</div>
                    </div>
                    <div>133 mmHg <span className="text-gray-500">[Normal: &lt;130 mmHg]</span></div>
                  </div>
                  <div className='w-[400px] max-w-[500px] h-[50px]'><ProgressBar degree={"90"} /></div>
                </div>
                        
                <div className='detail'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perferendis obcaecati ipsa quisquam
                   reprehenderit, animi ex voluptatem ab culpa quidem!
                </div>
                        
              </div>
            )}


            <button
              onClick={() => toggleDropdown(2)}
              type="button"
              className="button w-full max-w-[900px] h-[40px] text-white bg-blue-400 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Dropdown Button2
              <svg className="svg2 w-2.5 h-2.5 ms-3 absolute right-[30px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kidney;
