import React, { useState } from 'react';
import './Medical.css';

function MedicalReport() {
  const [isClicked, setIsClicked] = useState(false);

  function crossed() {
    console.log('clicked');
    setIsClicked(true);
  }

  return (
    <>
      {!isClicked && (
        <div className="container">
          {/* Left side: Logo + Text */}
          <div className="left-section flex gap-4 items-center">
            <div className="avatar">image</div>
            <div>
              <h1>FULLERTON</h1>
              <h2>HEALTH</h2>
            </div>
          </div>

          {/* Right side: Name + Cross */}
          <div className="right-section flex items-center gap-4">
            <div className="user-name">Sarah Smith</div>
            <div>HealthReport - 4/12/2002</div>
            <div className="cross" onClick={crossed}>Cross</div>
          </div>
        </div>
      )}
    </>
  );
}

export default MedicalReport;
