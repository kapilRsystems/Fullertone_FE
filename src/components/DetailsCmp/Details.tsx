import React from 'react';
import './Details.css';

function Details() {
  return (
    <>
     
        
          <div className="containerD  flex flex-col bg-white h-auto w-[900px] gap-4 p-4">

            <div className="flex gap-40">
              <div>
                <div className="flex gap-2">
                  <div>i</div>
                  <div>Height</div>
                </div>
                <div className='font-bold text-blue-600'>1.711 m</div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div>i</div>
                  <div>BMI</div>
                </div>
                <div className='font-bold text-blue-600'>0.711 kg/m<sup>2</sup></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div>i</div>
                  <div>Weight</div>
                </div>
                <div className='font-bold text-blue-600'>68.1 kg</div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div>i</div>
                  <div>Body Fat</div>
                </div>
                <div className='font-bold text-blue-600'>22.2%</div>
              </div>
            </div>

            <div className="bg-gray-200 h-[1px] w-full"></div>

            <div className="flex gap-40">
              <div>
                <div>General</div>
                <div className='font-bold text-blue-600'>Normal</div>
              </div>
              <div>
                <div>Skin</div>
                <div className='font-bold text-blue-600'>Normal</div>
              </div>
              <div>
                <div>Lymph Nodes</div>
                <div className='font-bold text-blue-600'>Normal Normal Non palpable</div>
              </div>

            </div>

            <div className="bg-gray-200 h-[1px] w-full"></div>

            <div className="containerD flex justify-between bg">
              <div>
                <div className="font-bold">Medical History</div>
                <ul className="font-bold text-blue-600 list-disc text-sm pl-4">
                  <li>Glasstone</li>
                  <li>High Blood Pressure</li>
                </ul>
              </div>

              <div>
                <div className="font-bold">Past Surgical History</div>
                <ul className="font-bold text-blue-600 list-disc text-sm pl-4">
                  <li>Appendotiso</li>
                </ul>
              </div>

              <div>
                <div className="font-bold">Family Medical History</div>
                <ul className="font-bold text-blue-600 list-disc text-sm pl-4">
                  <li>Father: Heart Issue</li>
                  <li>Mother: Diabetes</li>
                </ul>
              </div>

              <div>
                <div className="font-bold">Lifestyle And Health Habits</div>
                <ul className="font-bold text-blue-600 list-disc text-sm pl-4">
                  <li>Smoking: No</li>
                  <li>Alcohol: No</li>
                </ul>
              </div>
            </div>

          </div>
        
      
    </>
  );
}

export default Details;
