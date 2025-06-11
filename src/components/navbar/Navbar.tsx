import React, { useRef } from 'react';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';


const buttonData = [
  "All", "Concerns", "cancer", "Metabolism", "Diabetese", "Heart", "Kidney", "Liver",
  "Blood", "Lungs", "Skin", "Vision", "Mental", "Sleep", "Hydration", "Immunity", "Allergies", "Bones"
];

function Navbar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
    <div className="relative w-full border-b border-black shadow-2xl bg-white h-[80px] flex items-center">
      
      <div
        ref={scrollRef}
        className="containerN flex gap-3 items-center overflow-x-auto scrollbar-hide px-4 w-full pr-[50px]"
      >
        {buttonData.map((item, index) => (
          <div
            key={index}
            className="bg-blue-900 min-w-[100px] h-[40px] text-white flex items-center justify-center gap-1
              border border-black rounded-3xl shadow-xl hover:bg-red-700 px-4"
          >
            <div>i</div>
            <div>{item}</div>
          </div>
        ))}
      </div>

      <button
        className="absolute w-[50px] right-2 bg-white border border-black rounded-full p-2 shadow-md hover:bg-gray-200"
        onClick={scrollRight}
      >
        <div>right btn</div>

      </button>
    </div>
    </>
  );
}

export default Navbar;
