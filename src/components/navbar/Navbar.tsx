import React, { useRef, useState } from 'react';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';

const buttonData = [
  "All", "Concerns", "cancer", "Metabolism", "Diabetese", "Heart", "Kidney", "Liver",
  "Blood", "Lungs", "Skin", "Vision", "Mental", "Sleep", "Hydration", "Immunity", "Allergies", "Bones"
];

function Navbar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeButton, setActiveButton] = useState<string>("All") 

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const handleButtonClick = (item: string) => {
    setActiveButton(item);
  };

  return (
    <>
      <div className="relative w-full border-b border-black shadow-2xl bg-white h-[76px] flex items-center">
        <div
          ref={scrollRef}
          className="containerN flex gap-1 items-center overflow-x-auto scrollbar-hide px-4 w-full pr-[50px]"
        >
          {buttonData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleButtonClick(item)}
              className={`
                min-w-[100px] h-[40px] flex items-center justify-center
                border border-black rounded-3xl shadow-xl px-4 cursor-pointer
                ${activeButton === item ? 'bg-red-700 text-white' : 'bg-blue-900 text-white hover:bg-red-700'}
              `}
            >
              <div>i</div>
              <div>{item}</div>
            </div>
          ))}
        </div>

        <button
          className="w-[160px] h-[70px] bg-white"
          onClick={scrollRight}
        >
          <div>right btn</div>
        </button>
      </div>
    </>
  );
}

export default Navbar;
