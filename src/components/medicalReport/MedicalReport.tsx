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
            <div>
              <h1>FULLERTON</h1>
              <h2>HEALTH</h2>
            </div>
          </div>

          <div className=" flex items-center gap-4">
            <div className="user-name">{props.name}</div>
            <div>HealthReport - 4/12/2002</div>
            <div className="cross" onClick={crossed}>Cross</div>
          </div>
        </div>
      )}
    </>
  );
}

export default MedicalReport;
