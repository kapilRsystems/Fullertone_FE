import React, { useState } from 'react';
import './Medical.css';

interface MedicalReportProps {
  name: string;
}

function MedicalReport(props: MedicalReportProps) {
  const [isClicked, setIsClicked] = useState(false);

  function crossed() {
    console.log('clicked');
    setIsClicked(true);
  }

  return (
    <>
      {!isClicked && (
        <div className="container">
          <div className=" flex gap-4 items-center">
            <div className="avatar">image</div>
            <div >
              <div className="font-bold italic text-3xl text-center text-white">FULLERTON</div>
              <div className='text-center'><span>-</span> HEALTH <span>-</span></div>
            </div>
          </div>

          <div className=" flex items-center ">
            <div className="w-[185px] h-[46px] text-[#FFFFFF] font-normal text-left "  style={{ fontSize: '34px', lineHeight: '46px', fontFamily: 'Segoe UI', letterSpacing: '0px' }} >{props.name}</div>
            <div className='w-[316px] h-[35px] font-normal text-[#FFFFFF] text-center '   style={{ fontSize: '20px', lineHeight: '30px', fontFamily: 'Segoe UI' }}>HealthReport - 4/12/2002</div>
            <div className="cross" onClick={crossed}>Cross</div>
          </div>
        </div>
      )}
    </>
  );
}

export default MedicalReport;
