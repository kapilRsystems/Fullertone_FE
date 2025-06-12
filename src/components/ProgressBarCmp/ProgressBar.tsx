import React from 'react';
import './Progress.css';

interface ProgressBarProps {
  degree: string | number;
}

function ProgressBar(props: ProgressBarProps) {
  return (
    <div style={{ width: '80%', margin: '40px auto' }}>
      <div className="progress-container">
        <div className="progress-fill"></div>

        <div className="marker" style={{ left: '0%' }}>0</div>
        <div className="marker" style={{ left: '9%' }}>9</div>
        <div className="marker" style={{ left: '90%' }}>90</div>
        <div className="cloud" style={{ left: `${props.degree}%` }}>
          {props.degree} mg/dl Noraml
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
