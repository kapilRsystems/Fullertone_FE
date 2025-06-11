import React from 'react'
import "./Details.css"

function Details() {
    return (
        <>
            <div className='relative inline-block  text-left top-[10px] left-[50px] text-blue-400'>
                <div className='Details flex  gap-3 '>
                    <div className='bg-white h-[190px] w-[200px] flex flex-col justify-center items-center gap-2 rounded-sm shadow-xl'>
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                          <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>name</div>
                        <div className='flex justify-center items-center gap-1 '>
                            <div>female</div><span>/</span>
                            <div>birthday</div><span>/</span>
                            <div>age</div>
                        </div>
                        <div>Pacific Island</div>
                    </div>


                    
                        <div className='containerD flex flex-col bg-white h-[190px] w-[700px] gap-2 rounded-sm shadow-xl '>

                            <div className='margin flex justify-between'>
                              <div>
                                <div className='flex gap-2'>
                                  <div>i</div>
                                  <div>Height</div>
                                </div>
                                <div>1.711 m</div>
                              </div>
                              <div>
                                <div className='flex gap-2'>
                                  <div>i</div>
                                  <div>BMI</div>
                                </div>
                                <div>0.711 kg/m<sup>2</sup></div>
                              </div>
                              <div>
                                <div className='flex gap-2'>
                                  <div>i</div>
                                  <div>Weight</div>
                                </div>
                                <div>68.1 kg</div>
                              </div>
                              <div>
                                <div className='flex gap-2'>
                                  <div>i</div>
                                  <div>Body Fat</div>
                                </div>
                                <div>22.2%</div>
                              </div>
                            </div>

                            <div className="bg-gray-200 h-[.6px] w-[670px]"></div>

                            <div className='flex justify-between'>
                              <div>
                                <div>General</div>
                                <div>Normal</div>
                              </div>
                              <div>
                                <div>Skin</div>
                                <div>Normal</div>
                              </div>
                              <div>
                                <div>Lymph Nodes</div>
                                <div>Normal Normal Non papable</div>
                              </div> 
                              <div>
                                <div>BP Pulse</div>
                                <div>Normal</div>
                              </div>
                            </div>

                      </div>
                    


                </div>
            </div>

        </>
    )
}

export default Details
