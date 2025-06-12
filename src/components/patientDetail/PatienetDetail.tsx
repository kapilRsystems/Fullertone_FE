import React from 'react';
import './Patient.css';
import { Button } from '@progress/kendo-react-buttons';
import '@progress/kendo-theme-default/dist/all.css';

function PatienetDetail() {
  return (
    <>
      <div className="containerP text-blue-400 px-4 py-2">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base md:text-lg">
          <h2 className="font-semibold">Patient Name</h2>
          <h3>Gender</h3>
          <h3>Age</h3>
          <span className="hidden sm:inline">|</span>
          <h3>Patient ID</h3>
          <span className="hidden sm:inline">|</span>
          <h3>NHS Number</h3>
          <span className="hidden sm:inline">|</span>
          <h3>
            <a href="#" className="underline hover:text-blue-600 transition">
              Recommendations
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}

export default PatienetDetail;
